<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password; // broker
use Illuminate\Validation\Rules\Password as PasswordRule; // reglas

class PasswordController extends Controller
{
    public function forgot(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'exists:usuarios,email'],
        ], [
            'email.exists' => 'El correo ingresado no está registrado en el sistema.',
        ]);

        $status = Password::broker('usuarios')->sendResetLink(
            $request->only('email')
        );

        return $status === Password::RESET_LINK_SENT
            ? back()->with('success', __($status))
            : back()->withErrors(['email' => __($status)]);
    }

    public function reset(Request $request)
    {
        $request->validate([
            'token'    => ['required'],
            'email'    => ['required', 'email', 'exists:usuarios,email'],
            'password' => ['required', 'confirmed', PasswordRule::defaults()],
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

    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', PasswordRule::defaults(), 'confirmed'],
        ], [
            'current_password.required' => 'La contraseña actual es obligatoria.',
            'current_password.current_password' => 'La contraseña actual es incorrecta.',
            'password.required' => 'La nueva contraseña es obligatoria.',
            'password.confirmed' => 'La confirmación de la contraseña no coincide.',
        ]);

        $usuario = $request->user();

        $usuario->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back()->with('success', 'Contraseña actualizada correctamente.');
    }
    public function showResetForm(Request $request, $token)
    {
        return inertia('auth/restablecer-contrasena', [
            'token' => $token,
            'email' => $request->query('email'),
        ]);
    }

}
