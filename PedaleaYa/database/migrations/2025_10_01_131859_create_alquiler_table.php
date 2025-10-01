<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('alquiler', function (Blueprint $table) {
            $table->id('alquiler_id');

            $table->unsignedBigInteger('usuario_id');
            $table->unsignedBigInteger('bicicleta_id');

            $table->dateTime('fecha_inicio');
            $table->dateTime('fecha_fin')->nullable();
            $table->decimal('tarifa_base', 10, 2)->nullable();
            $table->decimal('descuento', 10, 2)->nullable();
            $table->decimal('tarifa_extra', 10, 2)->nullable();
            $table->decimal('total_pagar', 10, 2)->nullable();

            // Relaciones
            $table->foreign('usuario_id')
                  ->references('usuario_id')
                  ->on('usuarios')
                  ->cascadeOnDelete();

            $table->foreign('bicicleta_id')
                  ->references('bicicleta_id')
                  ->on('bicis')
                  ->cascadeOnDelete();
        });
    }

    public function down(): void {
        Schema::dropIfExists('alquiler');
    }
};
