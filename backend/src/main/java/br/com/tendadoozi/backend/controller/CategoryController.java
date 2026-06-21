package br.com.tendadoozi.backend.controller;

import br.com.tendadoozi.backend.model.Category;
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
@RequestMapping("/api/categories")
public class CategoryController {
    private final InMemoryDataService service;

    public CategoryController(InMemoryDataService service) {
        this.service = service;
    }

    @GetMapping
    public List<Category> list() {
        return service.getCategories();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Category create(@Valid @RequestBody Category category) {
        return service.createCategory(category);
    }

    @PutMapping("/{id}")
    public Category update(@PathVariable String id, @Valid @RequestBody Category category) {
        return service.updateCategory(id, category);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        service.deleteCategory(id);
    }
}
