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
              className="flex flex-col gap-5 rounded-2xl bg-white p-7 shadow-card"
            >
              <Quote size={26} className="text-gold" strokeWidth={1.5} />
              <blockquote className="text-[15px] leading-relaxed text-charcoal/80">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-auto text-xs text-charcoal/50">
                <span className="font-semibold text-forest">{testimonial.author}</span> — {testimonial.context}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
