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

import dashboard1 from '../assets/project/CofeeDashboard/dashboard1.png'
import deskripsi1 from '../assets/project/CofeeDashboard/1.jpg'
import deskripsi2 from '../assets/project/CofeeDashboard/2.jpg'
import deskripsi3 from '../assets/project/CofeeDashboard/3.jpg'
import deskripsi4 from '../assets/project/CofeeDashboard/4.jpg'
import deskripsi5 from '../assets/project/CofeeDashboard/5.jpg'
import deskripsi6 from '../assets/project/CofeeDashboard/6.jpg'
import deskripsi7 from '../assets/project/CofeeDashboard/7.jpg'





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
  tag: 'Data Analytics & Engineering',
  repo: 'https://github.com/meeutia/dashboard_bi_carrefour.git',

  description:
    'Membangun pipeline ETL untuk mengekstrak, membersihkan, dan mentransformasi data sebelum menyimpannya ke PostgreSQL sebagai sumber data dashboard analitik berbasis Streamlit.',
  impact: 'Mengintegrasikan pipeline ETL, PostgreSQL, dan dashboard interaktif untuk mendukung eksplorasi data serta monitoring performa model.',
  detail: {
    overview:
      'Proyek ini mengintegrasikan proses ETL, penyimpanan data pada PostgreSQL, dan visualisasi interaktif menggunakan Streamlit. Data diolah terlebih dahulu agar lebih terstruktur dan siap digunakan sebagai sumber data dashboard untuk menyajikan insight, memantau metrik, dan memahami pola data.',
    problem:
      'Data mentah memerlukan proses pengolahan sebelum dapat digunakan untuk analisis dan visualisasi. Tantangannya adalah memastikan data tersusun dengan baik, tersimpan dalam database yang terstruktur, dan dapat diakses dashboard untuk menyajikan informasi secara ringkas dan mudah dipahami.',
    approach:
      'Saya membangun alur ETL yang mencakup ekstraksi data, pembersihan dan transformasi sesuai kebutuhan analisis, kemudian memuat hasil pengolahan ke dalam PostgreSQL. Selanjutnya, saya mengintegrasikan PostgreSQL dengan Streamlit agar data dapat ditampilkan melalui visualisasi interaktif, ringkasan metrik, dan fitur eksplorasi data.',
    result:
      'Pipeline ETL menghasilkan data yang lebih terstruktur dan siap dianalisis di PostgreSQL. Integrasi dengan Streamlit memungkinkan pengguna mengeksplorasi data melalui dashboard interaktif serta memantau metrik dan performa model secara lebih praktis.',
    highlights: [
      'Membangun pipeline ETL untuk pengolahan data',
      'Melakukan pembersihan dan transformasi data sebelum dimuat ke database',
      'Menyimpan data hasil pengolahan ke PostgreSQL',
      'Mengintegrasikan PostgreSQL sebagai sumber data dashboard Streamlit',
      'Menyajikan visualisasi interaktif dan ringkasan metrik',
      'Mendukung eksplorasi data dan monitoring performa model',
    ],
  },
  stack: [
    'Python',
    'Pandas',
    'ETL',
    'PostgreSQL',
    'SQL',
    'Streamlit',
    'Data Visualization',
    'Machine Learning',
    'Random Forest',
    'Analytics',
  ],
  thumb: 'dashboard1',
  images: [
    dashboard2,
    dashboard3,
  ],
},


{
  slug: 'coffee-shop-sales-dashboard',
  title: 'Coffee Shop Sales Performance Dashboard',
  category: 'data',
  tag: 'Data Analytics & Visualization',
  repo: '',

  description:
    'Membangun dashboard interaktif menggunakan Tableau untuk menganalisis performa penjualan kedai kopi berdasarkan jumlah transaksi, total pendapatan, rata-rata nilai transaksi, jenis produk, metode pembayaran, waktu transaksi, dan pola penjualan.',

  impact:
    'Menyajikan insight bisnis melalui visualisasi data penjualan, membantu mengidentifikasi produk terlaris, preferensi metode pembayaran, tren pendapatan bulanan, serta waktu dengan pendapatan tertinggi untuk mendukung pengambilan keputusan berbasis data.',

  detail: {
    overview:
      'Proyek ini berfokus pada analisis data transaksi kedai kopi di Cape Town menggunakan Tableau Public. Dataset mencakup tanggal dan waktu transaksi, metode pembayaran, jenis kopi yang dibeli, serta nominal pendapatan dalam South African Rand (ZAR). Dashboard menyajikan ringkasan KPI dan visualisasi interaktif untuk memahami pola transaksi dan performa penjualan berdasarkan produk, hari, bulan, metode pembayaran, dan jam transaksi.',

    problem:
      'Data transaksi penjualan memiliki berbagai dimensi yang perlu dianalisis untuk memahami performa bisnis. Tanpa visualisasi yang terstruktur, pemilik bisnis akan lebih sulit mengidentifikasi produk dengan penjualan tertinggi, memahami preferensi pembayaran pelanggan, mengevaluasi tren pendapatan, serta menentukan waktu operasional dengan performa penjualan terbaik.',

    approach:
      'Saya menggunakan Tableau Public untuk mengolah dan memvisualisasikan data transaksi penjualan kedai kopi. Analisis dilakukan melalui perhitungan total transaksi, total pendapatan, dan Average Order Value (AOV), kemudian dilengkapi dengan visualisasi produk kopi terlaris, distribusi metode pembayaran, pendapatan bulanan, jumlah transaksi berdasarkan hari, kontribusi pendapatan setiap produk, serta pendapatan berdasarkan jam transaksi. Dashboard dirancang dengan tata letak terstruktur dan tema warna yang konsisten agar informasi mudah dipahami.',

    result:
      'Dashboard menampilkan 3.636 transaksi dengan total pendapatan sebesar ZAR 115.432 dan rata-rata nilai transaksi sebesar ZAR 31,75. Americano with Milk menjadi produk dengan jumlah transaksi tertinggi pada visualisasi produk, yaitu 824 transaksi. Pembayaran menggunakan kartu mendominasi dengan proporsi 97,55%, sedangkan pembayaran tunai sebesar 2,45%. Visualisasi pendapatan bulanan dan per jam membantu mengeksplorasi pola performa penjualan serta mendukung identifikasi peluang peningkatan bisnis.',

    highlights: [
      'Menganalisis data transaksi penjualan kedai kopi menggunakan Tableau Public',
      'Menyajikan KPI berupa total transaksi, total pendapatan, dan Average Order Value',
      'Mengidentifikasi produk kopi berdasarkan jumlah transaksi',
      'Menganalisis preferensi metode pembayaran kartu dan tunai',
      'Memvisualisasikan tren pendapatan bulanan',
      'Membandingkan jumlah transaksi berdasarkan hari dalam seminggu',
      'Menganalisis kontribusi pendapatan setiap produk kopi',
      'Mengidentifikasi pola pendapatan berdasarkan jam transaksi',
      'Merancang dashboard dengan visualisasi yang terstruktur dan informatif',
    ],
  },

  stack: [
    'Tableau Public',
    'Data Visualization',
    'Data Analytics',
    'Exploratory Data Analysis',
    'KPI Development',
    'Sales Analysis',
    'Time Series Analysis',
    'Business Intelligence',
    'Dashboard Design',
  ],

  thumb: 'dashboard1',
  images: [
    dashboard1,
    deskripsi1,
    deskripsi2,
    deskripsi3,
    deskripsi4,   
    deskripsi5,
    deskripsi6,
    deskripsi7,
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