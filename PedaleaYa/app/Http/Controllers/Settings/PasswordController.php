<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller
{
    public function forgot(Request $request)
    {
        // Validar que el email exista en tu tabla "usuarios"
        $request->validate([
            'email' => ['required', 'email', 'exists:usuarios,email'],
        ], [
            'email.exists' => 'El correo ingresado no está registrado en el sistema.',
        ]);

        // Usar el broker de contraseñas configurado para "usuarios"
        $status = Password::broker('usuarios')->sendResetLink(
            $request->only('email')
        );

        if ($status === Password::RESET_LINK_SENT) {
            // Devuelve respuesta compatible con Inertia
            return back()->with('success', __($status));
        }

        return back()->withErrors(['email' => __($status)]);
    }
    public function reset(Request $request)
    {
        $request->validate([
            'token'    => ['required'],
            'email'    => ['required', 'email', 'exists:usuarios,email'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ], [
            'email.exists' => 'El correo ingresado no está registrado en el sistema.',
            'password.confirmed' => 'La confirmación de la contraseña no coincide.',
        ]);

        $status = Password::broker('usuarios')->reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($usuario, $password) {
                $usuario->forceFill([
                    'password' => Hash::make($password),
                ])->save();
            }
        );

        return $status === Password::PASSWORD_RESET
            ? redirect()->route('ingreso')->with('success', __($status))
            : back()->withErrors(['email' => __($status)]);
    }
    /**
     * Actualizar la contraseña del usuario autenticado.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'], 
            'password' => ['required', Password::defaults(), 'confirmed'],
        ], [
            'current_password.required' => 'La contraseña actual es obligatoria.',
            'current_password.current_password' => 'La contraseña actual es incorrecta.',
            'password.required' => 'La nueva contraseña es obligatoria.',
            'password.confirmed' => 'La confirmación de la contraseña no coincide.',
        ]);

        // Usuario autenticado
        $usuario = $request->user();

        $usuario->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back()->with('success', 'Contraseña actualizada correctamente.');
    }
}
