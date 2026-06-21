package br.com.tendadoozi.backend.model;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class Order {
    private String id;

    @NotBlank
    private String customerName;

    @NotBlank
    private String items;

    @NotNull
    @Min(0)
    private Double total;

    @NotBlank
    private String type;

    private String note;
    private String status = "Recebido";

    public Order() {
    }

    public Order(String id, String customerName, String items, Double total, String type, String note, String status) {
        this.id = id;
        this.customerName = customerName;
        this.items = items;
        this.total = total;
        this.type = type;
        this.note = note;
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getItems() {
        return items;
    }

    public void setItems(String items) {
        this.items = items;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
