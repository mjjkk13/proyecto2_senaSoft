<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;

class PasswordController extends Controller
{
    // Solicitar recuperación de contraseña
    public function forgot(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $usuario = Usuario::where('email', $request->email)->first();
        if (!$usuario) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        $token = Str::random(60);

        DB::table('password_reset_tokens')->updateOrInsert(
            ['email' => $usuario->email],
            ['token' => Hash::make($token), 'created_at' => now()]
        );

        // Enviar correo con el token
        Mail::raw("Tu token de recuperación es: $token", function ($message) use ($usuario) {
            $message->to($usuario->email)->subject('Recuperación de contraseña');
        });

        return response()->json(['mensaje' => 'Se ha enviado un correo con el token de recuperación']);
    }

    // Restablecer contraseña con token
    public function reset(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'token' => 'required|string',
            'password' => 'required|min:6|confirmed',
        ]);

        $record = DB::table('password_reset_tokens')->where('email', $request->email)->first();

        if (!$record || !Hash::check($request->token, $record->token)) {
            return response()->json(['error' => 'Token inválido o expirado'], 400);
        }

        $usuario = Usuario::where('email', $request->email)->first();
        $usuario->update(['password' => Hash::make($request->password)]);

        DB::table('password_reset_tokens')->where('email', $request->email)->delete();

        return response()->json(['mensaje' => 'Contraseña restablecida correctamente']);
    }

    // Cambiar contraseña (usuario autenticado)
    public function change(Request $request)
    {
        $request->validate([
            'contrasena_actual' => 'required',
            'nueva_contrasena' => 'required|min:6|confirmed',
        ]);

        $usuario = $request->user();

        if (!Hash::check($request->contrasena_actual, $usuario->password)) {
            return response()->json(['error' => 'La contraseña actual es incorrecta'], 400);
        }

        $usuario->update(['password' => Hash::make($request->nueva_contrasena)]);

        return response()->json(['mensaje' => 'Contraseña actualizada con éxito']);
    }
}
