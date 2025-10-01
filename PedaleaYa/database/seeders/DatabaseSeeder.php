<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Ejecutar seeders personalizados
        $this->call([
            RolesSeeder::class,
            UsuariosSeeder::class,
            TarifaSeeder::class,
            CiclopaseoSeeder::class,
        ]);
    }
}
