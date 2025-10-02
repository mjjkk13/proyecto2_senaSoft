<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable; // Necesario para login/logout/reset
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Notifications\ResetPasswordNotification;

class Usuario extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }
    protected $table = 'usuarios';
    protected $primaryKey = 'usuario_id';
    public $timestamps = false; // si tu tabla no tiene created_at / updated_at

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
        'remember_token', // 👈 agrega esto si tu tabla lo tiene
    ];

    /**
     * Relaciones
     */
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
