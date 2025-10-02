<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Settings\PasswordController;
use Illuminate\Http\Request;

// Página inicial (ejemplo)
Route::get('/', function () {
    return Inertia::render('welcome', [
        'titulo' => 'PedaleaYa',
    ]);
});
Route::get('/tarifas', [\App\Http\Controllers\TarifaController::class, 'index'])
    ->name('tarifas.index');
Route::get('/eventos', [\App\Http\Controllers\EventoController::class, 'index'])
    ->name('eventos.index');
// ======================
// RUTAS DE AUTENTICACIÓN
// ======================

// Registro
Route::get('/registro', fn () => Inertia::render('auth/registro'))->name('registro');
Route::post('/registro', [AuthController::class, 'register'])->name('registro.store');

// Ingreso
Route::get('/ingreso', fn () => Inertia::render('auth/ingreso'))->name('ingreso');
Route::post('/ingreso', [AuthController::class, 'login'])->name('ingreso.store');

// Recuperar contraseña (solicitar link)
Route::get('/olvide-contrasena', fn () => Inertia::render('auth/olvide-contrasena'))
    ->name('contrasena.request');
Route::post('/olvide-contrasena', [PasswordController::class, 'forgot'])
    ->name('contrasena.email');

// Restablecer contraseña (formulario con token)
Route::get('/restablecer-contrasena/{token}', function (Request $request, $token) {
    return Inertia::render('auth/restablecer-contrasena', [
        'token' => $token,
        'email' => $request->query('email'),
    ]);
})->name('password.reset');

// Guardar nueva contraseña
Route::post('/restablecer-contrasena', [PasswordController::class, 'reset'])
    ->name('contrasena.store');

// ======================
// RUTAS PROTEGIDAS (requiere login)
// ======================
Route::middleware(['auth', 'verified'])->group(function () {
    
    // Dashboard
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');

    // Perfil
    Route::get('/perfil', fn () => Inertia::render('Auth/Perfil'))->name('perfil');

    // Cerrar sesión
    Route::post('/salir', [AuthController::class, 'logout'])->name('salir');

    // Cambiar contraseña (usuario autenticado)
    Route::post('/cambiar-contrasena', [PasswordController::class, 'update'])
        ->name('contrasena.cambiar');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
