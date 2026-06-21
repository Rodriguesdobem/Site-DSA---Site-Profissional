package br.com.tendadoozi.backend.model;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class Promotion {
    private String id;

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotBlank
    private String productId;

    @NotNull
    @Min(0)
    private Double price;

    private String image;
    private String status = "ativo";

    public Promotion() {
    }

    public Promotion(String id, String title, String description, String productId, Double price, String image, String status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.productId = productId;
        this.price = price;
        this.image = image;
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
