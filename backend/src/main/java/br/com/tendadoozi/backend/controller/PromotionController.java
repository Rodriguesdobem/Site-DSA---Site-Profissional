package br.com.tendadoozi.backend.controller;

import br.com.tendadoozi.backend.model.Promotion;
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
@RequestMapping("/api/promotions")
public class PromotionController {
    private final InMemoryDataService service;

    public PromotionController(InMemoryDataService service) {
        this.service = service;
    }

    @GetMapping
    public List<Promotion> list() {
        return service.getPromotions();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Promotion create(@Valid @RequestBody Promotion promotion) {
        return service.createPromotion(promotion);
    }

    @PutMapping("/{id}")
    public Promotion update(@PathVariable String id, @Valid @RequestBody Promotion promotion) {
        return service.updatePromotion(id, promotion);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        service.deletePromotion(id);
    }
}
