import { Banknote, Camera, Clock, CreditCard, MapPin, MessageCircle, Share2, Truck } from 'lucide-react'
import { businessConfig } from '../config/businessConfig'

export default function Contact() {
  return (
    <section className="page-section">
      <div className="container contact-grid">
        <div className="page-heading align-left">
          <span className="eyebrow">Contato e localização</span>
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
            <p>
              <Truck size={18} />
              Tempo medio delivery: {businessConfig.deliveryTime}
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
            src={businessConfig.googleMapsEmbedUrl}
            loading="lazy"
          />
        </div>
      </div>

      <div className="container contact-info-grid">
        <section className="contact-panel">
          <h2>
            <Clock size={22} />
            Horários de Funcionamento
          </h2>
          <div className="hours-list">
            {businessConfig.openingHours.map((item) => (
              <div className="hours-row" key={item.day}>
                <span>{item.day}</span>
                <strong>{item.time}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-panel">
          <h2>
            <CreditCard size={22} />
            Métodos de Pagamento
          </h2>
          <div className="payment-list">
            {businessConfig.paymentMethods.map((method) => (
              <span key={method}>
                <Banknote size={16} />
                {method}
              </span>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
