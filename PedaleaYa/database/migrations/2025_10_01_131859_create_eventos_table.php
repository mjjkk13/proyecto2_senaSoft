<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('eventos', function (Blueprint $table) {
            $table->id('evento_id');
            $table->string('titulo', 150);
            $table->text('descripcion')->nullable();
            $table->dateTime('fecha_evento');
            $table->string('lugar', 150)->nullable();

            // Relación con usuarios
            $table->foreignId('creado_por')
                  ->constrained('usuarios', 'usuario_id')
                  ->onDelete('cascade'); // si borran el usuario, se borran sus eventos

            // Buenas prácticas → timestamps
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('eventos');
    }
};
