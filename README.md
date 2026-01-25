
# 🌌 CynixOS Pro | Intelligent Workspace

![Version](https://img.shields.io/badge/version-V7.1--s-cyan?style=for-the-badge)
![Status](https://img.shields.io/badge/status-OPERATIONAL-green?style=for-the-badge)
![AI Model](https://img.shields.io/badge/AI_Model-4o.CNX-purple?style=for-the-badge)

**CynixOS Pro** adalah aplikasi web futuristik yang menggabungkan **Asisten AI Cerdas (EVA)** dan **Manajemen Keuangan Pribadi** dalam satu antarmuka yang elegan (Glassmorphism). Dibangun dengan fokus pada UX Mobile-First, animasi yang halus, dan performa tinggi.

---

## ✨ Fitur Utama

### 🤖 EVA AI Assistant (Chat)
* **Smart Context:** Mengerti konteks balasan (Reply) dan history percakapan.
* **Typewriter Effect:** Animasi mengetik real-time yang memuaskan.
* **Identity System:** AI memiliki persona "EVA" buatan Dani Solstace (Cynix).
* **Interactive UI:** * *Swipe-to-Reply* (Geser pesan untuk membalas).
    * *Long-Press* untuk reaksi emoji & copy text.
    * Indikator status dinamis ("Berfikir..." > "Mengetik...").
* **Direct Server Connection:** Mendukung koneksi POST ke backend custom.

### 💸 Financial Center (Keuangan)
* **Expense & Income Tracker:** Catat pemasukan dan pengeluaran dengan mudah.
* **Real-time Balance:** Saldo terhitung otomatis.
* **Local Persistence:** Data tersimpan aman di browser (LocalStorage), tidak hilang saat di-refresh.
* **Visual Card:** Tampilan kartu kredit virtual dengan efek gradient dinamis.

### 🎨 UI/UX Design
* **Glassmorphism:** Efek blur dan transparansi modern.
* **Dark/Light Mode:** Tema otomatis tersimpan.
* **Jelly Loading:** Animasi loading screen yang unik.
* **Responsive:** Tampilan optimal di HP (100dvh) dan Desktop.

---

## 🛠️ Teknologi yang Digunakan

**Frontend:**
* HTML5
* **TailwindCSS** (Styling)
* **Alpine.js** (Logic & Reactivity)
* RemixIcons (Icons)

**Backend (Server):**
* **Node.js** & **Express.js**
* CORS (Cross-Origin Resource Sharing)
* Fetch API (Reverse Proxy ke AI Engine)

---

## 🚀 Cara Instalasi

### 1. Backend (Server Side)
Pastikan kamu memiliki **Node.js** terinstal atau gunakan panel hosting seperti Pterodactyl.

1.  Buat file `package.json`:
    ```json
    {
      "name": "cynix-server",
      "main": "index.js",
      "dependencies": {
        "express": "^4.18.2",
        "cors": "^2.8.5",
        "chalk": "^4.1.2",
        "figlet": "^1.6.0",
        "boxen": "^5.1.2"
      }
    }
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Jalankan server:
    ```bash
    node index.js
    ```
    *Server akan berjalan di port 3000 (atau sesuai env port).*

### 2. Frontend (Client Side)
1.  Buka file `index.html`.
2.  Cari baris kode berikut di bagian `async sendMessage()`:
    ```javascript
    const API_URL = "http://url-server-kamu:port/ask-ai";
    const API_KEY = "CYNIX-GANTENG-123";
    ```
3.  Ubah `API_URL` sesuai dengan alamat server backend kamu.
4.  Buka `index.html` di browser atau upload ke GitHub Pages / Vercel.

---

## ⚙️ Konfigurasi API

Aplikasi ini menggunakan sistem proteksi sederhana menggunakan API Key hardcoded.

* **Header/Body Parameter:**
    * `apikey`: Kunci akses (Default: `CYNIX-GANTENG-123`)
    * `text`: Pesan dari user.

* **Endpoint:**
    * `POST /ask-ai` -> Mengirim pesan ke AI.
    * `GET /` -> Cek status server.

---

## 📸 Screenshots

*(Tambahkan screenshot aplikasi di sini nanti)*

---

## 👤 Author & Credits

* **Creator:** Dani Solstace
* **Business:** Cynix Solstace
* **Contact:** cynix2003s@gmail.com
* **Powered by:** Pollinations.ai (AI Engine)

---

> **Note:** Project ini dibuat untuk tujuan edukasi dan penggunaan pribadi.
> `Solstace | TYPEWRITER MODE`
