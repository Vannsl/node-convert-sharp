#!/usr/bin/env node

import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'input.jpg');

const outputDir = path.join(__dirname, 'output');
await fs.mkdir(outputDir, { recursive: true });

const baseName = path.basename(inputPath, path.extname(inputPath));

// WebP
try {
  await sharp(inputPath)
    .toFormat('webp')
    .toFile(path.join(outputDir, `${baseName}.webp`));
  console.log('✅ WebP success');
} catch (err) {
  console.error('❌ Error WebP:', err);
}

// AVIF
try {
  await sharp(inputPath)
    .toFormat('avif')
    .toFile(path.join(outputDir, `${baseName}.avif`));
  console.log('✅ AVIF success');
} catch (err) {
  console.error('❌ Error AVIF:', err);
}
