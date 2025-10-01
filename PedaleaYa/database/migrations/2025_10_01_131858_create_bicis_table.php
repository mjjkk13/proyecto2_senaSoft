<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('bicis', function (Blueprint $table) {
            $table->id('bicicleta_id');
            $table->string('marca', 100);
            $table->string('color', 50);
            $table->enum('estado', ['Disponible','Alquilada','Mantenimiento'])->default('Disponible');
            $table->decimal('precio_alquiler', 10, 2);
        });
    }

    public function down(): void {
        Schema::dropIfExists('bicis');
    }
};
