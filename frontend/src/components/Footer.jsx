import { Link } from 'react-router-dom'
import { Camera, MapPin, MessageCircle } from 'lucide-react'
import { businessConfig } from '../config/businessConfig'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>{businessConfig.name}</h2>
          <p>{businessConfig.tagline}</p>
        </div>
        <div>
          <h3>Navegacao</h3>
          <Link to="/cardapio">Cardapio</Link>
          <Link to="/promocoes">Promocoes</Link>
          <Link to="/contato">Contato</Link>
        </div>
        <div>
          <h3>Contato</h3>
          <a href={businessConfig.googleMapsUrl} target="_blank" rel="noreferrer">
            <MapPin size={16} /> Ver mapa
          </a>
          <a href={`https://wa.me/${businessConfig.whatsappNumber}`} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href={businessConfig.instagramUrl} target="_blank" rel="noreferrer">
            <Camera size={16} /> Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
