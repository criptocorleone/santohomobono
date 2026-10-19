# Santo Homobono — O Padroeiro dos Empresários
### Documento-mestre do projeto (Arquitetura · UX · Design · SEO · Astro)

Pasta local: `C:\Alpha\santohomobono` · Ferramenta: Antigravity · Framework: Astro

---

## 1. Posicionamento

**Promessa do site:** a referência em português sobre Santo Homobono de Cremona — o mercador do séc. XII que provou que é possível ser santo fazendo negócios.

**Tagline:** *"Homem bom de nome e de fato."* (da bula *Quia pietas*, 1199)

**Públicos (em ordem de prioridade):**
1. **Empresário/comerciante católico** — busca inspiração, oração, sentido para o trabalho. (Público da futura comunidade.)
2. **Devoto** — quer oração, novena, data da festa. (Maior volume de busca.)
3. **Estudioso/curioso** — história, fontes, canonização, Idade Média.
4. **Paróquias, associações comerciais, CDLs** — material para 13 de novembro.

**Diferencial competitivo:** hoje a internet em PT tem só páginas rasas de "santo do dia". Nós teremos profundidade acadêmica (Vauchez, Treccani, bula papal) + linguagem acessível + aplicação prática para o empresário de hoje. É um nicho de busca com pouca concorrência e alta intenção.

**Domínio sugerido (verificar disponibilidade):** `santohomobono.com.br` (principal) · alternativas: `padroeirodosempresarios.com.br`, `homobono.com.br`.

---

## 2. Arquitetura de informação (sitemap)

```
/                                   Home
/quem-foi-santo-homobono            Biografia completa (pilar SEO)
/historia/
    /cremona-no-seculo-xii          Contexto: comunas, guildas, comércio têxtil
    /a-conversao                    A virada aos ~50 anos
    /a-morte-na-missa               13/11/1197, igreja de Sant'Egidio
    /a-canonizacao                  Bula Quia pietas, Inocêncio III, recorde
    /linha-do-tempo                 Timeline interativa 1117 → hoje
/oracoes/
    /oracao-a-santo-homobono        (pilar SEO devocional)
    /oracao-do-empresario
    /oracao-do-comerciante
    /novena-de-santo-homobono       9 dias, com navegação dia a dia
    /ladainha
/padroeiro-dos-empresarios          Ética nos negócios, santidade no trabalho (pilar)
/festa-13-de-novembro               Festa, liturgia, como celebrar (sazonal)
/cremona/                           Lugares
    /catedral-e-cripta
    /igreja-de-santomobono
    /roteiro-de-peregrinacao
/arte-e-iconografia                 Galeria de obras + atributos (bolsa, tesoura)
/fontes-e-documentos                Bula, vitae, bibliografia (autoridade/E-E-A-T)
/milagres-e-tradicoes               Separando história de tradição piedosa
/perguntas-frequentes               FAQ (rich snippets)
/blog/                              Artigos (empresário cristão, ética, datas)
/comunidade                         Landing da comunidade de empresários (fase 2)
/sobre                              Quem mantém o site, propósito, fontes
/en/ e /it/                         Fase 3 (internacionalização)
```

**Regra de UX:** qualquer página no máximo a 2 cliques da Home; toda página de conteúdo termina com bloco "Continue lendo" (3 links internos) + CTA da comunidade.

---

## 3. Design system

**Conceito visual:** *"Manuscrito iluminado encontra editorial moderno."* Pergaminho, ouro e vermelho-cardinal da Cremona medieval, com tipografia e espaçamento de revista contemporânea. Sagrado sem ser kitsch; sóbrio o suficiente para um empresário compartilhar no LinkedIn.

