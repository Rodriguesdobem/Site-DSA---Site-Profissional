import PromoCard from '../components/PromoCard'
import { useApp } from '../context/useApp'

export default function Promotions() {
  const { promos, addToCart } = useApp()
  const activePromos = promos.filter((promo) => promo.status === 'ativo')

  return (
    <section className="page-section">
      <div className="container page-heading">
        <span className="eyebrow">Combos e ofertas</span>
        <h1>Promocoes da Tenda</h1>
        <p>Promocoes simuladas com base nos itens reais do cardapio.</p>
      </div>

      <div className="container promo-grid">
        {activePromos.map((promo) => (
          <PromoCard
            key={promo.id}
            promo={promo}
            onAdd={() =>
              addToCart({
                id: promo.id,
                name: promo.title,
                description: promo.description,
                price: promo.price,
                image: promo.image,
                categoryId: 'promocoes',
                status: 'ativo',
              })
            }
          />
        ))}
      </div>
    </section>
  )
}
