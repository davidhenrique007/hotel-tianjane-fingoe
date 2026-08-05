"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-cream-soft py-24 md:py-32">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="O que dizem os nossos hóspedes"
          title="Confiança construída estadia após estadia"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="flex flex-col gap-5 rounded-2xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <Quote size={26} className="text-gold" strokeWidth={1.5} />
              <blockquote className="text-[15px] leading-relaxed text-charcoal/80">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-charcoal/10 pt-4 text-xs text-charcoal/50">
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
