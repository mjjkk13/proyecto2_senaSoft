<?php

namespace App\Http\Controllers;

use App\Models\Tarifa;
use Inertia\Inertia;

class TarifaController extends Controller
{
    public function index()
    {
        $tarifas = Tarifa::all();
        return Inertia::render('tarifas', [
            'tarifas' => $tarifas
        ]);
    }
}
