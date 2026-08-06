import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, "../public");

// Transparent SP Monogram SVG
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <linearGradient id="sp-cyan-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22D3EE" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>
  </defs>

  <!-- Connecting Bridge between S and P -->
  <path
    d="M 224 256 L 312 256"
    stroke="url(#sp-cyan-emerald)"
    stroke-width="58"
    stroke-linecap="round"
  />

  <!-- Letter S (Solid White) -->
  <path
    d="M 236 120 H 160 C 115 120 84 150 84 192 C 84 235 115 256 160 256 L 224 256 C 268 256 296 277 296 320 C 296 362 268 392 224 392 H 148"
    stroke="#FFFFFF"
    stroke-width="58"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <!-- Letter P (Cyan to Emerald Gradient) -->
  <path
    d="M 312 392 V 120 H 378 C 424 120 452 148 452 188 C 452 228 424 256 378 256 H 312"
    stroke="url(#sp-cyan-emerald)"
    stroke-width="58"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;

async function main() {
  const svgPath = path.join(publicDir, "favicon.svg");
  const p16Path = path.join(publicDir, "favicon-16x16.png");
  const p32Path = path.join(publicDir, "favicon-32x32.png");
  const p180Path = path.join(publicDir, "apple-touch-icon.png");
  const icoPath = path.join(publicDir, "favicon.ico");

  // Save favicon.svg
  fs.writeFileSync(svgPath, svgContent, "utf-8");
  console.log("Saved favicon.svg");

  const svgBuffer = Buffer.from(svgContent);

  // Generate PNGs
  await sharp(svgBuffer).resize(16, 16).png().toFile(p16Path);
  console.log("Generated favicon-16x16.png");

  await sharp(svgBuffer).resize(32, 32).png().toFile(p32Path);
  console.log("Generated favicon-32x32.png");

  // Generate apple-touch-icon.png (180x180)
  await sharp(svgBuffer).resize(180, 180).png().toFile(p180Path);
  console.log("Generated apple-touch-icon.png");

  // Generate valid binary ICO file wrapping 32x32 PNG data
  const png32Buffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // Image count = 1

  const icoDirEntry = Buffer.alloc(16);
  icoDirEntry.writeUInt8(32, 0);  // Width
  icoDirEntry.writeUInt8(32, 1);  // Height
  icoDirEntry.writeUInt8(0, 2);   // Colors
  icoDirEntry.writeUInt8(0, 3);   // Reserved
  icoDirEntry.writeUInt16LE(1, 4); // Planes
  icoDirEntry.writeUInt16LE(32, 6); // BPP
  icoDirEntry.writeUInt32LE(png32Buffer.length, 8); // Data size
  icoDirEntry.writeUInt32LE(22, 12); // Data offset (6 + 16)

  const icoBuffer = Buffer.concat([icoHeader, icoDirEntry, png32Buffer]);
  fs.writeFileSync(icoPath, icoBuffer);
  console.log("Generated favicon.ico");
}

main().catch(console.error);
