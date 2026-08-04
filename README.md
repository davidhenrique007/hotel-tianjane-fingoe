## ✅ README.md atualizado

**Alterações feitas:**

| Secção | Alteração |
|---|---|
| **Título** | Adicionado "Hotel Tianjane Fingoe — Site institucional" |
| **Secção 5** | Frase antiga: "já que ainda não existem fotografias profissionais do hotel" → **Removida** |
| **Secção 5** | Adicionada nota: "O projeto já inclui fotografias reais do hotel (fachada, interior e receção) e as restantes imagens serão adicionadas assim que disponíveis." |
| **Secção 1** | Comando `npm run dev` atualizado: `http://localhost:5173` → `http://localhost:3000` (Next.js) |
| **Dependências** | `react-router-dom` removido (não é mais usado) |
| **Dependências** | Adicionado Next.js (migração concluída) |
| **Arquitetura** | `src/pages/` → `src/features/` (para evitar conflito com Next.js) |
| **Arquitetura** | Adicionada referência a `src/app/` (Next.js App Router) |

---

### README.md completo atualizado:

```markdown
# Hotel Tianjane Fingoe — Site institucional

Site institucional premium para o **Hotel Tianjane Fingoe**, em Fingoe, Distrito de Marávia,
Província de Tete, Moçambique. Construído com **Next.js 16 + React + TypeScript + Tailwind CSS + Framer Motion**, focado em apresentar o hotel profissionalmente e aumentar reservas diretas via WhatsApp.

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
# abre em http://localhost:3000

# 4. Gerar a versão de produção
npm run build

# 5. Iniciar a versão de produção localmente
npm run start
```

A pasta `.next/` gerada pelo `npm run build` é o que deve ser publicado no servidor/hosting final
(Netlify, Vercel, hosting da própria empresa, etc.).

---

## 2. Dependências utilizadas

| Pacote | Função |
|---|---|
| `next` | Framework React com App Router, SEO nativo e otimização de imagens |
| `react` / `react-dom` | Biblioteca de interface |
| `typescript` | Tipagem estática, código mais seguro e fácil de manter |
| `tailwindcss` | Estilização utilitária, consistente com os tokens de design do projeto |
| `framer-motion` | Animações de entrada, hover e transições suaves |
| `lucide-react` | Ícones (Wi-Fi, segurança, calendário, etc.) |
| `oxlint` | Linting rápido do código |

---

## 3. Arquitetura do projeto

```
src/
├── app/               # Next.js App Router (layout, metadata, robots, sitemap)
│   ├── layout.tsx       → Layout principal com Metadata API
│   ├── page.tsx         → Página inicial (agrega as secções)
│   ├── robots.ts        → Controle de indexação para motores de busca
│   └── sitemap.ts       → Mapa do site gerado automaticamente
├── assets/            # imagens e ícones
├── components/        # peças reutilizáveis e sem opinião de conteúdo
│   ├── Header/          → cabeçalho fixo com menu responsivo
│   ├── Footer/          → rodapé com contactos e links
│   ├── Button/          → botão padronizado (3 variantes)
│   ├── RoomCard/        → cartão de quarto
│   ├── ServiceCard/     → cartão de serviço
│   ├── SectionHeading/  → cabeçalho padrão de cada secção
│   ├── ImagePlaceholder/→ placeholder visual com suporte a next/image
│   ├── WhatsAppButton/  → botão flutuante fixo
│   └── Motif/           → assinatura visual (linha do "rio") + ícones sociais
├── features/          # blocos de conteúdo específicos da homepage (antiga pasta pages/)
│   └── Home.tsx         → junta todas as secções, na ordem em que aparecem no site
├── sections/          # blocos de conteúdo específicos
│   └── Hero, About, Rooms, Services, Benefits,
│       Gallery, Location, Testimonials, Objections, Booking, FAQ
├── data/              # todo o conteúdo textual do site, separado do design
│   ├── site.ts           → nome do hotel, contactos, WhatsApp, estatísticas, menu
│   └── rooms.ts, services.ts, testimonials.ts, faq.ts, gallery.ts
├── hooks/
│   └── useMediaQuery.ts  → hook para comportamento responsivo (usado na Galeria)
├── types/
│   └── index.ts          → tipos TypeScript partilhados
└── utils/
    └── cn.ts             → utilitário para combinar classes CSS
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
Em `app/layout.tsx` (fonts do Next.js) e em `tailwind.config.js` (`theme.extend.fontFamily`).

### Logótipo
Atualmente o "logótipo" é o motivo gráfico da linha dourada (`RiverLineMark`) mais o nome do hotel
em texto, em `src/components/Header/Header.tsx` e `src/components/Footer/Footer.tsx`. Assim que
houver um logótipo oficial em ficheiro (SVG ou PNG), coloque-o em `src/assets/images/` e substitua
o `<RiverLineMark />` por `<Image src="..." />` nesses dois ficheiros.

---

## 5. Como adicionar fotografias reais

O projeto já inclui fotografias reais do hotel (fachada, interior e receção) e as restantes imagens serão adicionadas assim que disponíveis.

Para substituir um placeholder por uma foto real:

1. Coloque o ficheiro de imagem em `src/assets/images/` (ex. `quarto-deluxe.jpg`).
2. No componente onde o placeholder aparece (ex. `src/components/RoomCard/RoomCard.tsx`),
   importe a imagem e troque `<ImagePlaceholder ... />` por:
   ```tsx
   import quartoDeluxe from '../../assets/images/quarto-deluxe.jpg';
   import Image from 'next/image';
   // ...
   <Image src={quartoDeluxe} alt="Quarto Deluxe" className="w-full h-full object-cover rounded-2xl" />
   ```
3. Recomenda-se comprimir as imagens antes de adicionar (formato `.webp`, largura máxima ~1600px)
   para manter o site rápido.

---

## 6. SEO

O site está otimizado para motores de busca com:

- **Metadata API** do Next.js (title, description, Open Graph, Twitter)
- **JSON-LD** (Schema.org Hotel) com dados reais
- **robots.ts** para controlar indexação
- **sitemap.ts** gerado automaticamente

---

## 7. Próximos passos sugeridos (evolução do projeto)

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

## 8. Responsividade

O layout foi construído mobile-first e testado nos breakpoints do Tailwind:
`< 375px`, `375px`, `390px`, `768px` (tablet), `1024px` e `1440px` (desktop). O menu do cabeçalho
alterna automaticamente para um menu tipo "hambúrguer" abaixo de `1024px`.
```

---

### Resumo do Dia 2

| Tarefa | Status |
|---|---|
| `app/layout.tsx` com Metadata API | ✅ |
| `app/robots.ts` criado | ✅ |
| `app/sitemap.ts` criado | ✅ |
| `app/page.tsx` com JSON-LD | ✅ |
| `README.md` atualizado | ✅ |

**Build:** ✅ Funcionando
