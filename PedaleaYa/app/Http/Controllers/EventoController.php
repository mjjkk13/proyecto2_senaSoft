<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;



class EventoController extends Controller
{
    /**
     * Mostrar todos los eventos (vista con Inertia).
     */
    public function index()
    {
        $eventos = Evento::with('creador')->latest()->get();

        return Inertia::render('eventos/index', [
            'eventos' => $eventos
        ]);
    }

    /**
     * Mostrar formulario de creación.
     */
    public function create()
    {
        return Inertia::render('eventos/create');
    }

    /**
     * Guardar un nuevo evento.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'titulo' => 'required|string|max:150',
            'descripcion' => 'nullable|string',
            'fecha_evento' => 'required|date',
            'lugar' => 'nullable|string|max:150',
        ]);
        
        $usuario = Auth::guard()->user(); 

        Evento::create([
            ...$validated,
            'creado_por' => $usuario->usuario_id,
        ]);

        return redirect()->route('eventos.index')->with('success', 'Evento creado correctamente');
    }

    /**
     * Mostrar detalle de un evento.
     */
    public function show(Evento $evento)
    {
        return Inertia::render('eventos/show', [
            'evento' => $evento->load('creador')
        ]);
    }

    /**
     * Mostrar formulario de edición.
     */
    public function edit(Evento $evento)
    {
        return Inertia::render('eventos/edit', [
            'evento' => $evento
        ]);
    }

    /**
     * Actualizar evento.
     */
    public function update(Request $request, Evento $evento)
    {
        $validated = $request->validate([
            'titulo' => 'required|string|max:150',
            'descripcion' => 'nullable|string',
            'fecha_evento' => 'required|date',
            'lugar' => 'nullable|string|max:150',
        ]);

        $evento->update($validated);

        return redirect()->route('eventos.index')->with('success', 'Evento actualizado correctamente');
    }

    /**
     * Eliminar evento.
     */
    public function destroy(Evento $evento)
    {
        $evento->delete();

        return redirect()->route('eventos.index')->with('success', 'Evento eliminado correctamente');
    }
}
