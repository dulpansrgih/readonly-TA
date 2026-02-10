# 📄 Protected PDF Viewer

Website sederhana untuk menampilkan PDF dari Google Drive dengan proteksi penuh terhadap download, edit, copy, dan paste.

## ✨ Fitur

- 🔒 **Proteksi Penuh**: Tidak bisa download, copy, paste, atau print
- 🎨 **Desain Modern**: Gradient background dengan UI yang menarik
- 📱 **Responsive**: Tampilan optimal di desktop dan mobile
- ⚡ **Cepat**: Langsung embed dari Google Drive
- 🚫 **Anti Developer Tools**: Mencegah inspect element dan console

## 🚀 Cara Deploy ke GitHub & Vercel

### 1. Upload ke GitHub

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit
git commit -m "Initial commit: Protected PDF Viewer"

# Tambahkan remote repository (ganti dengan URL repo Anda)
git remote add origin https://github.com/username/nama-repo.git

# Push ke GitHub
git push -u origin main
```

### 2. Deploy ke Vercel

**Opsi A: Via Vercel Dashboard**
1. Buka [vercel.com](https://vercel.com)
2. Login dengan GitHub
3. Klik "New Project"
4. Import repository GitHub Anda
5. Klik "Deploy"

**Opsi B: Via Vercel CLI**
```bash
# Install Vercel CLI (jika belum)
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy ke production
vercel --prod
```

## 🔧 Konfigurasi

### Mengganti Link PDF

Edit file `index.html` pada baris iframe:

```html
<iframe 
    src="https://drive.google.com/file/d/[FILE_ID]/preview"
>
```

Ganti `[FILE_ID]` dengan ID file Google Drive Anda.

### Cara Mendapatkan File ID dari Google Drive

Dari URL: `https://drive.google.com/file/d/1p3kl0V6slQ6x_la1fyAs-fxnbFaUhGiE/view`

File ID adalah: `1p3kl0V6slQ6x_la1fyAs-fxnbFaUhGiE`

## 🛡️ Fitur Proteksi

1. **Disable Right Click**: Mencegah context menu
2. **Disable Keyboard Shortcuts**: Ctrl+C, Ctrl+V, Ctrl+P, Ctrl+S, dll
3. **Disable Text Selection**: CSS user-select: none
4. **Disable Developer Tools**: F12, Ctrl+Shift+I/J/C
5. **Disable Print**: beforeprint event
6. **Google Drive Preview Mode**: Mode preview yang tidak bisa download

## ⚠️ Catatan Penting

- Pastikan file Google Drive sudah di-set ke "Anyone with the link can view"
- Proteksi berfungsi optimal di browser modern (Chrome, Firefox, Edge, Safari)
- Meskipun sudah ada proteksi, pengguna dengan pengetahuan teknis tinggi mungkin masih bisa mengakses PDF dengan cara lain
- Untuk keamanan maksimal, pertimbangkan menggunakan DRM (Digital Rights Management) professional

## 📦 Struktur File

```
readonly-gdrive-TA/
├── index.html          # Halaman utama
├── style.css           # Styling dan proteksi CSS
├── script.js           # Proteksi JavaScript
├── vercel.json         # Konfigurasi Vercel
├── .gitignore          # File yang diabaikan Git
└── README.md           # Dokumentasi
```

## 🌐 Preview Lokal

Untuk preview lokal, cukup buka file `index.html` di browser atau gunakan live server:

```bash
# Jika punya Python
python -m http.server 8000

# Jika punya Node.js dengan npx
npx serve
```

## 📝 Lisensi

Free to use - silakan modify sesuai kebutuhan Anda.

---

Dibuat dengan ❤️ untuk proteksi dokumen PDF
