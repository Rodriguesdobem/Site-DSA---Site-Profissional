package br.com.tendadoozi.backend.controller;

import br.com.tendadoozi.backend.model.BusinessConfig;
import br.com.tendadoozi.backend.service.InMemoryDataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/business")
public class BusinessController {
    private final InMemoryDataService service;

    public BusinessController(InMemoryDataService service) {
        this.service = service;
    }

    @GetMapping
    public BusinessConfig getBusinessConfig() {
        return service.getBusinessConfig();
    }
}
