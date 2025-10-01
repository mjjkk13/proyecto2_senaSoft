<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PasswordController;

// Página inicial (ejemplo)
Route::get('/', function () {
    return Inertia::render('welcome', [
        'titulo' => 'PedaleaYa',
    ]);
});
Route::get('/tarifas', [\App\Http\Controllers\TarifaController::class, 'index'])
    ->name('tarifas.index');

// ======================
// RUTAS DE AUTENTICACIÓN
// ======================

// Registro
Route::get('/registro', function () {
    return Inertia::render('auth/registro');
})->name('registro');

Route::post('/registro', [AuthController::class, 'register'])->name('registro.store');

// Ingreso
Route::get('/ingreso', function () {
    return Inertia::render('auth/ingreso');
})->name('ingreso');

Route::post('/ingreso', [AuthController::class, 'login'])->name('ingreso.store');

// Recuperar contraseña
Route::get('/olvide-contrasena', function () {
    return Inertia::render('auth/olvide-contrasena');
})->name('contrasena.request');

Route::post('/olvide-contrasena', [PasswordController::class, 'forgot'])->name('contrasena.email');

// Resetear contraseña
Route::get('/restablecer-contrasena/{token}', function ($token) {
    return Inertia::render('Auth/RestablecerContrasena', [
        'token' => $token,
    ]);
})->name('contrasena.reset');

Route::post('/restablecer-contrasena', [PasswordController::class, 'reset'])->name('contrasena.store');

// ======================
// RUTAS PROTEGIDAS (requiere login)
// ======================
Route::middleware(['auth', 'verified'])->group(function () {
    
    // Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Perfil
    Route::get('/perfil', function () {
        return Inertia::render('Auth/Perfil');
    })->name('perfil');

    // Cerrar sesión
    Route::post('/salir', [AuthController::class, 'logout'])->name('salir');

    // Cambiar contraseña
    Route::post('/cambiar-contrasena', [PasswordController::class, 'change'])->name('contrasena.cambiar');
});



require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
