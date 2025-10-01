<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alquiler extends Model
{
    use HasFactory;

    protected $table = 'alquiler';
    protected $primaryKey = 'alquiler_id';
    public $timestamps = false;

    protected $fillable = [
        'usuario_id',
        'bicicleta_id',
        'fecha_inicio',
        'fecha_fin',
        'tarifa_base',
        'descuento',
        'tarifa_extra',
        'total_pagar',
    ];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id', 'usuario_id');
    }

    public function bici()
    {
        return $this->belongsTo(Bici::class, 'bicicleta_id', 'bicicleta_id');
    }
}
