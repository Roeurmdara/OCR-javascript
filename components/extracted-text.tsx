'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ExtractedTextProps {
  text: string;
}

export default function ExtractedText({ text }: ExtractedTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 rounded-lg border border-border bg-card p-6 overflow-auto">
        <p className="text-foreground whitespace-pre-wrap text-sm leading-relaxed">
          {text}
        </p>
      </div>

      <Button
        onClick={handleCopy}
        variant="outline"
        className="mt-4 w-full"
      >
        {copied ? '✓ Copied!' : 'Copy Text'}
      </Button>
    </div>
  );
}