### Paleta
| Token | Hex | Uso |
|---|---|---|
| `--pergaminho` | `#F6F0E4` | fundo principal |
| `--pergaminho-escuro` | `#EBE1CC` | seções alternadas, cards |
| `--tinta` | `#1F1A17` | texto |
| `--cardinal` | `#7A1E25` | cor de marca, títulos, links |
| `--ouro` | `#B08D3E` | detalhes, capitulares, divisores |
| `--ouro-claro` | `#D9C08A` | hover, bordas |
| `--pedra` | `#6B635A` | texto secundário |
Modo escuro: fundo `#16120F`, texto `#EDE4D3`, ouro mantido.

### Tipografia (Google Fonts)
- **Títulos:** *Cormorant Garamond* (600/700) — clássica, elegante.
- **Texto:** *Source Serif 4* (leitura longa) ou *Inter* para UI.
- **Detalhes/rótulos:** *Cinzel* em caixa-alta espaçada (ex.: "CREMONA · 1197").
- Capitular (drop cap) dourada na primeira letra de cada capítulo da biografia.

### Elementos assinatura
- Divisor ornamental (cruz + filete dourado) entre seções.
- Citações em latim com tradução abaixo (ex.: *Virtus morum et virtus signorum*).
- Selos "📜 Histórico" vs "🕯️ Tradição piedosa" para separar fato de lenda — gera confiança.
- Ícone da **bolsa de esmolas** como símbolo do site (favicon e marca).
- Imagens em moldura fina dourada, com legenda: obra, artista, ano, local, licença.

### Componentes
`Hero` · `CapituloBiografia` · `CitacaoLatina` · `Timeline` · `CardOracao` (com botão copiar e compartilhar no WhatsApp) · `GaleriaArte` (lightbox) · `MapaCremona` · `FAQ` (accordion) · `SeloFonte` · `CTAComunidade` · `ContinueLendo` · `Breadcrumbs` · `ContadorFesta` (contagem para 13/11).

---

## 4. Home — wireframe por seções

1. **Hero:** imagem de arte sacra do santo (domínio público) · H1 "Santo Homobono, o padroeiro dos empresários" · subtítulo "O mercador de Cremona que se tornou o primeiro leigo comum canonizado na Idade Média." · CTAs: *Conheça a história* / *Rezar a oração*.
2. **Faixa de números:** 1197 (morte) · 14 meses (canonização recorde) · 13 de novembro (festa) · 800+ anos de devoção.
3. **"Homem bom de nome e de fato"** — resumo em 3 parágrafos + link para a biografia.
4. **Oração do Empresário** em destaque (card bonito, botão copiar/WhatsApp).
5. **Linha do tempo resumida** (6 marcos, scroll horizontal no mobile).
6. **Por que ele importa para quem empreende hoje** — 3 pilares: Honestidade · Generosidade · Paz.
7. **Galeria de arte** (4 obras + "ver todas").
8. **Contador para 13 de novembro** + como celebrar.
9. **CTA Comunidade de empresários** (lista de espera por enquanto).
10. **FAQ curto** (5 perguntas) + rodapé com fontes.

---

## 5. Stack técnica (Astro)

- **Astro 5** (estático, `output: 'static'`) — performance máxima, ideal para SEO.
- **Content Collections + MDX** para biografia, orações, blog, obras de arte (cada coleção com schema Zod).
- **Tailwind CSS 4** com os tokens acima.
- **astro:assets** (`<Image />`) — AVIF/WebP, lazy load, dimensões definidas (CLS zero).
- **@astrojs/sitemap**, **@astrojs/rss** (blog), **astro-seo** ou componente `<SEO>` próprio.
- **Pagefind** — busca interna estática.
- **@fontsource** (fontes auto-hospedadas) — evita bloqueio de renderização.
- **View Transitions** do Astro para navegação suave.
- Deploy: **Vercel** ou Cloudflare Pages · Analytics: GA4 + Search Console.
- i18n nativo do Astro preparado para `/en` e `/it` (fase 3).

