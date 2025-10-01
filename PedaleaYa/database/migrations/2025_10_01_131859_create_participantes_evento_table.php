<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('participantes_evento', function (Blueprint $table) {
            $table->id('participante_id');
            $table->foreignId('evento_id')->constrained('eventos', 'evento_id');
            $table->foreignId('usuario_id')->constrained('usuarios', 'usuario_id');
        });
    }

    public function down(): void {
        Schema::dropIfExists('participantes_evento');
    }
};
