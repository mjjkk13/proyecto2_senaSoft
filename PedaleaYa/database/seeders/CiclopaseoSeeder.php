<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CiclopaseoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('eventos')->insert([
            [
                'titulo' => 'Ciclopaseo Semanal',
                'descripcion' => 'Recorridos guiados por la ciudad todos los domingos a las 7:00 AM.',
                'fecha_evento' => Carbon::now()->addDays(7),
                'lugar' => 'Parque Simón Bolívar, Bogotá',
                'creado_por' => 1, // 👈 asegúrate de que exista un usuario con usuario_id = 1
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'titulo' => 'Día Mundial de la Bicicleta',
                'descripcion' => 'Gran ciclopaseo conmemorativo organizado por el SENA.',
                'fecha_evento' => Carbon::now()->addMonths(1),
                'lugar' => 'Calle 26, Bogotá',
                'creado_por' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'titulo' => 'Ciclopaseo Nocturno',
                'descripcion' => 'Un recorrido nocturno seguro y divertido por las principales vías de la ciudad.',
                'fecha_evento' => Carbon::now()->addWeeks(2),
                'lugar' => 'Ciclovía Central, Medellín',
                'creado_por' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
