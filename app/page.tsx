'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-card border-b border-border">
          <div className="max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight text-foreground">
                Extract Text from Images
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                Powerful OCR technology supporting Khmer and English with advanced preprocessing
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/demo">
                <Button className="px-8 py-3 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                  Try Demo Now
                </Button>
              </Link>
              <Button variant="outline" className="px-8 py-3 text-lg rounded-full">
                Learn More
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-sm text-muted-foreground">Khmer Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-accent rounded-full"></span>
                <span className="text-sm text-muted-foreground">English Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-sm text-muted-foreground">Image Preprocessing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto w-full">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Powerful Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Advanced OCR with preprocessing for maximum accuracy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔤</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Multilingual OCR
                </h3>
                <p className="text-muted-foreground">
                  Support for both Khmer and English text recognition with high accuracy
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Image Processing
                </h3>
                <p className="text-muted-foreground">
                  Automatic preprocessing including sharpening, contrast adjustment, and deskewing
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Fast & Reliable
                </h3>
                <p className="text-muted-foreground">
                  Client-side processing for instant results without server dependencies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto w-full space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Simple 3-Step Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Get text from images in seconds
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground">Upload Image</h3>
                <p className="text-muted-foreground">
                  Drag and drop or select an image file
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground">Select Language</h3>
                <p className="text-muted-foreground">
                  Choose Khmer, English, or auto-detect
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground">Extract & Copy</h3>
                <p className="text-muted-foreground">
                  Get your extracted text instantly
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Extract Text?
            </h2>
            <p className="text-xl text-muted-foreground">
              Start using our OCR tool now with support for Khmer and English
            </p>
            <Link href="/demo">
              <Button className="px-8 py-3 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                Go to Demo
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
