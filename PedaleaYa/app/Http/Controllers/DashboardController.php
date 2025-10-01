<?php

namespace App\Http\Controllers;

use App\Models\Bici;
use App\Models\Alquiler;
use App\Models\Evento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * Muestra estadísticas generales del sistema
     */
    public function index(Request $request)
    {
        $usuario = $request->user();

        // Estadísticas generales
        $totalBicis = Bici::count();
        $bicisDisponibles = Bici::where('estado', 'Disponible')->count();
        $bicisAlquiladas = Bici::where('estado', 'Alquilada')->count();

        // Eventos próximos
        $eventos = Evento::where('fecha_evento', '>=', now())
            ->orderBy('fecha_evento', 'asc')
            ->take(5)
            ->get();

        $data = [
            'usuario' => $usuario->nombre,
            'rol' => $usuario->rol->nombre,
            'total_bicis' => $totalBicis,
            'bicis_disponibles' => $bicisDisponibles,
            'bicis_alquiladas' => $bicisAlquiladas,
            'eventos_proximos' => $eventos,
        ];

        // Si es administrador, agregamos métricas adicionales
        if ($usuario->rol->nombre === 'Admin') {
            $gananciasMes = Alquiler::whereMonth('fecha_fin', now()->month)
                ->sum('total_pagar');

            $data['ganancias_mes'] = $gananciasMes;
            $data['usuarios_activos'] = DB::table('usuarios')->where('activo', true)->count();
        }

        return response()->json($data);
    }
}