### Estrutura de pastas
```
santohomobono/
├─ public/              favicon, robots.txt, og-default.jpg
├─ src/
│  ├─ assets/images/    arte, Cremona, ícones (otimizadas pelo Astro)
│  ├─ components/       Hero, Timeline, CardOracao, FAQ, SEO, JsonLd...
│  ├─ content/
│  │  ├─ historia/      *.mdx
│  │  ├─ oracoes/       *.mdx
│  │  ├─ obras/         *.md (galeria: título, artista, ano, local, licença)
│  │  ├─ blog/          *.mdx
│  │  └─ faq.json
│  ├─ content.config.ts schemas Zod
│  ├─ layouts/          BaseLayout, ArtigoLayout, OracaoLayout
│  ├─ pages/            rotas acima
│  └─ styles/global.css tokens + tipografia
├─ astro.config.mjs
└─ docs/PROJETO_SANTO_HOMOBONO.md  (este arquivo)
```

---

## 6. SEO — estratégia

### Palavras-chave
| Cluster | Termos principais | Página-alvo |
|---|---|---|
| Devocional (volume alto) | oração santo homobono · oração a santo homobono para os negócios · oração do comerciante · novena santo homobono | /oracoes/* |
| Identidade | santo homobono · quem foi santo homobono · são homobono · homobono de cremona | /quem-foi-santo-homobono |
| Padroado | padroeiro dos empresários · padroeiro dos comerciantes · santo dos negócios · santo protetor do comércio | /padroeiro-dos-empresarios |
| Sazonal | dia de santo homobono · 13 de novembro santo · festa santo homobono | /festa-13-de-novembro |
| Autoridade/cauda longa | bula quia pietas · canonização mais rápida · primeiro leigo canonizado · sant'omobono cremona | /historia/*, /fontes |

Pico de busca: **outubro–novembro**. Publicar o núcleo até o fim de outubro de 2026 para indexar antes de 13/11.

### On-page (checklist por página)
- 1 H1 com a keyword principal; H2/H3 em hierarquia lógica.
- Title ≤ 60 caracteres, meta description ≤ 155, URL curta em português sem acentos.
- Canonical, Open Graph e Twitter Card com imagem 1200×630 por página.
- Alt text descritivo em todas as imagens (obra + artista).
- Links internos: cada página pilar recebe links de todas as páginas do seu cluster.
- Breadcrumbs visíveis + schema.

### Dados estruturados (JSON-LD)
- `WebSite` + `SearchAction` (Home) · `Organization` (sobre)
- `Person` para o santo (birthDate ~1117, deathDate 1197-11-13, deathPlace Cremona, `sameAs` Wikipedia/Wikidata)
- `Article` em biografia/história/blog (autor, datas, citações)
- `FAQPage` na FAQ e no fim das páginas pilar
- `BreadcrumbList` em todas
- `Event` para a festa de 13 de novembro (atualizar anualmente)
- `ImageObject`/`VisualArtwork` na galeria

### E-E-A-T (crucial em tema religioso/histórico)
- Página **Fontes e Documentos** com bibliografia real (Vauchez, Piazzi, Treccani, Webb, Prudlo & Voss, mensagem de João Paulo II de 1997).
- Citações com link em cada afirmação histórica.
- Página **Sobre** com quem mantém o site e o propósito.
- Data de "última revisão" visível nos artigos.

### Técnico
- Meta: Lighthouse ≥ 95 em tudo; LCP < 2s; CLS ≈ 0.
- `sitemap-index.xml`, `robots.txt`, RSS do blog.
- Hreflang quando houver `/en` e `/it`.

---

## 7. Imagens — fontes seguras

- **Wikimedia Commons:** categoria *Saint Homobonus* / *Omobono Tucenghi* — conferir a licença de cada arquivo (domínio público ou CC BY-SA com atribuição).
- Obras antigas (ex.: Bartolomeo Montagna, c. 1490–1500) — fotos de museus às vezes têm licença própria; sempre verificar.
- **Cremona:** fotos da Catedral, cripta e igreja de Sant'Omobono no Commons ou contato com o turismo de Cremona / diocese.
- **Ilustrações próprias:** ícones (bolsa, tesoura, balança, cruz) em SVG feitos sob medida — dão identidade.
- Imagens geradas por IA: só para elementos decorativos, nunca apresentadas como representação histórica.
- Toda imagem com legenda: obra · artista · ano · local · licença.

---

## 8. Conteúdo — plano editorial

**Lote 1 (lançamento, até ~31/out):** Home · Quem foi · Oração a Santo Homobono · Oração do Empresário · Novena · Padroeiro dos empresários · Festa de 13/11 · Canonização · Linha do tempo · FAQ · Fontes · Sobre.
**Lote 2 (novembro):** Cremona (3 páginas) · Arte e iconografia · Milagres e tradições · Contexto histórico · Conversão · Morte na missa.
**Blog contínuo (2 posts/mês):** "10 lições de Santo Homobono para empresários", "O que é o justo preço", "Como celebrar 13 de novembro na sua empresa", "Santos padroeiros das profissões", "Ética nos negócios na Doutrina Social da Igreja".

Fonte do conteúdo: o dossiê de pesquisa já produzido (bula, vitae, Treccani, Vauchez etc.).

---

## 9. Comunidade (gancho para a fase 2)

Já no lançamento: página `/comunidade` com formulário de lista de espera (nome, empresa, cidade, WhatsApp) e CTA em todas as páginas. Isso valida a demanda antes de abrir o grupo e constrói a base. Detalhamos formato (comunidade WhatsApp, encontros, oração mensal, rede de negócios) depois.

---

## 10. Roadmap

| Fase | Entrega |
|---|---|
| 0 | Domínio, repositório, setup Astro + design system |
| 1 | Lote 1 de conteúdo + SEO técnico + deploy + Search Console (meta: no ar antes de 13/11/2026) |
| 2 | Lote 2, galeria completa, comunidade, blog |
| 3 | Versões /en e /it, parcerias com paróquias e associações comerciais |

---

## 11. Prompt para colar no Antigravity

> Crie um projeto **Astro 5** na pasta atual (`C:\Alpha\santohomobono`) para o site "Santo Homobono — O Padroeiro dos Empresários", seguindo o documento `docs/PROJETO_SANTO_HOMOBONO.md` (copie este arquivo para `docs/`).
>
> Requisitos:
> 1. Site estático com TypeScript, Tailwind CSS 4, MDX, `@astrojs/sitemap`, `@astrojs/rss`, Pagefind e fontes via `@fontsource` (Cormorant Garamond, Source Serif 4, Cinzel, Inter).
> 2. Implemente os tokens de cor e tipografia da seção 3 em `src/styles/global.css`, com modo escuro.
> 3. Crie Content Collections (`historia`, `oracoes`, `obras`, `blog`) com schemas Zod em `src/content.config.ts`, incluindo campos: title, description, keywords, publishDate, updatedDate, image, imageAlt, sources[].
> 4. Crie os layouts `BaseLayout`, `ArtigoLayout` e `OracaoLayout`, e um componente `SEO.astro` que gere title, meta description, canonical, Open Graph, Twitter Card e JSON-LD (WebSite, Person, Article, FAQPage, BreadcrumbList, Event) conforme a seção 6.
> 5. Crie os componentes da seção 3 (Hero, Timeline, CardOracao com copiar e compartilhar no WhatsApp, CitacaoLatina, SeloFonte, FAQ, GaleriaArte com lightbox, ContadorFesta, CTAComunidade, ContinueLendo, Breadcrumbs).
> 6. Monte todas as rotas da seção 2 (com conteúdo provisório em MDX nas páginas do Lote 2) e a Home completa com as 10 seções da seção 4.
> 7. Mobile-first, acessível (WCAG AA), Lighthouse ≥ 95, imagens via `<Image />`.
> 8. Ao final, rode `npm run build`, corrija erros e me mostre a estrutura criada.
>
> Comece pela fundação (setup, estilos, layouts, SEO) e me peça validação visual da Home antes de criar as páginas internas.
