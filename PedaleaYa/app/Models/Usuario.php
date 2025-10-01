<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable; // Importante: para que funcione Auth
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'usuarios';
    protected $primaryKey = 'usuario_id';
    public $timestamps = false; // tu tabla no usa created_at / updated_at

    protected $fillable = [
        'nombre',
        'email',
        'password',
        'estrato',
        'rol_id',
        'fecha_registro',
        'activo',
    ];

    protected $hidden = [
        'password',
    ];

    // RELACIONES
    public function rol()
    {
        return $this->belongsTo(Rol::class, 'rol_id', 'rol_id');
    }

    public function alquileres()
    {
        return $this->hasMany(Alquiler::class, 'usuario_id', 'usuario_id');
    }

    public function eventosCreados()
    {
        return $this->hasMany(Evento::class, 'creado_por', 'usuario_id');
    }

    public function eventosParticipa()
    {
        return $this->belongsToMany(Evento::class, 'participantes_evento', 'usuario_id', 'evento_id');
    }
}
