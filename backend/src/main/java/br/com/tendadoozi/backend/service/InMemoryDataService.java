package br.com.tendadoozi.backend.service;

import br.com.tendadoozi.backend.model.BusinessConfig;
import br.com.tendadoozi.backend.model.Category;
import br.com.tendadoozi.backend.model.Order;
import br.com.tendadoozi.backend.model.Product;
import br.com.tendadoozi.backend.model.Promotion;
import br.com.tendadoozi.backend.util.SlugUtil;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class InMemoryDataService {
    private static final String SKEWER_IMAGE = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80";
    private static final String SIDE_IMAGE = "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=900&q=80";
    private static final String SPECIAL_IMAGE = "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&w=900&q=80";
    private static final String KAFTA_IMAGE = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80";
    private static final String SNACK_IMAGE = "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80";
    private static final String DRINK_IMAGE = "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80";

    private final List<Product> products = new CopyOnWriteArrayList<>();
    private final List<Category> categories = new CopyOnWriteArrayList<>();
    private final List<Promotion> promotions = new CopyOnWriteArrayList<>();
    private final List<Order> orders = new CopyOnWriteArrayList<>();

    private final BusinessConfig businessConfig = new BusinessConfig(
            "Tenda do Ozi Gastrobar",
            "Espetos, petiscos e bebidas para curtir bons momentos.",
            15.0,
            "5511999999999",
            "Av. Pres. Vargas, 833 - Jardim Nova Itapevi, Itapevi - SP, 06694-000, Brasil",
            "Quarta a sabado, das 18:30 as 23:00",
            "https://www.google.com/maps/search/?api=1&query=Av.%20Pres.%20Vargas%20833%20Jardim%20Nova%20Itapevi%20Itapevi%20SP%2006694-000%20Brasil",
            "https://www.instagram.com/",
            "https://www.facebook.com/",
            "Pagamento online sera integrado em uma proxima versao."
    );

    @PostConstruct
    public void seed() {
        categories.addAll(List.of(
                new Category("espetos-tradicionais", "Espetos Tradicionais", "Classicos da churrasqueira para qualquer momento.", "ativo"),
                new Category("acompanhamento", "Acompanhamento", "Complementos para deixar o pedido mais completo.", "ativo"),
                new Category("espetos-especiais", "Espetos Especiais", "Cortes e preparos especiais da casa.", "ativo"),
                new Category("kafta-recheada", "Kafta Recheada", "Kaftas generosas com recheios cremosos.", "ativo"),
                new Category("petisco-da-tenda", "Petisco da Tenda", "Petiscos rapidos para compartilhar.", "ativo"),
                new Category("bebidas", "Bebidas", "Refrigerantes, agua e bebidas para acompanhar.", "ativo")
        ));

        products.addAll(List.of(
                product("frango", "Frango", "Espeto tradicional de frango temperado na brasa.", 7.50, "espetos-tradicionais", SKEWER_IMAGE),
                product("linguica", "Linguica", "Espeto de linguica suculenta assada na churrasqueira.", 7.50, "espetos-tradicionais", SKEWER_IMAGE),
                product("queijo-coalho", "Queijo Coalho", "Queijo coalho dourado, macio por dentro e crocante por fora.", 6.50, "espetos-tradicionais", SKEWER_IMAGE),
                product("carne", "Carne", "Espeto de carne com tempero da casa.", 8.00, "espetos-tradicionais", SKEWER_IMAGE),
                product("kafta", "Kafta", "Kafta artesanal com especiarias leves.", 8.00, "espetos-tradicionais", SKEWER_IMAGE),
                product("coracao", "Coracao", "Espeto de coracao bem temperado e assado no ponto.", 7.50, "espetos-tradicionais", SKEWER_IMAGE),
                product("vinagrete", "Vinagrete", "Acompanhamento fresco com tomate, cebola e temperos.", 3.00, "acompanhamento", SIDE_IMAGE),
                product("medalhao-frango", "Medalhao de Frango", "Frango envolto em bacon para um sabor mais marcante.", 9.00, "espetos-especiais", SPECIAL_IMAGE),
                product("panceta", "Panceta", "Panceta dourada, crocante e suculenta.", 8.90, "espetos-especiais", SPECIAL_IMAGE),
                product("tulipa", "Tulipa", "Tulipa temperada e assada na brasa.", 9.50, "espetos-especiais", SPECIAL_IMAGE),
                product("medalhao-kafta-queijo", "Medalhao de Kafta com Queijo", "Kafta especial com queijo e acabamento na brasa.", 10.90, "espetos-especiais", SPECIAL_IMAGE),
                product("kafta-recheada-3-queijos", "Kafta Recheada 3 Queijos", "Mussarela, provolone e catupiry.", 24.90, "kafta-recheada", KAFTA_IMAGE),
                product("pao-linguica-toscana", "Pao com Linguica Toscana", "Pao prensado com linguica toscana e sabor de boteco.", 10.50, "petisco-da-tenda", SNACK_IMAGE),
                product("coca-1l", "Coca-Cola 1 Litro", "Refrigerante gelado para compartilhar.", 9.00, "bebidas", DRINK_IMAGE),
                product("coca-lata", "Coca-Cola Lata", "Lata gelada de Coca-Cola tradicional.", 6.00, "bebidas", DRINK_IMAGE),
                product("guarana-lata", "Guarana Lata", "Lata gelada de guarana.", 6.00, "bebidas", DRINK_IMAGE),
                product("fanta-laranja-lata", "Fanta Laranja Lata", "Lata gelada sabor laranja.", 5.00, "bebidas", DRINK_IMAGE),
                product("agua-mineral", "Agua Mineral", "Agua mineral sem gas.", 4.00, "bebidas", DRINK_IMAGE),
                product("coca-lata-zero", "Coca-Cola Lata Zero", "Lata gelada sem acucar.", 6.00, "bebidas", DRINK_IMAGE),
                product("guarana-15l", "Guarana 1,5L", "Guarana gelado tamanho familia.", 8.00, "bebidas", DRINK_IMAGE)
        ));

        promotions.addAll(List.of(
                new Promotion("combo-espeto-bebida", "Combo Espeto + Bebida", "1 espeto de frango, carne ou linguica com 1 refrigerante lata.", "frango", 12.90, SPECIAL_IMAGE, "ativo"),
                new Promotion("combo-kafta-recheada", "Combo Kafta Recheada", "Kafta recheada 3 queijos com acompanhamento de vinagrete.", "kafta-recheada-3-queijos", 26.90, KAFTA_IMAGE, "ativo"),
                new Promotion("promocao-semana", "Promocao da Semana", "2 espetos tradicionais + 1 Coca-Cola lata.", "coca-lata", 19.90, DRINK_IMAGE, "ativo")
        ));

        orders.addAll(List.of(
                new Order("PED-001", "Mariana Souza", "2x Frango, 1x Coca-Cola Lata", 21.00, "retirada", "Caprichar no ponto dos espetos.", "Recebido"),
                new Order("PED-002", "Carlos Lima", "1x Kafta Recheada 3 Queijos, 1x Agua Mineral", 28.90, "entrega", "Rua das Flores, 55.", "Em preparo"),
                new Order("PED-003", "Ana Paula", "1x Pao com Linguica Toscana, 1x Guarana Lata", 16.50, "retirada", "Sem vinagrete.", "Pronto")
        ));
    }

    private Product product(String id, String name, String description, Double price, String categoryId, String image) {
        return new Product(id, name, description, price, categoryId, image, "ativo");
    }

    public BusinessConfig getBusinessConfig() {
        return businessConfig;
    }

    public List<Product> getProducts() {
        return sortedCopy(products);
    }

    public Product createProduct(Product product) {
        product.setId(resolveId(product.getId(), product.getName(), products.stream().map(Product::getId).toList()));
        products.add(product);
        return product;
    }

    public Product updateProduct(String id, Product product) {
        Product current = findProduct(id);
        current.setName(product.getName());
        current.setDescription(product.getDescription());
        current.setPrice(product.getPrice());
        current.setCategoryId(product.getCategoryId());
        current.setImage(product.getImage());
        current.setStatus(product.getStatus());
        return current;
    }

    public void deleteProduct(String id) {
        products.removeIf(product -> Objects.equals(product.getId(), id));
    }

    public List<Category> getCategories() {
        return sortedCopy(categories);
    }

    public Category createCategory(Category category) {
        category.setId(resolveId(category.getId(), category.getName(), categories.stream().map(Category::getId).toList()));
        categories.add(category);
        return category;
    }

    public Category updateCategory(String id, Category category) {
        Category current = findCategory(id);
        current.setName(category.getName());
        current.setDescription(category.getDescription());
        current.setStatus(category.getStatus());
        return current;
    }

    public void deleteCategory(String id) {
        categories.removeIf(category -> Objects.equals(category.getId(), id));
    }

    public List<Promotion> getPromotions() {
        return sortedCopy(promotions);
    }

    public Promotion createPromotion(Promotion promotion) {
        promotion.setId(resolveId(promotion.getId(), promotion.getTitle(), promotions.stream().map(Promotion::getId).toList()));
        promotions.add(promotion);
        return promotion;
    }

    public Promotion updatePromotion(String id, Promotion promotion) {
        Promotion current = findPromotion(id);
        current.setTitle(promotion.getTitle());
        current.setDescription(promotion.getDescription());
        current.setProductId(promotion.getProductId());
        current.setPrice(promotion.getPrice());
        current.setImage(promotion.getImage());
        current.setStatus(promotion.getStatus());
        return current;
    }

    public void deletePromotion(String id) {
        promotions.removeIf(promotion -> Objects.equals(promotion.getId(), id));
    }

    public List<Order> getOrders() {
        return sortedCopy(orders);
    }

    public Order createOrder(Order order) {
        order.setId("PED-" + String.format("%03d", orders.size() + 1));
        orders.add(order);
        return order;
    }

    public Order updateOrderStatus(String id, String status) {
        Order order = findOrder(id);
        order.setStatus(status);
        return order;
    }

    private Product findProduct(String id) {
        return products.stream().filter(product -> Objects.equals(product.getId(), id)).findFirst()
                .orElseThrow(() -> new NoSuchElementException("Produto nao encontrado"));
    }

    private Category findCategory(String id) {
        return categories.stream().filter(category -> Objects.equals(category.getId(), id)).findFirst()
                .orElseThrow(() -> new NoSuchElementException("Categoria nao encontrada"));
    }

    private Promotion findPromotion(String id) {
        return promotions.stream().filter(promotion -> Objects.equals(promotion.getId(), id)).findFirst()
                .orElseThrow(() -> new NoSuchElementException("Promocao nao encontrada"));
    }

    private Order findOrder(String id) {
        return orders.stream().filter(order -> Objects.equals(order.getId(), id)).findFirst()
                .orElseThrow(() -> new NoSuchElementException("Pedido nao encontrado"));
    }

    private String resolveId(String requestedId, String label, List<String> existingIds) {
        String baseId = requestedId == null || requestedId.isBlank() ? SlugUtil.slugify(label) : SlugUtil.slugify(requestedId);
        String candidate = baseId;
        int index = 2;
        while (existingIds.contains(candidate)) {
            candidate = baseId + "-" + index;
            index++;
        }
        return candidate;
    }

    private <T> List<T> sortedCopy(List<T> source) {
        List<T> copy = new ArrayList<>(source);
        copy.sort(Comparator.comparing(item -> {
            if (item instanceof Product product) return product.getName();
            if (item instanceof Category category) return category.getName();
            if (item instanceof Promotion promotion) return promotion.getTitle();
            if (item instanceof Order order) return order.getId();
            return "";
        }));
        return copy;
    }
}
