package br.com.tendadoozi.backend.controller;

import br.com.tendadoozi.backend.model.Product;
import br.com.tendadoozi.backend.service.InMemoryDataService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final InMemoryDataService service;

    public ProductController(InMemoryDataService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> list() {
        return service.getProducts();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Product create(@Valid @RequestBody Product product) {
        return service.createProduct(product);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable String id, @Valid @RequestBody Product product) {
        return service.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        service.deleteProduct(id);
    }
}
