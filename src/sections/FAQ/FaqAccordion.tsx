import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../../types';

interface FaqAccordionProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqAccordion({ item, isOpen, onToggle }: FaqAccordionProps) {
  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium text-forest">{item.question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-clay transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-sm leading-relaxed text-charcoal/70">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
