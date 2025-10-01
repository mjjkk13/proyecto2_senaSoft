<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Usuario;
class Evento extends Model
{
    use HasFactory;

    protected $primaryKey = 'evento_id';

    protected $fillable = [
        'titulo',
        'descripcion',
        'fecha_evento',
        'lugar',
        'creado_por'
    ];

    public function creador()
    {
        return $this->belongsTo(Usuario::class, 'creado_por', 'usuario_id');
    }
}
