# 🖼️ Image Converter with Sharp

This script converts a `.jpg` image into both **WebP** and **AVIF** formats using the [Sharp](https://www.npmjs.com/package/sharp) image processing library.

## 📦 Requirements

- [Node.js](https://nodejs.org/) (v14+ recommended)
- Install packages:

```bash
npm install
```

## Info

This is an EcmaScript project. See `package.json`:

```json
{
  "type": "module"
}
```

## ⚙️ Usage

1. Place your input image (e.g. `input.jpg`) in the same folder as the script.

2. Make the script executable:

```bash
chmod +x convert.js
```

3. Run it:

```bash
./convert.js
```

4. Output files (`.webp` and `.avif`) will be saved in an `output/` folder.


The file `convert.js` starts with Hashbang grammar, so you can execute it directly with `./convert.js` instead of `node convert.js`.

## 📂 File Structure

```
your-project/
├── convert.mjs
├── input.jpg
├── output/
│   ├── input.webp
│   └── input.avif
```

## 📝 Notes

- You can modify the script to accept dynamic filenames or add quality/resizing options.
- WebP and AVIF offer significant file size reductions while maintaining quality — ideal for web performance.
