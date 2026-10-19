import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const imgDir = path.resolve('src/assets/images');

async function createOgImage({ inputPath, outputPath, title, subtitle }) {
  console.log(`Gerando ${outputPath}...`);
  
  // Base recortada 1200x630
  const baseImg = await sharp(inputPath)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .toBuffer();

  // Overlay SVG com gradiente escuro refinado e texto editorial
  const svgOverlay = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="overlayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#16120F" stop-opacity="0.45" />
        <stop offset="45%" stop-color="#16120F" stop-opacity="0.75" />
        <stop offset="100%" stop-color="#16120F" stop-opacity="0.95" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#B08D3E" />
        <stop offset="50%" stop-color="#D9C08A" />
        <stop offset="100%" stop-color="#B08D3E" />
      </linearGradient>
    </defs>

    <!-- Fundo Escurecido com Gradiente -->
    <rect width="1200" height="630" fill="url(#overlayGrad)" />

    <!-- Moldura de Linha Dourada Fina -->
    <rect x="36" y="36" width="1128" height="558" fill="none" stroke="#B08D3E" stroke-width="2" stroke-opacity="0.6" rx="12" />
    <rect x="44" y="44" width="1112" height="542" fill="none" stroke="#D9C08A" stroke-width="1" stroke-opacity="0.3" rx="8" />

    <!-- Tag Superior -->
    <g transform="translate(80, 110)">
      <rect x="0" y="0" width="340" height="34" rx="17" fill="#7A1E25" />
      <text x="170" y="22" font-family="Cinzel, Georgia, serif" font-size="13" font-weight="bold" fill="#F6F0E4" letter-spacing="3" text-anchor="middle">
        SANTO HOMOBONO DE CREMONA
      </text>
    </g>

    <!-- Título Principal -->
    <g transform="translate(80, 260)">
      <text x="0" y="0" font-family="'Cormorant Garamond', Georgia, serif" font-size="56" font-weight="bold" fill="#F6F0E4">
        ${title}
      </text>
    </g>

    <!-- Subtítulo -->
    <g transform="translate(80, 340)">
      <text x="0" y="0" font-family="'Source Serif 4', Georgia, serif" font-size="24" fill="#D9C08A" font-style="italic">
        ${subtitle}
      </text>
    </g>

    <!-- Divisor e Assinatura Inferior -->
    <line x1="80" y1="500" x2="1120" y2="500" stroke="url(#goldGrad)" stroke-width="1.5" />
    <g transform="translate(80, 535)">
      <text x="0" y="0" font-family="Cinzel, Georgia, serif" font-size="14" font-weight="bold" fill="#D9C08A" letter-spacing="2">
        santohomobono.com.br
      </text>
      <text x="1040" y="0" font-family="'Source Serif 4', serif" font-size="14" fill="#EBE1CC" text-anchor="end">
        O Padroeiro dos Empresários e Comerciantes
      </text>
    </g>
  </svg>
  `;

  await sharp(baseImg)
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  console.log(`✓ Gerado com sucesso: ${outputPath}`);
}

async function run() {
  // 1. og-default.jpg (a partir da imagem 1)
  await createOgImage({
    inputPath: path.join(imgDir, 'cremona-piazza-del-comune-duomo-torrazzo.jpg'),
    outputPath: path.join(publicDir, 'og-default.jpg'),
    title: 'Santo Homobono — O Padroeiro dos Empresários',
    subtitle: 'O mercador de Cremona que provou que a santidade é possível nos negócios',
  });

  // 2. og-canonizacao.jpg (a partir da imagem 5)
  await createOgImage({
    inputPath: path.join(imgDir, 'papa-inocencio-iii-afresco-subiaco.jpg'),
    outputPath: path.join(publicDir, 'og-canonizacao.jpg'),
    title: 'A Canonização Recorde de Santo Homobono',
    subtitle: 'A Bula Quia Pietas de 1199 e o Papa Inocêncio III',
  });

  // 3. og-arte.jpg (a partir da imagem 2)
  await createOgImage({
    inputPath: path.join(imgDir, 'santo-homobono-bartolomeo-montagna-berlim.jpg'),
    outputPath: path.join(publicDir, 'og-arte.jpg'),
    title: 'Arte Sacra e Iconografia de Santo Homobono',
    subtitle: 'Pinturas renascentistas, afrescos históricos e atributos tradicionais',
  });
}

run().catch(console.error);
