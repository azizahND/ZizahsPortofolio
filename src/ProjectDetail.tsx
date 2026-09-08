import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { findProjectBySlug } from './data/projects'

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams() as { slug?: string }
  const project = slug ? findProjectBySlug(slug) : undefined

  const gallery = useMemo(
    () => (project?.images ?? []).filter((image): image is string => Boolean(image)),
    [project?.images],
  )
  const [activeImage, setActiveImage] = useState(gallery[0] ?? '')

  useEffect(() => {
    setActiveImage(gallery[0] ?? '')
  }, [gallery])

  if (!project) {
    return (
      <div className="wrap not-found-shell">
        <h2>Proyek tidak ditemukan.</h2>
        <p>Proyek yang kamu cari mungkin sudah dipindahkan atau belum tersedia.</p>
        <Link to="/" className="btn">Kembali ke beranda</Link>
      </div>
    )
  }

  return (
    <main className="project-detail-shell">
      <div className="wrap" style={{ maxWidth: 900 }}>
        <Link to="/" className="back-link">
          <BackIcon />
          Kembali
        </Link>

        <div className="project-detail-header">
          <h1>{project.title}</h1>
          <div className="project-meta">
            <span className="cat-badge accent">{project.tag}</span>
            <span className="sep">•</span>
            <span className="cat-badge">{project.category}</span>
          </div>
        </div>

        {gallery.length > 0 && (
          <div className="project-gallery">
            <div className="project-gallery-main">
              <img src={activeImage || gallery[0]} alt={project.title} />
            </div>
            {gallery.length > 1 && (
              <div className="project-gallery-thumbs" aria-label="Thumbnail proyek">
                {gallery.map((img) => (
                  <button
                    key={`${project.slug}-${img}`}
                    type="button"
                    className={`project-gallery-thumb ${activeImage === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img} alt={`${project.title} thumbnail`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="detail-body">{project.description}</div>

        <div className="detail-section">
          <span className="section-label">Ringkasan Detail</span>
          <div className="detail-prose">
            <p>{project.detail.overview}</p>
            <p>{project.detail.problem}</p>
            <p>{project.detail.approach}</p>
            <p>{project.detail.result}</p>
          </div>
        </div>

        <div className="detail-section">
          <span className="section-label">Highlight Pekerjaan</span>
          <ul className="detail-list">
            {project.detail.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <span className="section-label">Hasil &amp; Impact</span>
          <p>{project.impact}</p>
        </div>

        <div className="detail-section">
          <span className="section-label">Teknologi &amp; Tools</span>
          <div className="tag-row">
            {project.stack.map((item) => (
              <span key={item} className="tag">{item}</span>
            ))}
          </div>
        </div>

        {(project.repo || (project.demo && project.demo !== '#')) && (
          <div className="detail-section">
            <span className="section-label">Tautan</span>
            <div className="detail-cta-row detail-cta-row-between">
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="btn outline icon-link-btn">
                  Lihat repo
                </a>
              )}
              {project.demo && project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn icon-link-btn">
                  Lihat demo
                </a>
              )}
            </div>
          </div>
        )}

        <div className="detail-section">
          <Link to="/" className="btn outline">Kembali ke daftar proyek</Link>
        </div>
      </div>
    </main>
  )
}
