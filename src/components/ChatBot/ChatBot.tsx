"use client";

import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatButton from './ChatButton';
import { siteConfig, whatsappLink } from '@/data/site';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Olá! Sou o assistente virtual do Hotel Tianjane Fingoe. Como posso ajudá-lo hoje? Posso falar sobre nossos quartos, serviços e localização.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messages.concat(userMessage).map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const assistantMessage: Message = {
          id: Date.now().toString(),
          role: 'assistant',
          content: data.reply,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error(data.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content:
          'Desculpe, tive um problema ao processar sua mensagem. Por favor, tente novamente ou fale diretamente com a receção pelo WhatsApp ou telefone.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <ChatButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex w-[380px] max-w-[calc(100vw-2rem)] flex-col rounded-2xl bg-forest-dark shadow-2xl border border-cream/10">
          {/* Cabeçalho */}
          <div className="flex items-center justify-between border-b border-cream/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-gold" />
              <span className="font-semibold text-cream">Hotel Tianjane Fingoe</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-cream/60 hover:text-cream"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mensagens */}
          <div className="flex max-h-[400px] min-h-[300px] flex-col gap-3 overflow-y-auto p-4">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-cream/10 px-4 py-2 text-sm text-cream">
                  <span className="animate-pulse">...digitando</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Botões de contacto */}
          <div className="border-t border-cream/10 px-4 py-2 flex gap-2">
            <a
              href={whatsappLink('Olá! Gostaria de falar sobre uma reserva no Hotel Tianjane Fingoe.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-green-600 px-3 py-1.5 text-center text-xs font-semibold text-white hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${siteConfig.phoneDisplay}`}
              className="flex-1 rounded-lg bg-gold px-3 py-1.5 text-center text-xs font-semibold text-forest-dark hover:bg-gold-dark transition"
            >
              Telefone
            </a>
          </div>

          {/* Input */}
          <div className="border-t border-cream/10 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                className="flex-1 rounded-xl border border-cream/15 bg-cream/5 px-3 py-2 text-sm text-cream placeholder-cream/40 focus:border-gold focus:outline-none"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="rounded-xl bg-gold px-3 py-2 text-forest-dark transition hover:bg-gold-dark disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}