const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'https://syphax-dial.dev';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Générer la date actuelle au format YYYY-MM-DD
const currentDate = new Date().toISOString().split('T')[0];

// Contenu du sitemap
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

// Écrire le fichier sitemap
try {
  fs.writeFileSync(OUTPUT_PATH, sitemapContent);
  console.log('✅ Sitemap généré avec succès !');
  console.log(`📄 Fichier créé : ${OUTPUT_PATH}`);
  console.log(`🌐 URL du sitemap : ${SITE_URL}/sitemap.xml`);
} catch (error) {
  console.error('❌ Erreur lors de la génération du sitemap :', error);
  process.exit(1);
} 