package br.com.tendadoozi.backend.controller;

import br.com.tendadoozi.backend.dto.LoginRequest;
import br.com.tendadoozi.backend.dto.LoginResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        boolean validCredentials = "admin".equals(request.username()) && "admin123".equals(request.password());
        if (!validCredentials) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponse(false, "Usuario ou senha invalidos."));
        }
        return ResponseEntity.ok(new LoginResponse(true, "Login realizado com sucesso."));
    }
}
