'use client';

interface ImagePreviewProps {
  preview: string;
}

export default function ImagePreview({ preview }: ImagePreviewProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-border bg-card shadow-sm">
      <img
        src={preview || "/placeholder.svg"}
        alt="Uploaded image"
        className="w-full h-auto max-h-96 object-cover"
      />
    </div>
  );
}
