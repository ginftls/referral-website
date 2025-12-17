'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  code: string;
  className?: string;
}

export function CopyButton({ code, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center gap-2 px-4 py-2 
        bg-gray-100 hover:bg-gray-200 
        border border-gray-300 rounded-lg
        font-mono text-sm font-medium text-gray-800
        transition-all duration-200
        ${copied ? 'bg-emerald-50 border-emerald-300 text-emerald-700' : ''}
        ${className}
      `}
    >
      <span className="select-all">{code}</span>
      {copied ? (
        <Check className="w-4 h-4 text-emerald-600" />
      ) : (
        <Copy className="w-4 h-4 text-gray-500" />
      )}
    </button>
  );
}