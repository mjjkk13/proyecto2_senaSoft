<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('tarifas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre'); // Ej: "Por Hora", "Por Día", "Semanal"
            $table->decimal('precio', 10, 2);
            $table->string('descripcion')->nullable(); // Ej: "Uso ilimitado durante 24h"
            $table->json('beneficios')->nullable(); // Lista de beneficios en JSON
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('tarifas');
    }
};
