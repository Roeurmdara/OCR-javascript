'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FileUploadArea from '@/components/file-upload-area';
import ImagePreview from '@/components/image-preview';
import ExtractedText from '@/components/extracted-text';

type Language = 'eng' | 'khm' | 'auto';

export default function OCRDemo() {
  const [uploadedImage, setUploadedImage] = useState<{
    file: File;
    preview: string;
  } | null>(null);
  const [extractedText, setExtractedText] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');
  const [language, setLanguage] = useState<Language>('auto');

  const handleFileSelected = (file: File, preview: string) => {
    setUploadedImage({ file, preview });
    setExtractedText('');
    setError('');
  };

  const preprocessImage = (imageData: ImageData): ImageData => {
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;

    // Convert to grayscale
    for (let i = 0; i < data.length; i += 4) {
      const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
      data[i] = gray;
      data[i + 1] = gray;
      data[i + 2] = gray;
    }

    // Increase contrast
    const contrast = 1.5;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.min(255, Math.max(0, (data[i] - 128) * contrast + 128));
      data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] - 128) * contrast + 128));
      data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] - 128) * contrast + 128));
    }

    return imageData;
  };

  const handleExtractText = async () => {
    if (!uploadedImage) return;

    setIsProcessing(true);
    setError('');

    try {
      const { createWorker } = await import('tesseract.js');
      
      let lang = language;
      if (lang === 'auto') {
        lang = 'eng+khm';
      }
      
      const worker = await createWorker(lang);
      
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = async () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          
          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('Failed to get canvas context');
          
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const processedImageData = preprocessImage(imageData);
          ctx.putImageData(processedImageData, 0, 0);
          
          const result = await worker.recognize(canvas.toDataURL());
          setExtractedText(result.data.text);
          await worker.terminate();
          setIsProcessing(false);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : 'Failed to process image'
          );
          setIsProcessing(false);
        }
      };
      img.src = uploadedImage.preview;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to extract text. Please try again.'
      );
      setIsProcessing(false);
    }
  };

  const handleClear = () => {
    setUploadedImage(null);
    setExtractedText('');
    setError('');
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="border-b border-border bg-card">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              OCR Text Extractor
            </h1>
            <p className="text-muted-foreground">
              Upload an image to extract text using Tesseract.js with Khmer and English support
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
          {!uploadedImage ? (
            <FileUploadArea onFileSelected={handleFileSelected} />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Preview Section */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Source Image
                </h2>
                <ImagePreview preview={uploadedImage.preview} />
              </div>

              {/* Extraction Section */}
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Extracted Text
                </h2>

                {/* Language Selection */}
                <div className="mb-4 flex gap-2">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as Language)}
                    disabled={isProcessing}
                    className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
                  >
                    <option value="auto">Auto Detect (Khmer + English)</option>
                    <option value="eng">English Only</option>
                    <option value="khm">Khmer Only</option>
                  </select>
                </div>

                {extractedText ? (
                  <ExtractedText text={extractedText} />
                ) : (
                  <div className="flex-1 rounded-lg border-2 border-dashed border-border bg-muted/50 flex flex-col items-center justify-center p-8">
                    {isProcessing ? (
                      <div className="text-center">
                        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-muted-foreground">
                          Extracting text from image...
                        </p>
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-center">
                        Click the extract button to process the image
                      </p>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <Button
                    onClick={handleExtractText}
                    disabled={isProcessing || !uploadedImage}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isProcessing ? 'Processing...' : 'Extract Text'}
                  </Button>
                  <Button
                    onClick={handleClear}
                    variant="outline"
                    className="flex-1"
                  >
                    Clear
                  </Button>
                </div>

                {error && (
                  <div className="mt-4 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
