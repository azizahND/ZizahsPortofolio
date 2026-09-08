import { useEffect, useMemo, useState } from 'react'
import { Download, ExternalLink, Link2, Mail, Menu, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from './data/projects'
import { PROJECTS } from './data/projects'
import profilePhoto from './assets/image.png'
import cvPdf from './assets/CV/Azizah Novi Delfianti_CV.pdf'
import './App.css'

declare global {
  interface Window {
    jspdf?: {
      jsPDF: new (options?: { unit?: string; format?: string }) => PdfDocument
    }
  }
}

type PdfDocument = {
  internal: { pageSize: { getWidth: () => number } }
  setFont: (font: string, style?: string) => void
  setFontSize: (size: number) => void
  setTextColor: (...color: number[]) => void
  splitTextToSize: (text: string, maxWidth: number) => string[]
  text: (text: string, x: number, y: number) => void
  addPage: () => void
  setDrawColor: (color: number) => void
  setLineWidth: (width: number) => void
  line: (x1: number, y1: number, x2: number, y2: number) => void
  save: (filename: string) => void
}

const PROFILE = {
  name: 'Azizah Novi Delfianti',
  initials: 'AND',
  role: 'Machine Learning Engineer & Data Scientist',
  email: 'zeezahdf@gmail.com',
  phone: '0838-0360-6936',
  location: 'Padang, Sumatera Barat, Indonesia',
  linkedin: 'linkedin.com/in/azizah-novi-delfianti',
  github: 'github.com/azizahND',
  summary:
    'Fresh graduate S1 Sistem Informasi Universitas Andalas dengan fokus pada Machine Learning, Data Science, dan Data Analytics. Berpengalaman dalam data preprocessing, exploratory data analysis, feature engineering, pemodelan, evaluasi, dan visualisasi menggunakan Python, SQL, Scikit-learn, dan TensorFlow. Mengembangkan solusi CNN dan Multimodal Deep Learning dengan akurasi hingga 97% serta mengimplementasikan model ke dalam aplikasi berbasis web.',
}

const EXPERIENCE = [
  {
    role: 'Staff Data Research & Development',
    org: 'Pojok Statistik Universitas Andalas',
    year: '2025 — 2026',
    desc: 'Melakukan pengolahan, analisis, dan visualisasi data untuk mendukung kegiatan penelitian dan layanan statistik. Menyusun laporan analitik serta mengolah data geografis untuk kebutuhan pemetaan dan analisis spasial.',
  },
  {
    role: 'Machine Learning Engineer',
    org: 'PKM-KC — Universitas Andalas',
    year: '2025',
    desc: 'Mengembangkan solusi Multimodal Deep Learning untuk deteksi dini kanker payudara. Bertanggung jawab dalam preprocessing dan validasi data, pengembangan model, eksperimen, evaluasi performa, serta implementasi model ke dalam aplikasi berbasis web dengan akurasi mencapai 96%.',
  },
   {
    role: 'Frontend Developer Intern',
    org: 'BPS Provinsi Sumatera Barat',
    year: '2025',
    desc: 'Mengembangkan antarmuka dashboard SIMANIS dan LINKFY menggunakan React.js dan Tailwind CSS. Berkolaborasi dengan backend developer dalam integrasi API, sinkronisasi data, pengembangan komponen antarmuka, dan optimalisasi tampilan responsif.',
  },
  {
    role: 'Project Manager',
    org: 'PT Neo Software',
    year: '2025',
    desc: 'Memimpin proyek pengembangan software dari tahap requirement gathering, perencanaan, hingga evaluasi. Mengelola timeline dan pembagian tugas tim, berkoordinasi dengan klien dan anggota tim lintas bidang, serta memastikan kebutuhan dan progres proyek terdokumentasi dengan baik.',
  },
  
  {
    role: 'Fullstack Developer',
    org: 'PT Neo Software',
    year: '2025',
    desc: 'Mengembangkan dan memelihara aplikasi web secara end-to-end, mulai dari pengembangan antarmuka, implementasi backend, integrasi database, hingga debugging dan pengembangan fitur. Berkolaborasi dengan tim untuk memastikan aplikasi berjalan sesuai kebutuhan pengguna.',
  },
 
  
  {
    role: 'Member Divisi Machine Learning',
    org: 'UKM Neo Telemetri, Universitas Andalas',
    year: '2024 — 2025',
    desc: 'Melakukan preprocessing data, exploratory data analysis, dan eksperimen model Machine Learning menggunakan Python dan Scikit-learn. Terlibat dalam pengembangan dan evaluasi model untuk berbagai kebutuhan proyek AI.',
  },
];
// project data imported from src/data/projects.ts

const SKILLS = {
  'Machine Learning & Deep Learning': [
    'Python',
    'Scikit-learn',
    'TensorFlow',
    'CNN',
    'Transfer Learning',
    'Deep Learning',
    'NLP',
    'Predictive Modeling',
    'Logistic Regression',
    'Model Evaluation',
  ],

  'Data Science & Analytics': [
    'SQL',
    'Pandas',
    'Exploratory Data Analysis (EDA)',
    'Data Mining',
    'Data Cleaning',
    'Feature Engineering',
    'ETL',
    'Data Warehouse',
    'Data Visualization',
    'Statistical Analysis',
  ],

  'Data Visualization & Application': [
    'Streamlit',
    'Flask',
    'React.js',
    'JavaScript',
    'Tailwind CSS',
    'Geographic Data Visualization',
    'Dashboard Development',
  ],

  'Software Engineering & Tools': [
    'Laravel',
    'PHP',
    'MySQL',
    'REST API',
    'Git',
    'Jupyter Notebook',
    'Figma',
  ],

  'Professional Skills': [
    'Analytical Thinking',
    'Problem Solving',
    'Project Management',
    'Requirement Gathering',
    'Team Collaboration',
    'Technical Communication',
  ],
}

const EDUCATION = [
  {
    title: 'S1 Sistem Informasi',
    org: 'Universitas Andalas — 2022 s.d. 2026',
    desc: 'IPK 3.72/4.00',
  },
]

const ACHIEVEMENTS = [
  {
    title: 'Bintang Aktivis Kampus Universitas',
    desc: 'BEM KM Universitas Andalas — 2026',
  },
  {
    title: 'Pendanaan Program Kreativitas Mahasiswa — Karsa Cipta',
    desc: 'Kemdiktisaintek RI — 2025',
  },
  {
    title: 'Bronze Medal — Business Case Teknologi',
    desc: 'Inspirex Summit Fest — 2025',
  },
  // {
  //   title: 'Pemateri Bootcamp Machine Learning OR 14',
  //   desc: 'UKM Neo Telemetri Universitas Andalas — 2025',
  // },
  // {
  //   title: 'Pemateri Engineering Training Booster 3.0',
  //   desc: 'BEM KM Fakultas Teknik Universitas Andalas — 2025',
  // },
]



const FILTERS = [
  { key: 'all', label: 'Semua' },
  { key: 'data', label: 'Data' },
  { key: 'fullstack', label: 'Aplikasi' },
] as const

type FilterKey = (typeof FILTERS)[number]['key']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  useEffect(() => {
    const onHashChange = () => {
      const targetId = window.location.hash
      if (!targetId) return
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    window.addEventListener('hashchange', onHashChange)
    onHashChange()
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const filteredProjects = useMemo(
    () => PROJECTS.filter((project) => activeFilter === 'all' || project.category === activeFilter),
    [activeFilter],
  )

  function openCvFile() {
    const link = document.createElement('a')
    link.href = cvPdf
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.download = 'Azizah_Novi_Delfianti_CV.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand">
            <div className="brand-mark" id="monogram">{PROFILE.initials}</div>
            <span className="brand-name" id="navName">{PROFILE.name}</span>
          </a>
          <nav className="links">
            <a href="#proyek">Proyek</a>
            <a href="#pengalaman">Pengalaman</a>
            <a href="#skill">Skill</a>
            <a href="#kontak">Kontak</a>
            <button className="btn small" type="button" onClick={openCvFile}>
              <Download className="icon-btn" />
              Lihat CV
            </button>
          </nav>
          <button className="menu-toggle" aria-label="Buka menu" onClick={() => setMenuOpen((value) => !value)}>
            <Menu className="icon-btn" />
          </button>
        </div>
        <div className={`wrap mobile-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#proyek" onClick={() => setMenuOpen(false)}>Proyek</a>
          <a href="#pengalaman" onClick={() => setMenuOpen(false)}>Pengalaman</a>
          <a href="#skill" onClick={() => setMenuOpen(false)}>Skill</a>
          <a href="#kontak" onClick={() => setMenuOpen(false)}>Kontak</a>
          <button className="btn small" type="button" onClick={openCvFile} style={{ width: 'fit-content' }}>Lihat CV</button>
        </div>
      </header>

      <main id="top">
        <section className="hero" style={{ borderBottom: '1px solid var(--line)', paddingTop: '64px' }}>
          <div className="wrap hero-inner">
            <div>
              <p className="eyebrow-note">Fresh Graduate Sistem Informasi</p>

              <h1 id="heroHeadline">
                Mengolah <span className=''>data</span>  menjadi insight, mengembangkan model, dan membangun solusi digital.
              </h1>

              <p className="lead" id="heroLead">
                Berpengalaman dalam Data Science, Machine Learning, dan Fullstack Development, dengan fokus pada pengolahan data, pengembangan model prediktif, visualisasi insight, serta pembangunan aplikasi web secara end-to-end.
              </p>

              <div className="cta-row">
                <a href="#proyek" className="btn">Lihat proyek</a>
                <button className="btn outline" type="button" onClick={openCvFile}>
                  Lihat CV
                </button>
              </div>

{/* <div className="stat-row">
  <div className="stat">
    <div className="num">20+</div>
    <div className="lab">Analisis &amp; pipeline data</div>
  </div>

  <div className="stat">
    <div className="num">5+</div>
    <div className="lab">Proyek machine learning</div>
  </div>

  <div className="stat">
    <div className="num">8+</div>
    <div className="lab">Proyek fullstack</div>
  </div>
</div> */}

            </div>

            <div className="hero-figure">
              <div className="photo-frame">
                <img src={profilePhoto} alt="Foto profil Azizah Novi Delfianti" />
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <h2>Dua arah kerja, satu cara berpikir</h2>
                <p className="sec-desc">Data dan produk sama-sama butuh ketelitian di detail dan kejelasan di hasil akhir.</p>
              </div>
            </div>
            <div className="focus-list">
              <div className="focus-row">
                <div className="idx">01 — Data</div>
                <div>
                  <h3>Data Science &amp; Machine Learning</h3>
                  <p>Data cleansing, exploratory data analysis, pemodelan machine learning, dan visualisasi yang membantu pengambilan keputusan.</p>
                </div>
              </div>
              <div className="focus-row">
                <div className="idx">02 — Produk</div>
                <div>
                  <h3>Fullstack Development</h3>
                  <p>Membangun aplikasi web dan dashboard dengan React, integrasi API, serta antarmuka yang responsif dan mudah dipakai.</p>
                </div>
              </div>
              <div className="focus-row">
                <div className="idx">03 — Komunikasi</div>
                <div>
                  <h3>Berbagi ilmu</h3>
                  <p>Aktif menjadi pemateri Python dan machine learning di organisasi kemahasiswaan, menerjemahkan konsep teknis jadi mudah dipahami.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="pengalaman">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <h2>Pengalaman</h2>
                <p className="sec-desc">Ringkasan perjalanan akademik, organisasi, dan proyek yang membentuk cara saya kerja.</p>
              </div>
            </div>
            <div className="timeline">
              {EXPERIENCE.map((entry) => (
                <div className="tl-item" key={`${entry.year}-${entry.role}`}>
                  <div className="tl-year">{entry.year}</div>
                  <div>
                    <div className="tl-role">{entry.role}</div>
                    <div className="tl-org">{entry.org}</div>
                    <p className="tl-desc text-justify">{entry.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proyek">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <h2>Proyek terpilih</h2>
                <p className="sec-desc">Kombinasi proyek data science dan aplikasi web, dari riset sampai produk yang bisa dipakai.</p>
              </div>
            </div>
            <div className="filter-row">
              {FILTERS.map((filter) => (
                <button key={filter.key} type="button" className={`chip-filter ${activeFilter === filter.key ? 'active' : ''}`} onClick={() => setActiveFilter(filter.key)}>
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="proj-grid">
              {filteredProjects.map((project, index) => (
                <article className="proj-card" key={project.title}>
                  <div className="proj-thumb">
                    {project.images && project.images.length > 0 ? (
                      <img src={project.images[0]} alt={project.title} className="project-thumb-image" />
                    ) : (
                      renderThumb(project.thumb)
                    )}
                  </div>
                  <div className="proj-fig"><span>{`Fig. ${String(index + 1).padStart(2, '0')}`}</span><span>{project.tag}</span></div>
                  <h3>
                    <Link to={`/project/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <div style={{ marginTop: 8 }}>
                    <Link to={`/project/${project.slug}`} className="btn small" style={{ textDecoration: 'none' }}>Lihat detail</Link>
                  </div>
                  <p className="proj-desc">{project.description}</p>
                  <p className="proj-impact">{project.impact}</p>
                  <div className="tag-row">
                    {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                  <div className="proj-actions">
                    <Link to={`/project/${project.slug}`} className="btn small">Lihat detail</Link>
                    <div className="proj-external-links">
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noreferrer" className="proj-mini-link">
                          <GitHubMark />
                          Repo
                        </a>
                      )}
                      {project.demo && project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="proj-mini-link">
                          <ExternalLink className="icon-btn" />
                          Live demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skill">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <h2>Skill &amp; tools</h2>
                <p className="sec-desc">Yang saya pakai sehari-hari untuk mengerjakan data dan produk.</p>
              </div>
            </div>
            <div className="skill-grid">
              {Object.entries(SKILLS).map(([category, items]) => (
                <div className="skill-col" key={category}>
                  <h3>{category}</h3>
                  <div className="tag-row">
                    {items.map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap two-col">
            <div>
              <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>Pendidikan</h2>
              <ul className="list-plain">
                {EDUCATION.map((item) => (
                  <li key={item.title}>
                    <span className="dot" />
                    <span><strong>{item.title}</strong><br />{item.org}<br />{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>Pencapaian</h2>
              <ul className="list-plain">
                {ACHIEVEMENTS.map((item) => (
                  <li key={item.title}>
                    <span className="dot" />
                    <span><strong>{item.title}</strong><br />{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <footer id="kontak" style={{ borderBottom: 'none' }}>
          <div className="wrap contact-inner">
            <div>
              <h2>Terbuka untuk peran data science, machine learning, atau fullstack development.</h2>
              <div className="cta-row" style={{ marginTop: '28px' }}>
                <a href={`mailto:${PROFILE.email}`} className="btn">Kirim email</a>
                <button className="btn outline" type="button" onClick={openCvFile}>Lihat CV</button>
              </div>
            </div>
            <div className="contact-links">
              <ContactLink href={`mailto:${PROFILE.email}`} label={PROFILE.email} icon="mail" />
              <ContactLink href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} label={PROFILE.phone} icon="phone" />
              <ContactLink href={`https://${PROFILE.linkedin}`} label={PROFILE.linkedin} icon="link" />
              <ContactLink href={`https://${PROFILE.github}`} label={PROFILE.github} icon="link" />
              <ContactLink href="#" label={PROFILE.location} icon="pin" />
            </div>
          </div>
          <div className="wrap foot-meta">
            <span>© {new Date().getFullYear()} — Azizah Novi Delfianti.</span>
            <span>Padang, Sumatera Barat</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

function ContactLink({ href, label, icon }: { href: string; label: string; icon: 'mail' | 'phone' | 'link' | 'pin' }) {
  return (
    <a href={href}>
      {icon === 'mail' ? <Mail className="icon" aria-hidden="true" /> : icon === 'phone' ? <Phone className="icon" aria-hidden="true" /> : icon === 'pin' ? <MapPin className="icon" aria-hidden="true" /> : <Link2 className="icon" aria-hidden="true" />}
      <span>{label}</span>
    </a>
  )
}

function GitHubMark() {
  return (
    <svg className="icon-btn" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.73.5 12.21c0 5.18 3.29 9.58 7.86 11.12.58.11.79-.26.79-.58v-2.02c-3.2.71-3.88-1.4-3.88-1.4-.53-1.39-1.3-1.76-1.3-1.76-1.06-.75.08-.74.08-.74 1.17.08 1.79 1.23 1.79 1.23 1.04 1.82 2.72 1.29 3.39.99.11-.77.41-1.29.74-1.59-2.56-.3-5.25-1.31-5.25-5.84 0-1.29.44-2.33 1.16-3.15-.12-.3-.5-1.49.11-3.1 0 0 .95-.31 3.11 1.2a10.52 10.52 0 0 1 5.65 0c2.16-1.51 3.11-1.2 3.11-1.2.61 1.61.23 2.8.11 3.1.72.82 1.16 1.86 1.16 3.15 0 4.54-2.69 5.53-5.25 5.83.42.37.79 1.11.79 2.24v3.32c0 .32.21.69.8.57A11.74 11.74 0 0 0 23.5 12.21C23.5 5.73 18.35.5 12 .5Z" />
    </svg>
  )
}

function renderThumb(kind: Project['thumb']) {
  const stroke = '#14171c'
  if (kind === 'scan') {
    return (
      <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="300" height="190" fill="#f5f6f3" />
        <circle cx="150" cy="95" r="55" fill="none" stroke={stroke} strokeWidth="1" />
        <circle cx="150" cy="95" r="35" fill="none" stroke={stroke} strokeWidth="1" />
        <circle cx="150" cy="95" r="15" fill="none" stroke="#92003A" strokeWidth="1.5" />
        <g stroke={stroke} strokeWidth="1">
          <line x1="150" y1="20" x2="150" y2="170" />
          <line x1="75" y1="95" x2="225" y2="95" />
        </g>
        <circle cx="110" cy="65" r="3" fill="#92003A" />
        <circle cx="190" cy="120" r="3" fill="#92003A" />
        <circle cx="120" cy="130" r="3" fill={stroke} />
      </svg>
    )
  }
  if (kind === 'grid') {
    return (
      <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="300" height="190" fill="#f5f6f3" />
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 9 }).map((__, c) => {
            const x = 20 + c * 30
            const y = 15 + r * 28
            const hi = r === 2 && (c === 3 || c === 4 || c === 5)
            return <rect key={`${r}-${c}`} x={x} y={y} width="26" height="24" fill={hi ? '#92003A' : 'none'} fillOpacity={hi ? 0.15 : 0} stroke={stroke} strokeWidth="0.6" />
          }),
        )}
        <rect x="110" y="71" width="86" height="24" fill="none" stroke="#92003A" strokeWidth="1.5" />
      </svg>
    )
  }
  if (kind === 'dashboard') {
    return (
      <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="300" height="190" fill="#f5f6f3" />
        <rect x="24" y="24" width="252" height="142" fill="#fff" stroke={stroke} strokeWidth="1" />
        <rect x="24" y="24" width="252" height="22" fill="#fff" stroke={stroke} strokeWidth="1" />
        <circle cx="38" cy="35" r="3" fill={stroke} />
        <circle cx="50" cy="35" r="3" fill={stroke} />
        <circle cx="62" cy="35" r="3" fill={stroke} />
        <rect x="40" y="60" width="70" height="90" fill="none" stroke={stroke} strokeWidth="0.8" />
        <rect x="120" y="60" width="150" height="40" fill="none" stroke={stroke} strokeWidth="0.8" />
        <rect x="120" y="110" width="70" height="40" fill="none" stroke="#92003A" strokeWidth="1.2" />
        <rect x="200" y="110" width="70" height="40" fill="none" stroke={stroke} strokeWidth="0.8" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="300" height="190" fill="#f5f6f3" />
      <polyline points="24,140 70,110 110,130 150,70 190,95 230,50 276,80" fill="none" stroke="#92003A" strokeWidth="2" />
      <g fill={stroke}>
        <circle cx="24" cy="140" r="2.5" />
        <circle cx="70" cy="110" r="2.5" />
        <circle cx="110" cy="130" r="2.5" />
        <circle cx="150" cy="70" r="2.5" />
        <circle cx="190" cy="95" r="2.5" />
        <circle cx="230" cy="50" r="2.5" />
        <circle cx="276" cy="80" r="2.5" />
      </g>
      <line x1="24" y1="166" x2="276" y2="166" stroke={stroke} strokeWidth="0.6" />
    </svg>
  )
}

export default App