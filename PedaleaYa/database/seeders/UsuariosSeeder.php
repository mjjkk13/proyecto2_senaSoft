<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\PersonalAccessToken;

class UsuariosSeeder extends Seeder
{
    public function run(): void
    {
        // Buscar el rol Admin
        $rolId = DB::table('roles')->where('nombre', 'Admin')->value('rol_id');

        // Crear usuario admin si no existe
        $usuarioId = DB::table('usuarios')->insertGetId([
            'nombre' => 'Mariana',
            'email' => 'marianajimenezv2006@gmail.com',
            'password' => Hash::make('mariana2018_'),
            'rol_id' => $rolId,
            'activo' => true,
        ]);

        // Crear token de acceso para este usuario
        $token = DB::table('personal_access_tokens')->insertGetId([
            'tokenable_type' => 'App\\Models\\Usuario',
            'tokenable_id'   => $usuarioId,
            'name'           => 'admin-token',
            'token'          => hash('sha256', $plainTextToken = bin2hex(random_bytes(32))),
            'abilities'      => '["*"]',
            'created_at'     => now(),
            'updated_at'     => now(),
        ]);

        // Mostrar el token en consola
        echo "==============================\n";
        echo " Usuario Admin creado\n";
        echo " Email: marianajimenezv2006@gmail.com\n";
        echo " Password: mariana2018_\n";
        echo " Token: $plainTextToken\n";
        echo "==============================\n";
    }
}
