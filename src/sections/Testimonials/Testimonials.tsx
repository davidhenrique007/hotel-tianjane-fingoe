"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-cream-soft pt-12 pb-24 md:pt-12 md:pb-32">
      <div className="container-page flex flex-col gap-8 md:gap-14">
        <SectionHeading
          eyebrow="O que dizem os nossos hóspedes"
          title="Confiança construída estadia após estadia"
        />

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="flex flex-col gap-3 rounded-xl bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:gap-4 sm:p-6 md:gap-5 md:rounded-2xl md:p-7"
            >
              <Quote size={26} className="text-gold" strokeWidth={1.5} />
              <blockquote className="text-[15px] leading-relaxed text-charcoal/80">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-2.5 border-t border-charcoal/10 pt-3 text-xs text-charcoal/50 md:gap-3 md:pt-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest/8 font-display text-sm text-forest">
                  {testimonial.author.charAt(0)}
                </span>
                <span>
                  <span className="font-semibold text-forest">{testimonial.author}</span> — {testimonial.context}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}