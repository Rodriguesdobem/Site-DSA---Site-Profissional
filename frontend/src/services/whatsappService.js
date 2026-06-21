import { businessConfig } from '../config/businessConfig'

export function formatCurrency(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function buildOrderMessage(items, customer) {
  const lines = items.map((item) => {
    const subtotal = item.price * item.quantity
    return `${item.quantity}x ${item.name} - ${formatCurrency(subtotal)}`
  })

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryInfo =
    customer.fulfillment === 'entrega'
      ? `Entrega: ${customer.address || 'preencher endereco'}`
      : 'Retirada no local'

  return [
    `Ola, gostaria de fazer um pedido na ${businessConfig.name}:`,
    '',
    ...lines,
    '',
    `Total: ${formatCurrency(total)}`,
    '',
    `Nome: ${customer.name || 'preencher com o cliente'}`,
    `Forma de retirada/entrega: ${deliveryInfo}`,
    `Observação: ${customer.note || 'sem observação'}`,
  ].join('\n')
}

export function getWhatsappUrl(items, customer) {
  const message = encodeURIComponent(buildOrderMessage(items, customer))
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${message}`
}
