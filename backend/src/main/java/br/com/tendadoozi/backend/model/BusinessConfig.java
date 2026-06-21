package br.com.tendadoozi.backend.model;

public class BusinessConfig {
    private String name;
    private String tagline;
    private Double minimumOrder;
    private String whatsappNumber;
    private String address;
    private String hours;
    private String googleMapsUrl;
    private String instagramUrl;
    private String facebookUrl;
    private String paymentNote;

    public BusinessConfig() {
    }

    public BusinessConfig(String name, String tagline, Double minimumOrder, String whatsappNumber, String address, String hours, String googleMapsUrl, String instagramUrl, String facebookUrl, String paymentNote) {
        this.name = name;
        this.tagline = tagline;
        this.minimumOrder = minimumOrder;
        this.whatsappNumber = whatsappNumber;
        this.address = address;
        this.hours = hours;
        this.googleMapsUrl = googleMapsUrl;
        this.instagramUrl = instagramUrl;
        this.facebookUrl = facebookUrl;
        this.paymentNote = paymentNote;
    }

    public String getName() {
        return name;
    }

    public String getTagline() {
        return tagline;
    }

    public Double getMinimumOrder() {
        return minimumOrder;
    }

    public String getWhatsappNumber() {
        return whatsappNumber;
    }

    public String getAddress() {
        return address;
    }

    public String getHours() {
        return hours;
    }

    public String getGoogleMapsUrl() {
        return googleMapsUrl;
    }

    public String getInstagramUrl() {
        return instagramUrl;
    }

    public String getFacebookUrl() {
        return facebookUrl;
    }

    public String getPaymentNote() {
        return paymentNote;
    }
}
