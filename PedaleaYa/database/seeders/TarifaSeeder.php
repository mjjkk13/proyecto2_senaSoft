<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tarifa;

class TarifaSeeder extends Seeder
{
    public function run(): void
    {
        Tarifa::create([
            'nombre' => 'Por Hora',
            'precio' => 2000,
            'descripcion' => 'Ideal para trayectos cortos',
            'beneficios' => [
                'Cálculo automático del tiempo',
                'Pago al finalizar el recorrido'
            ],
        ]);

        Tarifa::create([
            'nombre' => 'Por Día',
            'precio' => 8000,
            'descripcion' => 'Perfecto para todo el día',
            'beneficios' => [
                'Uso ilimitado durante 24h',
                'Incluye seguro básico'
            ],
        ]);

        Tarifa::create([
            'nombre' => 'Semanal',
            'precio' => 25000,
            'descripcion' => 'La mejor opción para uso frecuente',
            'beneficios' => [
                'Acceso ilimitado toda la semana',
                'Descuentos en eventos de ciclopaseo'
            ],
        ]);
    }
}
