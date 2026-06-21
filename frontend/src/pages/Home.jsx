import { Link } from 'react-router-dom'
import { ArrowRight, Flame, MessageCircle, ShoppingBasket } from 'lucide-react'
import { businessConfig } from '../config/businessConfig'
import { formatCurrency } from '../services/whatsappService'

const highlights = [
  {
    title: 'Espetos na brasa',
    text: 'Tradicionais, especiais e kafta recheada com preparo de gastrobar.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Petiscos da Tenda',
    text: 'Opcoes praticas para dividir com amigos ou completar seu pedido.',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Bebidas geladas',
    text: 'Refrigerantes e agua para acompanhar seu combo favorito.',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <Flame size={16} />
              Pedido minimo de {formatCurrency(businessConfig.minimumOrder)}
            </span>
            <h1>{businessConfig.name}</h1>
            <p>{businessConfig.tagline}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/cardapio">
                Ver Cardápio
                <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-secondary" to="/promocoes">
                Ver Promoções
              </Link>
              <a className="btn btn-whatsapp" href={`https://wa.me/${businessConfig.whatsappNumber}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Espetos e petiscos servidos na brasa">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
              alt="Espetos assados na brasa"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <span className="eyebrow">
            <ShoppingBasket size={16} />
            Cardápio digital
          </span>
          <h2>Escolha, adicione ao carrinho e finalize pelo WhatsApp.</h2>
        </div>
        <div className="container feature-grid">
          {highlights.map((item) => (
            <article className="feature-card" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted-section">
        <div className="container info-band">
          <div>
            <h2>Pronto para apresentar e evoluir.</h2>
            <p>
              Faça seu pedido imediatamente e aproveite os melhores espetos e petiscos da região.
            </p>
          </div>
          <Link className="btn btn-primary" to="/cardapio">
            Montar pedido
          </Link>
        </div>
      </section>
    </>
  )
}
