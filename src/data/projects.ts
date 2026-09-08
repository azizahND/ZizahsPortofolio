export type Project = {
  slug: string
  title: string
  category: 'data' | 'fullstack'
  tag: string
  description: string
  impact: string
  detail: {
    overview: string
    problem: string
    approach: string
    result: string
    highlights: string[]
  }
  stack: string[]
  thumb: string
  images?: string[]
  repo?: string
  demo?: string
}

import breastScanThumb from '../assets/project/BreastScan/Screenshot (2414).png'
import breastScanImage from '../assets/project/BreastScan/Screenshot 2025-10-10 213137.png'
import emponPediaThumb from '../assets/project/EmponPedia/landing empon.png'
import emponPediaImage1 from '../assets/project/EmponPedia/Screenshot (2156).png'
import emponPediaImage2 from '../assets/project/EmponPedia/Screenshot 2025-08-20 230432.png'
import nagariImage1 from '../assets/project/NagariGuguk/image.png'
import nagariImage from '../assets/project/NagariGuguk/image1.png'
import nagariImage2 from '../assets/project/NagariGuguk/image2.png'
import simpiImage1 from '../assets/project/Simpi/Screenshot (2792).png'
import simpiThumb from '../assets/project/Simpi/Screenshot 2026-05-01 134913.png'
import simpiImage2 from '../assets/project/Simpi/Screenshot 2026-05-06 002316.png'

import dashboard2 from '../assets/project/Dashboard/Screenshot (1982).png'
import dashboard3 from '../assets/project/Dashboard/Screenshot (2002).png'

import petatani1 from '../assets/project/Petatani/Screenshot (1346).png'
import petatani2 from '../assets/project/Petatani/Screenshot (1348).png'
import petatani3 from '../assets/project/Petatani/Screenshot (1349).png'
import petatani4 from '../assets/project/Petatani/Screenshot (1355).png'


import firetechImage1 from '../assets/project/Firetech/Screenshot 2025-11-11 213143.png'
import firetechImage2  from '../assets/project/Firetech/Screenshot 2025-11-11 213516.png'
import firetechThumb from '../assets/project/Firetech/Screenshot 2025-11-11 213642.png'





