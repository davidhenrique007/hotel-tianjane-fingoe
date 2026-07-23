import { useState } from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import FaqAccordion from './FaqAccordion';
import { faqItems } from '../../data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tudo o que precisa de saber antes de reservar"
        />

        <div>
          {faqItems.map((item) => (
            <FaqAccordion
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
