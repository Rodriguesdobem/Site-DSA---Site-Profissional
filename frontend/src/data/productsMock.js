const imageByCategory = {
  'espetos-tradicionais':
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
  acompanhamento:
    'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=900&q=80',
  'espetos-especiais':
    'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&w=900&q=80',
  'kafta-recheada':
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  'petisco-da-tenda':
    'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80',
  bebidas:
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
}

export const productsMock = [
  ['frango', 'Frango', 'Espeto tradicional de frango temperado na brasa.', 7.5, 'espetos-tradicionais'],
  ['linguica', 'Linguica', 'Espeto de linguica suculenta assada na churrasqueira.', 7.5, 'espetos-tradicionais'],
  ['queijo-coalho', 'Queijo Coalho', 'Queijo coalho dourado, macio por dentro e crocante por fora.', 6.5, 'espetos-tradicionais'],
  ['carne', 'Carne', 'Espeto de carne com tempero da casa.', 8, 'espetos-tradicionais'],
  ['kafta', 'Kafta', 'Kafta artesanal com especiarias leves.', 8, 'espetos-tradicionais'],
  ['coracao', 'Coracao', 'Espeto de coracao bem temperado e assado no ponto.', 7.5, 'espetos-tradicionais'],
  ['vinagrete', 'Vinagrete', 'Acompanhamento fresco com tomate, cebola e temperos.', 3, 'acompanhamento'],
  ['medalhao-frango', 'Medalhao de Frango', 'Frango envolto em bacon para um sabor mais marcante.', 9, 'espetos-especiais'],
  ['panceta', 'Panceta', 'Panceta dourada, crocante e suculenta.', 8.9, 'espetos-especiais'],
  ['tulipa', 'Tulipa', 'Tulipa temperada e assada na brasa.', 9.5, 'espetos-especiais'],
  ['medalhao-kafta-queijo', 'Medalhao de Kafta com Queijo', 'Kafta especial com queijo e acabamento na brasa.', 10.9, 'espetos-especiais'],
  ['kafta-recheada-3-queijos', 'Kafta Recheada 3 Queijos', 'Mussarela, provolone e catupiry.', 24.9, 'kafta-recheada'],
  ['pao-linguica-toscana', 'Pao com Linguica Toscana', 'Pao prensado com linguica toscana e sabor de boteco.', 10.5, 'petisco-da-tenda'],
  ['coca-1l', 'Coca-Cola 1 Litro', 'Refrigerante gelado para compartilhar.', 9, 'bebidas'],
  ['coca-lata', 'Coca-Cola Lata', 'Lata gelada de Coca-Cola tradicional.', 6, 'bebidas'],
  ['guarana-lata', 'Guarana Lata', 'Lata gelada de guarana.', 6, 'bebidas'],
  ['fanta-laranja-lata', 'Fanta Laranja Lata', 'Lata gelada sabor laranja.', 5, 'bebidas'],
  ['agua-mineral', 'Agua Mineral', 'Agua mineral sem gas.', 4, 'bebidas'],
  ['coca-lata-zero', 'Coca-Cola Lata Zero', 'Lata gelada sem acucar.', 6, 'bebidas'],
  ['guarana-15l', 'Guarana 1,5L', 'Guarana gelado tamanho familia.', 8, 'bebidas'],
].map(([id, name, description, price, categoryId]) => ({
  id,
  name,
  description,
  price,
  categoryId,
  image: imageByCategory[categoryId],
  status: 'ativo',
}))
