package br.com.tendadoozi.backend.dto;

public record LoginResponse(boolean authenticated, String message) {
}
