# Portofolio Mahesa 🚀
Sebuah portofolio developer 3D modern yang dibangun dengan React, React Three Fiber (Three.js), TailwindCSS, dan animasi halus — dirancang untuk menonjolkan keterampilan dan proyek secara interaktif.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://your-deploy-url.example)  <!-- ganti dengan URL deploy jika ada -->
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE) <!-- ganti jika berbeda -->

## 📸 Screenshot
> Tambahkan screenshot atau GIF di folder `public/assets` dan tautkan di sini untuk menampilkan halaman utama.

---

## 📚 Daftar Isi
- [Fitur](#-fitur)
- [Teknologi](#-teknologi)
- [Struktur Proyek](#-struktur-proyek)
- [Mulai Cepat](#-mulai-cepat)
- [Assets](#-assets)
- [Kontribusi](#-kontribusi)
- [Kontak](#-kontak)
- [Lisensi](#-lisensi)

---

## ✨ Fitur
- 3D visuals interaktif menggunakan React Three Fiber dan Drei
- Transisi halus & animasi berbasis scroll dengan Framer Motion
- UI responsif dan minimal memakai TailwindCSS
- Form kontak bekerja via EmailJS (konfigurasi di .env)
- Komponen UI tambahan dari Aceternity UI dan Magic UI
- Pengembangan cepat dengan Vite

---

## 🛠️ Teknologi
- React
- Vite
- TailwindCSS
- React Three Fiber (Three.js)
- @react-three/drei
- Framer Motion
- EmailJS
- Aceternity UI, Magic UI

---

## 📁 Struktur Proyek (ringkasan)
```
├── public/
│   ├── assets/        # Gambar, tekstur, model
│   ├── models/        # Model 3D (misal: astronaut)
│   └── vite.svg
├── src/
│   ├── components/    # Komponen yang dapat digunakan ulang
│   ├── constants/     # Data konstan
│   ├── sections/      # Bagian portofolio (Hero, About, dll.)
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Mulai Cepat

1. Clone repo (sudah diarahkan ke repo kamu):
```bash
git clone https://github.com/maheskuuy/portofolio-mahesa.git
cd portofolio-mahesa
```

2. Install dependensi:
```bash
npm install
# atau
pnpm install
# atau
yarn
```

3. Jalankan server development:
```bash
npm run dev
# lalu buka http://localhost:5173
```

4. Build untuk produksi:
```bash
npm run build
```

Catatan: Jika menggunakan EmailJS atau layanan lain, buat file `.env` sesuai variabel yang diperlukan (contoh: EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY).

---

## 🔗 Assets
Semua aset (gambar, model 3D, tekstur) disimpan di `public/assets` atau `public/models`. Pastikan lisensi aset yang digunakan sesuai sebelum dipublikasikan.

---

## 🤝 Kontribusi
Terima kasih sudah tertarik! Jika ingin kontribusi:
1. Fork repo ini
2. Buat branch fitur: `git checkout -b feat/nama-fitur`
3. Commit perubahan: `git commit -m "feat: deskripsi singkat"`
4. Push: `git push origin feat/nama-fitur`
5. Buka Pull Request dan jelaskan perubahanmu.

Untuk issue & saran, silakan buka halaman Issues.

---

## 📬 Kontak
- Instagram: @your_instagram (ganti)
- LinkedIn: [Your Name](https://www.linkedin.com/in/your-linkedin) (ganti)
- Email: your-email@example.com (ganti)

---

## 💡 Ide Fitur Selanjutnya
- Landing page interaktif tambahan
- Demo e-commerce sederhana dengan 3D product view
- Clone aplikasi populer (YouTube, Netflix) dengan elemen 3D

---

## ❤️ Jika Kamu Suka Proyek Ini
- Beri bintang repo ⭐
- Subscribe ke channel YouTube jika ada
- Bagikan ke teman-dev

---

## 📜 Lisensi
Project ini berlisensi di bawah MIT License — lihat file `LICENSE` untuk detail.
