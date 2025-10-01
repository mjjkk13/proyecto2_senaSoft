<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParticipanteEvento extends Model
{
    use HasFactory;

    protected $table = 'participantes_evento';
    protected $primaryKey = 'participante_id';
    public $timestamps = false;

    protected $fillable = [
        'evento_id',
        'usuario_id',
    ];

    public function evento()
    {
        return $this->belongsTo(Evento::class, 'evento_id', 'evento_id');
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id', 'usuario_id');
    }
}