export const PROJECTS: Project[] = [
  {
    slug: 'breast-scan',
    title: 'BREAST-SCAN — Multimodal Deep Learning',
    category: 'data',
    tag: 'Deep Learning',
    description:
      'Mengembangkan solusi Multimodal Deep Learning untuk deteksi dini kanker payudara dengan menggabungkan informasi citra dan metadata pasien.',
    impact: 'Akurasi 96% — PKM-KC 2025 didanai nasional',
    detail: {
      overview:
        'BREAST-SCAN adalah sistem deteksi dini kanker payudara yang menggabungkan citra medis dan metadata pasien untuk menghasilkan prediksi yang lebih informatif dibanding hanya memakai satu jenis input.',
      problem:
        'Pada kasus medis, satu sumber data sering tidak cukup untuk menangkap konteks klinis secara utuh. Tantangannya adalah merancang pipeline yang mampu mengolah dua modalitas berbeda secara konsisten dan tetap mudah diintegrasikan ke aplikasi web.',
      approach:
        'Saya membangun alur preprocessing untuk citra dan metadata, lalu menggabungkan keduanya ke arsitektur multimodal deep learning. Model dievaluasi secara iteratif untuk menyeimbangkan performa prediksi, stabilitas training, dan kemudahan integrasi ke antarmuka pengguna.',
      result:
        'Hasil akhir menunjukkan akurasi 96% dan sistem berhasil dipresentasikan sebagai proyek PKM-KC yang didanai nasional. Model juga disiapkan agar dapat dipakai melalui aplikasi berbasis web.',
      highlights: [
        'Preprocessing citra dan metadata pasien',
        'Penggabungan fitur multimodal untuk prediksi',
        'Evaluasi model dan eksperimen arsitektur',
        'Implementasi ke aplikasi berbasis web',
      ],
    },
    stack: [
      'Python',
      'TensorFlow',
      'Scikit-learn',
      'Deep Learning',
      'CNN',
      'Multimodal Learning',
      'Fullstack Developer',
      'React.JS',
      'Flask',
      'Git',

    ],
    thumb: breastScanThumb,
    images: [
      breastScanThumb,
      breastScanImage,
    ],
  },

  {
    slug: 'emponpedia',
    title: 'EmponPedia — AI for Recognizing Indonesian Traditional Herbs',
    category: 'data',
    tag: 'Machine Learning',
    description:
      'Mengembangkan model CNN berbasis Transfer Learning untuk mengklasifikasikan empat jenis tanaman obat tradisional Indonesia.',
    impact: 'Akurasi hingga 97% pada data uji',
    detail: {
      overview:
        'EmponPedia adalah proyek klasifikasi tanaman obat tradisional Indonesia berbasis computer vision yang membantu mengenali jenis empon-empon dari gambar daun atau tanaman.',
      problem:
        'Identifikasi tanaman obat secara manual sering membutuhkan pengetahuan khusus dan tidak selalu praktis untuk pengguna umum. Tantangannya adalah membuat model yang cukup akurat pada variasi cahaya, sudut pengambilan gambar, dan karakter visual antar kelas yang mirip.',
      approach:
        'Saya menggunakan CNN berbasis transfer learning agar model dapat memanfaatkan fitur visual yang sudah dipelajari dari data besar. Pipeline disiapkan dari preprocessing, augmentasi, training, hingga pengujian dan integrasi ke web app.',
      result:
        'Model mencapai akurasi hingga 97% pada data uji dan digunakan sebagai inti sistem klasifikasi yang dapat diakses lewat antarmuka aplikasi.',
      highlights: [
        'Klasifikasi empat jenis tanaman obat tradisional',
        'Transfer learning menggunakan MobileNet untuk meningkatkan akurasi',
        'Integrasi model dengan aplikasi web',
      ],
    },
    stack: [
      'Python',
      'TensorFlow',
      'CNN',
      'Transfer Learning',
      'Computer Vision',
      'Flask',
      'React.js',
    ],
    thumb: emponPediaThumb,
    images: [
      emponPediaThumb,
      emponPediaImage1,
      emponPediaImage2,
    ],
    repo: 'https://github.com/azizahND/empon-classifier',
  },

  // {
  //   slug: 'prediksi-kelayakan-debitur',
  //   title: 'Prediksi Kelayakan Debitur',
  //   category: 'data',
  //   tag: 'Predictive Modeling',
  //   description:
  //     'Membangun model Logistic Regression untuk memprediksi kelayakan debitur berdasarkan data historis peminjaman.',
  //   impact: 'Mengidentifikasi faktor utama dalam prediksi kelayakan kredit',
  //   stack: [
  //     'Python',
  //     'Pandas',
  //     'Scikit-learn',
  //     'Logistic Regression',
  //     'EDA',
  //     'Data Analysis',
  //   ],
  //   thumb: 'grid',
  // },

  {
    slug: 'dashboard-interaktif',
    title: 'Dashboard Interaktif untuk Visualisasi Data',
    category: 'data',
    tag: 'Data Analytics',
    description:
      'Membangun dashboard interaktif menggunakan Streamlit untuk mengeksplorasi data dan menyajikan hasil analisis.',
    impact: 'Mendukung eksplorasi data dan monitoring performa model',
    detail: {
      overview:
        'Proyek ini dibuat sebagai dashboard analitik untuk membantu pengguna memahami data dan membaca insight penting melalui visualisasi yang interaktif dan mudah dipakai.',
      problem:
        'Data mentah sulit dipahami jika hanya dilihat dalam bentuk tabel. Tantangannya adalah menyusun dashboard yang bisa merangkum tren, perbandingan, dan pola penting tanpa membuat tampilan terasa padat atau membingungkan.',
      approach:
        'Saya membangun dashboard dengan Streamlit dan menata alur eksplorasi data dari ringkasan umum, filter, visualisasi utama, sampai insight yang relevan. Struktur tampilan dibuat fokus pada kecepatan membaca informasi.',
      result:
        'Dashboard ini mempermudah proses eksplorasi data dan dipakai untuk memonitor performa model maupun membaca pola data secara lebih cepat.',
      highlights: [
        'Visualisasi interaktif untuk eksplorasi data',
        'Ringkasan insight dan metrik utama',
        'Dukungan monitoring performa model',
        'Antarmuka ringan untuk analisis cepat',
      ],
    },
    stack: [
      'Python',
      'Streamlit',
      'Data Visualization',
      'Machine Learning',
      'Analytics',
      'Random Forest',
      'ETL',


    ],
    thumb: 'dashboard1',
    images: [
    
      dashboard2,
      dashboard3,
    ],
  },

  {
    slug: 'petatani',
    title: 'PetaTani — Visualisasi Data Pertanian',
    category: 'fullstack',
    tag: 'Frontend Developer',
    description:
      'Mengembangkan antarmuka visualisasi data produksi pertanian Indonesia dengan penyajian informasi berdasarkan wilayah secara interaktif.',
    impact: 'Menyajikan informasi data pertanian secara lebih interaktif',
    detail: {
      overview:
        'PetaTani adalah antarmuka visualisasi data pertanian Indonesia yang menyajikan informasi produksi berdasarkan wilayah dengan tampilan yang interaktif dan mudah ditelusuri.',
      problem:
        'Informasi pertanian sering tersebar di banyak sumber dan sulit dibaca jika tidak divisualisasikan dengan baik. Tantangannya adalah membuat pengalaman yang cepat dipahami, tetap rapi di berbagai ukuran layar, dan nyaman untuk eksplorasi data wilayah.',
      approach:
        'Saya merancang komponen frontend dengan fokus pada navigasi visual, penyajian data per wilayah, dan layout yang responsif. Struktur dibuat agar informasi utama langsung terlihat tanpa mengorbankan detail pendukung.',
      result:
        'Proyek ini menghasilkan tampilan yang lebih interaktif untuk memahami data pertanian secara spasial dan membantu pengguna menelusuri informasi dengan lebih cepat.',
      highlights: [
        'Visualisasi data berbasis wilayah',
        'Antarmuka responsif untuk desktop dan mobile',
        'Komponen frontend untuk eksplorasi data',
        'Penyajian informasi yang lebih mudah dibaca',
      ],
    },
    stack: [
      'React.js',
      'JavaScript',
      'Data Visualization',
      'Geographic Data',
      'UI/UX',
    ],
    thumb: petatani4,
    images: [
      petatani1,
      petatani2,
      petatani3,
      petatani4,
    ],
  },

  {
    slug: 'nagari-guguak',
    title: 'Official Profile Website of Nagari Guguak',
    category: 'fullstack',
    tag: 'Fullstack Development',
    description:
      'Mendesain dan mengembangkan website profil resmi Nagari Guguak sebagai platform informasi publik.',
    impact: 'Digitalisasi informasi dan profil potensi nagari',
    detail: {
      overview:
        'Website profil resmi Nagari Guguak dibangun sebagai pusat informasi publik untuk menampilkan profil wilayah, potensi nagari, dan informasi penting dalam satu platform yang terstruktur.',
      problem:
        'Sebelum ada situs resmi, informasi nagari cenderung tersebar dan tidak seragam. Tantangannya adalah membuat website yang kredibel, mudah diperbarui, dan cukup fleksibel untuk berbagai jenis konten profil daerah.',
      approach:
        'Saya mengembangkan sisi frontend dan backend dengan Laravel, PHP, MySQL, dan Tailwind CSS. Fokus utama ada pada struktur halaman, pengelolaan data, dan tampilan yang profesional untuk kebutuhan informasi publik.',
      result:
        'Website berhasil menjadi sarana digitalisasi profil nagari dan memudahkan pengguna mengakses informasi resmi serta potensi daerah secara lebih terpusat.',
      highlights: [
        'Website profil resmi untuk informasi publik',
        'Integrasi frontend, backend, dan database',
        'Tampilan profesional untuk kebutuhan pemerintahan lokal',
        'Dapat diakses langsung melalui domain publik',
      ],
    },
    stack: [
      'Laravel',
      'PHP',
      'MySQL',
      'JavaScript',
      'Tailwind CSS',
      'Git',
    ],
    thumb: nagariImage,
    images: [
      nagariImage,
      nagariImage1,
      nagariImage2,
    ],
    demo: 'https://nagariguguaksijunjung.id',
  },

  {
    slug: 'simpi',
    title: 'SIMPI — Sistem Informasi Pengumpulan Infaq (UPZ UNAND)',
    category: 'fullstack',
    tag: 'Fullstack Development',
    description:
      'Sistem Informasi Pengumpulan Infaq melalui Penjualan Barang – UPZ UNAND adalah platform berbasis website yang dikembangkan untuk memfasilitasi sivitas akademika Universitas Andalas dalam menyalurkan infaq melalui barang layak pakai.',
    impact: 'Marketplace infaq yang mendukung program sosial dan beasiswa',
    detail: {
      overview:
        'SIMPI adalah platform pengumpulan infaq melalui penjualan barang layak pakai yang dirancang untuk membantu sivitas akademika Universitas Andalas menyalurkan donasi secara lebih terstruktur.',
      problem:
        'Proses pengumpulan infaq secara manual rentan tidak transparan dan kurang efisien. Tantangannya adalah membangun alur transaksi yang jelas, aman, dan mudah dipahami oleh pengguna dengan berbagai tingkat kemampuan teknis.',
      approach:
        'Saya mengerjakan pengembangan sistem berbasis Laravel 12 dengan integrasi Tailwind CSS, MySQL, dan Midtrans. Fokusnya ada pada alur pengguna, manajemen data barang, serta proses transaksi yang rapi dari sisi antarmuka dan sistem.',
      result:
        'SIMPI menjadi sarana digital yang mendukung program sosial dan beasiswa melalui mekanisme infaq yang lebih transparan dan mudah diakses.',
      highlights: [
        'Alur transaksi infaq melalui penjualan barang',
        'Integrasi payment gateway Midtrans',
        'Sistem berbasis Laravel 12 dan MySQL',
        'Dukungan program sosial dan beasiswa',
      ],
    },
    stack: [
      'Laravel 12',
      'PHP',
      'MySQL',
      'Tailwind CSS',
      'Midtrans',
    ],
    thumb: simpiThumb,
    images: [
      simpiThumb,
      simpiImage1,
      simpiImage2,
    ],
    demo: '#',
  },

  {
    slug: 'firetech-2025',
    title: 'Firetech 2025 — Event Profile & Registration Website',
    category: 'fullstack',
    tag: 'Web Development',
    description:
      'Mengembangkan website profil dan registrasi peserta Firetech 2025 menggunakan React.js dengan integrasi database Prisma.',
    impact: 'Mendukung publikasi informasi event dan proses registrasi peserta secara terintegrasi',
    detail: {
      overview:
        'Firetech 2025 adalah website event yang menggabungkan informasi profil acara dan formulir registrasi peserta dalam satu alur yang ringkas dan mudah digunakan.',
      problem:
        'Event membutuhkan halaman informasi yang cepat dipahami sekaligus sistem registrasi yang tidak membingungkan. Tantangannya adalah menyeimbangkan kebutuhan publikasi acara dengan alur pendaftaran yang efisien.',
      approach:
        'Saya membangun antarmuka menggunakan React.js dan menghubungkannya dengan database melalui Prisma agar data registrasi dapat dikelola secara lebih terstruktur. Komponen disusun untuk menampilkan informasi event, jadwal, dan proses pendaftaran dengan jelas.',
      result:
        'Hasilnya adalah website event yang mendukung publikasi informasi Firetech 2025 dan mempermudah peserta melakukan registrasi secara terintegrasi.',
      highlights: [
        'Website profil dan registrasi event',
        'Integrasi frontend dengan database Prisma',
        'Alur registrasi peserta yang terstruktur',
        'Tampilan informatif untuk kebutuhan acara',
      ],
    },
    stack: [
      'React.js',
      'Prisma',
      'Database',
    ],
    thumb: firetechThumb,
    images: [
      firetechThumb,
      firetechImage1,
      firetechImage2,
    ],
  },
]

export function findProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}