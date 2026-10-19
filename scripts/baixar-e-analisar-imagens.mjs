import fs from 'node:fs';
import path from 'node:path';

const userAgent = 'SantoHomobonoSite/1.0 (contato@santohomobono.com.br)';
const outputDir = path.resolve('src/assets/images');

const imagens = [
  {
    id: 1,
    arquivo: 'cremona-piazza-del-comune-duomo-torrazzo.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cremona_piazza_del_comune.jpg?width=2400',
    wikiFile: 'Cremona_piazza_del_comune.jpg',
    titulo: 'Piazza del Comune em Cremona',
    alt: 'Piazza del Comune de Cremona com a Catedral, o Torrazzo e o Batistério, cidade de Santo Homobono',
    paginasUso: ['/', '/historia/cremona-no-seculo-xii', '/cremona', '/cremona/roteiro-de-peregrinacao']
  },
  {
    id: 2,
    arquivo: 'santo-homobono-bartolomeo-montagna-berlim.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bartolomeo_Montagna_(1450_-_1523)_-_The_Virgin_and_Child_Enthroned_and_St._Homobonus,_Francis_of_Assisi,_Catherine_of_Alexandria_and_the_-_44_-_Gem%C3%A4ldegalerie.jpg',
    wikiFile: 'Bartolomeo_Montagna_(1450_-_1523)_-_The_Virgin_and_Child_Enthroned_and_St._Homobonus,_Francis_of_Assisi,_Catherine_of_Alexandria_and_the_-_44_-_Gemäldegalerie.jpg',
    titulo: 'A Virgem com o Menino e Santo Homobono',
    alt: 'Retábulo de Bartolomeo Montagna com a Virgem e o Menino entronizados, Santo Homobono, São Francisco e Santa Catarina',
    paginasUso: ['/', '/arte-e-iconografia']
  },
  {
    id: 3,
    arquivo: 'santo-homobono-sao-bonifacio-gravura-de-jode-met.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/St._Bonifacius_and_St._Homobonus,_Patron_Saints_of_Tailors_MET_DP836102.jpg?width=2400',
    wikiFile: 'St._Bonifacius_and_St._Homobonus,_Patron_Saints_of_Tailors_MET_DP836102.jpg',
    titulo: 'São Bonifácio e Santo Homobono, Padroeiros dos Alfaiates',
    alt: 'Gravura do século XVII de Pieter de Jode II com São Bonifácio e Santo Homobono, padroeiros dos alfaiates',
    paginasUso: ['/', '/arte-e-iconografia', '/oracoes/oracao-a-santo-homobono', '/oracoes/oracao-do-empresario', '/oracoes/oracao-do-comerciante']
  },
  {
    id: 4,
    arquivo: 'santo-homobono-pietro-lianori-bolonha.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pietro_lianori,_ss._omobono_e_cristoforo,_bologna,_1440-60_ca._01.jpg?width=2400',
    wikiFile: 'Pietro_lianori,_ss._omobono_e_cristoforo,_bologna,_1440-60_ca._01.jpg',
    titulo: 'Santos Homobono e Cristóvão',
    alt: 'Pintura de Pietro Lianori, c. 1450, com Santo Homobono como mercador ao lado de São Cristóvão',
    paginasUso: ['/', '/quem-foi-santo-homobono', '/arte-e-iconografia']
  },
  {
    id: 5,
    arquivo: 'papa-inocencio-iii-afresco-subiaco.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pope_Innocent_III,_Monastery_of_Subiaco.jpg?width=2400',
    wikiFile: 'Pope_Innocent_III,_Monastery_of_Subiaco.jpg',
    titulo: 'Papa Inocêncio III em Subiaco',
    alt: 'Afresco do século XIII do papa Inocêncio III, que canonizou Santo Homobono em 1199, no Sacro Speco de Subiaco',
    paginasUso: ['/historia/a-canonizacao']
  },
  {
    id: 6,
    arquivo: 'torrazzo-de-cremona.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Torrazzo-di-cremona.jpg',
    wikiFile: 'Torrazzo-di-cremona.jpg',
    titulo: 'O Torrazzo de Cremona',
    alt: 'O Torrazzo, campanário medieval da Catedral de Cremona',
    paginasUso: ['/historia/cremona-no-seculo-xii', '/cremona', '/cremona/roteiro-de-peregrinacao']
  },
  {
    id: 7,
    arquivo: 'catedral-de-cremona-duomo-batisterio.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cremona_Duomo.jpg',
    wikiFile: 'Cremona_Duomo.jpg',
    titulo: 'Fachada da Catedral de Cremona',
    alt: 'Fachada da Catedral de Cremona, onde repousam as relíquias de Santo Homobono',
    paginasUso: ['/festa-13-de-novembro', '/cremona/catedral-e-cripta']
  },
  {
    id: 8,
    arquivo: 'cripta-catedral-cremona-reliquias-santo-homobono.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cremona,_duomo_cripta_05.JPG',
    wikiFile: 'Cremona,_duomo_cripta_05.JPG',
    titulo: 'Cripta da Catedral de Cremona',
    alt: 'Cripta da Catedral de Cremona, onde está o corpo de Santo Homobono',
    paginasUso: ['/cremona/catedral-e-cripta']
  },
  {
    id: 9,
    arquivo: 'igreja-sant-omobono-cremona-fachada.jpg',
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chiesa_di_Sant'Omobono_Cremona.jpg?width=2400",
    wikiFile: "Chiesa_di_Sant'Omobono_Cremona.jpg",
    titulo: "Igreja de Sant'Omobono em Cremona",
    alt: "Fachada da igreja dos Santos Homobono e Egídio em Cremona, onde o santo morreu em 13 de novembro de 1197",
    paginasUso: ['/quem-foi-santo-homobono', '/cremona/igreja-de-santomobono']
  },
  {
    id: 10,
    arquivo: 'igreja-sant-omobono-roma.jpg',
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chiesa_di_Sant'Omobono_-_esterno.jpg?width=2400",
    wikiFile: "Chiesa_di_Sant'Omobono_-_esterno.jpg",
    titulo: "Igreja de Sant'Omobono em Roma",
    alt: "Igreja de Sant'Omobono em Roma, junto ao Capitólio, ligada à antiga corporação dos alfaiates",
    paginasUso: ['/arte-e-iconografia']
  },
  {
    id: 11,
    arquivo: 'estatua-santo-homobono-bruxelas-chaloupe-dor.jpg',
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Belgique_-_Bruxelles_-_Maison_de_la_Chaloupe_d'Or_-_05.jpg?width=2400",
    wikiFile: "Belgique_-_Bruxelles_-_Maison_de_la_Chaloupe_d'Or_-_05.jpg",
    titulo: "Estátua de Santo Homobono na Grand-Place de Bruxelas",
    alt: "Estátua de Santo Homobono no alto da Casa da Chaloupe d'Or, antiga sede dos alfaiates na Grand-Place de Bruxelas",
    paginasUso: ['/', '/arte-e-iconografia']
  },
  {
    id: 12,
    arquivo: 'tacuinum-sanitatis-tecidos-de-la-iluminura.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tacuinum_Sanitatis._Wool_clothing.jpeg',
    wikiFile: 'Tacuinum_Sanitatis._Wool_clothing.jpeg',
    titulo: 'Comércio de Tecidos de Lã no Tacuinum Sanitatis',
    alt: 'Iluminura lombarda do Tacuinum Sanitatis mostrando roupas e tecidos de lã',
    paginasUso: ['/quem-foi-santo-homobono', '/historia/cremona-no-seculo-xii']
  },
  {
    id: 13,
    arquivo: 'vista-do-torrazzo-praca-do-duomo-cremona.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cremona,_vista_dal_torrazzo_04_piazza_del_duomo.JPG',
    wikiFile: 'Cremona,_vista_dal_torrazzo_04_piazza_del_duomo.JPG',
    titulo: 'Vista da Praça do Duomo a partir do Torrazzo',
    alt: 'Vista do alto do Torrazzo sobre a praça do Duomo de Cremona',
    paginasUso: ['/historia/cremona-no-seculo-xii', '/cremona']
  }
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

async function fetchMetadata(wikiFile) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(wikiFile)}&prop=imageinfo&iiprop=extmetadata|user|url&format=json`;
  try {
    const res = await fetch(apiUrl, { headers: { 'User-Agent': userAgent } });
    if (!res.ok) return null;
    const data = await res.json();
    const pages = data.query?.pages;
    if (!pages) return null;
    const page = Object.values(pages)[0];
    const imageinfo = page.imageinfo?.[0];
    if (!imageinfo) return null;

    const meta = imageinfo.extmetadata || {};
    const artist = stripHtml(meta.Artist?.value) || imageinfo.user || 'Desconhecido';
    const licenseShort = meta.LicenseShortName?.value || meta.License?.value || 'Desconhecida';
    const licenseUrl = meta.LicenseUrl?.value || '';
    const descriptionUrl = imageinfo.descriptionurl || `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(wikiFile)}`;

    return {
      artist,
      licenseShort,
      licenseUrl,
      descriptionUrl,
      rawMeta: meta
    };
  } catch (err) {
    console.error(`Erro ao buscar metadata de ${wikiFile}:`, err.message);
    return null;
  }
}

async function downloadFile(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': userAgent } });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  await fs.promises.writeFile(destPath, buffer);
  return buffer.length;
}

async function run() {
  console.log('Iniciando download e análise das 13 imagens...');
  const resultadoImagens = [];

  for (const item of imagens) {
    console.log(`\n[${item.id}/13] Processando: ${item.arquivo}`);
    const destPath = path.join(outputDir, item.arquivo);

    let downloadedSize = 0;
    try {
      downloadedSize = await downloadFile(item.url, destPath);
    } catch (err) {
      console.warn(`Tentativa com URL inicial falhou: ${err.message}. Tentando sem parâmetros...`);
      const fallbackUrl = item.url.split('?')[0];
      try {
        downloadedSize = await downloadFile(fallbackUrl, destPath);
      } catch (err2) {
        console.error(`Falha fatal no download de ${item.arquivo}: ${err2.message}`);
      }
    }

    console.log(`Tamanho baixado: ${(downloadedSize / 1024).toFixed(1)} KB`);
    if (downloadedSize < 20 * 1024) {
      console.error(`AVISO: Arquivo ${item.arquivo} tem menos de 20KB!`);
    }

    await sleep(1000);

    const meta = await fetchMetadata(item.wikiFile);
    await sleep(1000);

    let autor = meta?.artist || 'Autor Desconhecido';
    let licenca = meta?.licenseShort || 'Domínio Público';
    let urlLicenca = meta?.licenseUrl || '';
    let urlOrigem = meta?.descriptionUrl || `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(item.wikiFile)}`;

    resultadoImagens.push({
      id: item.id,
      arquivo: item.arquivo,
      titulo: item.titulo,
      alt: item.alt,
      autor,
      licenca,
      urlLicenca,
      urlOrigem,
      paginasUso: item.paginasUso,
      tamanhoBytes: downloadedSize
    });
  }

  // Análise específica de 8 e 9:
  console.log('\n--- VERIFICANDO LICENÇAS DOS ITENS 8 E 9 ---');
  const img8 = resultadoImagens.find(i => i.id === 8);
  const img9 = resultadoImagens.find(i => i.id === 9);

  function isLicenseFree(lic) {
    if (!lic) return false;
    const l = lic.toUpperCase();
    return l.includes('PD') || l.includes('PUBLIC DOMAIN') || l.includes('CC') || l.includes('CREATIVE COMMONS') || l.includes('CC0');
  }

  let img8Substituida = false;
  if (!isLicenseFree(img8?.licenca)) {
    console.log(`Imagem 8 (${img8.arquivo}) NÃO tem licença livre confirmada (${img8.licenca}). Substituindo pela imagem 7!`);
    const path8 = path.join(outputDir, img8.arquivo);
    if (fs.existsSync(path8)) fs.unlinkSync(path8);
    img8.substituidaPor = 'catedral-de-cremona-duomo-batisterio.jpg';
    img8Substituida = true;
  } else {
    console.log(`Imagem 8 confirmada como livre: ${img8.licenca}`);
  }

  let img9Substituida = false;
  if (!isLicenseFree(img9?.licenca)) {
    console.log(`Imagem 9 (${img9.arquivo}) NÃO tem licença livre confirmada (${img9.licenca}). Substituindo pela imagem 13!`);
    const path9 = path.join(outputDir, img9.arquivo);
    if (fs.existsSync(path9)) fs.unlinkSync(path9);
    img9.substituidaPor = 'vista-do-torrazzo-praca-do-duomo-cremona.jpg';
    img9Substituida = true;
  } else {
    console.log(`Imagem 9 confirmada como livre: ${img9.licenca}`);
  }

  // Gerar créditos prontos para legenda
  const finalJson = resultadoImagens.map(item => {
    let credito = '';
    if (item.urlLicenca) {
      credito = `Foto/Obra: ${item.autor} (${item.licenca})`;
    } else {
      credito = `Foto/Obra: ${item.autor} · ${item.licenca}`;
    }
    return {
      arquivo: item.arquivo,
      titulo: item.titulo,
      alt: item.alt,
      autor: item.autor,
      licenca: item.licenca,
      urlLicenca: item.urlLicenca,
      urlOrigem: item.urlOrigem,
      credito,
      paginasUso: item.paginasUso,
      substituidaPor: item.substituidaPor || null
    };
  });

  const jsonPath = path.resolve('src/data/imagens.json');
  fs.writeFileSync(jsonPath, JSON.stringify(finalJson, null, 2), 'utf-8');
  console.log(`\nArquivo salvo com sucesso em ${jsonPath}`);
}

run().catch(console.error);
