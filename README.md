# 🐍 PyLab — Kelas Python Mandiri

**PyLab** adalah dashboard pembelajaran interaktif berbasis web untuk menguasai bahasa pemrograman Python, dirancang khusus untuk pemula hingga tingkat menengah dengan fokus pada pengolahan data. Platform ini mengadopsi pendekatan *learning-by-doing* dengan mengintegrasikan materi terstruktur, video pembelajaran, kuis interaktif, dan **Code Playground** yang mampu mengeksekusi kode Python secara langsung di dalam browser.

## ✨ Fitur Utama

- **💻 Live Code Playground**: Editor kode Python *client-side* yang dieksekusi menggunakan **Pyodide (WebAssembly)**. Tidak memerlukan backend server; kode berjalan sepenuhnya di browser pengguna.
- **📚 8 Modul Terstruktur**: Kurikulum komprehensif mulai dari Dasar Python, Struktur Kontrol, OOP, hingga Pengolahan Data dengan Pandas dan Visualisasi Data.
- **📝 Kuis Interaktif & Progress Tracker**: Evaluasi pemahaman dengan kuis pilihan ganda (syarat kelulusan ≥70%) dan sistem pelacakan progres yang tersimpan secara persisten di `localStorage` browser.
- **🤖 PyMate (AI Tutor)**: Widget asisten virtual berbasis *rule-based* untuk membantu menjawab pertanyaan seputar sintaks dasar Python.
- **🎬 Integrasi Video**: Video pembelajaran YouTube yang tertanam langsung di dalam materi modul.

## 🛠️ Teknologi yang Digunakan

| Teknologi | Fungsi |
| :--- | :--- |
| **HTML5 / Tailwind CSS** | Struktur antarmuka dan styling (via CDN untuk prototipe cepat). |
| **Vanilla JavaScript** | Logika aplikasi, navigasi SPA (*Single Page Application*), dan manajemen state. |
| **Pyodide (WebAssembly)** | Runtime Python 3 di browser untuk eksekusi kode secara *client-side*. |
| **LocalStorage API** | Penyimpanan data progres pengguna secara lokal dan persisten. |

## 🚀 Cara Menjalankan Proyek

Karena proyek ini adalah *Single Page Application* statis yang menggunakan CDN, Anda tidak memerlukan instalasi dependensi yang rumit.

1. **Clone Repositori**
   ```bash
   git clone https://github.com/USERNAME-ANDA/pylab.git
   cd pylab