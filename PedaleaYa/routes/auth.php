<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PasswordController;

// ==================
// RUTAS PÚBLICAS
// ==================

// Registro
Route::post('/registro', [AuthController::class, 'register'])->name('registro');

// Login
Route::post('/ingreso', [AuthController::class, 'login'])->name('ingreso');

// Recuperar contraseña (solicitud de token por correo)
Route::post('/olvide-contrasena', [PasswordController::class, 'forgot'])->name('contrasena.solicitar');

// Resetear contraseña (con token)
Route::post('/restablecer-contrasena', [PasswordController::class, 'reset'])->name('contrasena.restablecer');

// ==================
// RUTAS PROTEGIDAS (requiere token Sanctum)
// ==================
Route::middleware('auth:sanctum')->group(function () {

    // Perfil
    Route::get('/perfil', [AuthController::class, 'me'])->name('perfil');

    // Cerrar sesión
    Route::post('/salir', [AuthController::class, 'logout'])->name('salir');

    // Cambiar contraseña (autenticado)
    Route::post('/cambiar-contrasena', [PasswordController::class, 'change'])->name('contrasena.cambiar');
});
