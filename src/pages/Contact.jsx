import { Camera, Clock, MapPin, MessageCircle, Share2 } from 'lucide-react'
import { businessConfig } from '../config/businessConfig'

export default function Contact() {
  return (
    <section className="page-section">
      <div className="container contact-grid">
        <div className="page-heading align-left">
          <span className="eyebrow">Contato e localizacao</span>
          <h1>{businessConfig.name}</h1>
          <p>{businessConfig.tagline}</p>
          <div className="contact-list">
            <p>
              <MapPin size={18} />
              {businessConfig.address}
            </p>
            <p>
              <Clock size={18} />
              {businessConfig.hours}
            </p>
          </div>
          <div className="hero-actions">
            <a className="btn btn-whatsapp" href={`https://wa.me/${businessConfig.whatsappNumber}`} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>
            <a className="btn btn-secondary" href={businessConfig.googleMapsUrl} target="_blank" rel="noreferrer">
              Ver no Google Maps
            </a>
          </div>
          <div className="social-row">
            <a href={businessConfig.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Camera size={20} />
            </a>
            <a href={businessConfig.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Share2 size={20} />
            </a>
          </div>
        </div>

        <div className="map-card">
          <iframe
            title="Mapa da Tenda do Ozi Gastrobar"
            src="https://www.google.com/maps?q=Sao%20Paulo%20SP&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
