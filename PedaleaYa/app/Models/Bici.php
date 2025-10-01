<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bici extends Model
{
    use HasFactory;

    protected $table = 'bicis';
    protected $primaryKey = 'bicicleta_id';
    public $timestamps = false;

    protected $fillable = [
        'marca',
        'color',
        'estado',
        'precio_alquiler',
    ];

    public function alquileres()
    {
        return $this->hasMany(Alquiler::class, 'bicicleta_id', 'bicicleta_id');
    }
}
