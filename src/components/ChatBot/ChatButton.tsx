"use client";

import { MessageCircle } from 'lucide-react';

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatButton({ onClick, isOpen }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      aria-label="Abrir chat"
    >
      <MessageCircle className="h-6 w-6 text-forest-dark" />
    </button>
  );
}