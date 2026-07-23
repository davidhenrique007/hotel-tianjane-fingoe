# Hotel Tianjane Fingoe — Site institucional

Site institucional premium para o **Hotel Tianjane Fingoe**, em Fingoe, Distrito de Marávia,
Província de Tete, Moçambique. Construído com React + Vite + TypeScript + Tailwind CSS + Framer
Motion, focado em apresentar o hotel profissionalmente e aumentar reservas diretas via WhatsApp.

---

## 1. Como instalar e correr o projeto

Requisitos: [Node.js](https://nodejs.org) 18 ou superior.

```bash
# 1. Entrar na pasta do projeto
cd hotel-tianjane-fingoe

# 2. Instalar as dependências
npm install

# 3. Correr em modo de desenvolvimento (com recarregamento automático)
npm run dev
# abre em http://localhost:5173

# 4. Gerar a versão de produção (pasta dist/)
npm run build

# 5. Pré-visualizar a versão de produção localmente
npm run preview
```

A pasta `dist/` gerada pelo `npm run build` é o que deve ser publicado no servidor/hosting final
(Netlify, Vercel, hosting da própria empresa, etc.).

---

## 2. Dependências utilizadas

| Pacote | Função |
|---|---|
| `react` / `react-dom` | Biblioteca de interface |
| `react-router-dom` | Instalado e pronto para quando o site evoluir para múltiplas páginas (ex. página dedicada de reservas) |
| `vite` | Build tool — desenvolvimento rápido e build otimizado |
| `typescript` | Tipagem estática, código mais seguro e fácil de manter |
| `tailwindcss` | Estilização utilitária, consistente com os tokens de design do projeto |
| `framer-motion` | Animações de entrada, hover e transições suaves |
| `lucide-react` | Ícones (Wi-Fi, segurança, calendário, etc.) |
| `oxlint` | Linting rápido do código |

---

## 3. Arquitetura do projeto

```
src/
├── assets/            # imagens e ícones (vazio — ver secção 5)
├── components/        # peças reutilizáveis e sem opinião de conteúdo
│   ├── Header/          → cabeçalho fixo com menu responsivo
│   ├── Footer/          → rodapé com contactos e links
│   ├── Button/          → botão padronizado (3 variantes)
│   ├── RoomCard/        → cartão de quarto
│   ├── ServiceCard/     → cartão de serviço
│   ├── SectionHeading/  → cabeçalho padrão de cada secção
│   ├── ImagePlaceholder/→ placeholder visual (ver secção 5)
│   ├── WhatsAppButton/  → botão flutuante fixo
│   └── Motif/            → assinatura visual (linha do "rio") + ícones sociais
├── sections/           # blocos de conteúdo específicos da homepage
│   └── Hero, About, Rooms, Services, Benefits,
│       Gallery, Location, Testimonials, Objections, Booking, FAQ
├── pages/
│   └── Home.tsx         → junta todas as secções, na ordem em que aparecem no site
├── data/                # todo o conteúdo textual do site, separado do design
│   ├── site.ts            → nome do hotel, contactos, WhatsApp, estatísticas, menu
│   └── rooms.ts, services.ts, testimonials.ts, faq.ts, gallery.ts
├── hooks/
│   └── useMediaQuery.ts  → hook para comportamento responsivo (usado na Galeria)
├── types/
│   └── index.ts          → tipos TypeScript partilhados
└── utils/
    └── cn.ts              → utilitário para combinar classes CSS
```

**Porquê esta separação:** o conteúdo (textos, preços, contactos) vive todo em `src/data/`,
separado dos componentes visuais. Isto significa que consegue **atualizar textos e contactos sem
tocar em nenhum componente React** — ver secção seguinte.

---

## 4. Como editar o site

### Textos, quartos, serviços, contactos e WhatsApp
Tudo isto está centralizado em `src/data/`, sem precisar de tocar em componentes:

- **Nome, endereço, telefone, e-mail, WhatsApp, redes sociais, estatísticas do topo** →
  `src/data/site.ts`. O número de WhatsApp está no formato internacional sem `+` (ex.
  `258840000000`) — é o primeiro campo a atualizar antes de publicar.
- **Quartos e respetivas descrições/benefícios** → `src/data/rooms.ts`
- **Serviços do hotel** → `src/data/services.ts`
- **Depoimentos de hóspedes** → `src/data/testimonials.ts` (substituir os placeholders por
  depoimentos reais assim que existirem)
- **Perguntas frequentes** → `src/data/faq.ts`
- **Legendas da galeria** → `src/data/gallery.ts`

### Cores
Em `tailwind.config.js`, na secção `theme.extend.colors`. As cores estão nomeadas pelo papel que
desempenham (`forest`, `gold`, `cream`, `clay`) — mudar o valor hexadecimal atualiza a cor em todo
o site automaticamente.

### Tipografia
Em `index.html` (ligação às fontes Google Fonts "Fraunces" e "Work Sans") e em
`tailwind.config.js` (`theme.extend.fontFamily`).

### Logótipo
Atualmente o "logótipo" é o motivo gráfico da linha dourada (`RiverLineMark`) mais o nome do hotel
em texto, em `src/components/Header/Header.tsx` e `src/components/Footer/Footer.tsx`. Assim que
houver um logótipo oficial em ficheiro (SVG ou PNG), coloque-o em `src/assets/images/` e substitua
o `<RiverLineMark />` por `<img src="..." />` nesses dois ficheiros.

---

## 5. Como adicionar fotografias reais

O site foi entregue com **placeholders elegantes** (`ImagePlaceholder`) em vez de fotos de stock
genéricas, já que ainda não existem fotografias profissionais do hotel. Cada placeholder mostra a
legenda do que deve lá entrar (ex. "Quarto Deluxe — zona de estar com luz natural").

Para substituir por uma foto real:

1. Coloque o ficheiro de imagem em `src/assets/images/` (ex. `quarto-deluxe.jpg`).
2. No componente onde o placeholder aparece (ex. `src/components/RoomCard/RoomCard.tsx`),
   importe a imagem e troque `<ImagePlaceholder ... />` por:
   ```tsx
   import quartoDeluxe from '../../assets/images/quarto-deluxe.jpg';
   // ...
   <img src={quartoDeluxe} alt="Quarto Deluxe" className="w-full h-full object-cover rounded-2xl" />
   ```
3. Recomenda-se comprimir as imagens antes de adicionar (formato `.webp`, largura máxima ~1600px)
   para manter o site rápido.

---

## 6. Próximos passos sugeridos (evolução do projeto)

O projeto já está preparado para crescer. Sugestões, por ordem de impacto:

1. **Fotografia profissional** — o maior salto de qualidade percebida imediato.
2. **Backend de reservas** — o formulário em `src/sections/Booking/Booking.tsx` já reúne quarto,
   datas e nº de hóspedes; hoje envia isso por WhatsApp. Pode evoluir para verificar
   disponibilidade real ligando a uma API.
3. **Calendário de disponibilidade** visual, ligado a um sistema de gestão de reservas.
4. **Chat de atendimento** (além do WhatsApp) para visitantes internacionais.
5. **Testes A/B** no CTA principal do Hero ("Reserve o seu quarto" vs. variações) depois de o
   site já ter tráfego.
6. **SEO local contínuo** — o site já está preparado com metadados para "hotel em Fingoe", "hotel
   em Marávia" e "hospedagem em Tete"; vale a pena criar um perfil no Google Business com o mesmo
   nome e morada para reforçar esse posicionamento.
7. **Área administrativa** e **pagamentos online**, quando o volume de reservas justificar.

---

## 7. Responsividade

O layout foi construído mobile-first e testado nos breakpoints do Tailwind:
`< 375px`, `375px`, `390px`, `768px` (tablet), `1024px` e `1440px` (desktop). O menu do cabeçalho
alterna automaticamente para um menu tipo "hambúrguer" abaixo de `1024px`.
