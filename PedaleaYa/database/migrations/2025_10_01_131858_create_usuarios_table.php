<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id('usuario_id');
            $table->string('nombre', 100);
            $table->string('email', 100)->unique();
            $table->string('password');
            $table->tinyInteger('estrato')->nullable();
            $table->foreignId('rol_id')->constrained('roles', 'rol_id');
            $table->dateTime('fecha_registro')->useCurrent();
            $table->boolean('activo')->default(true);
        });
    }

    public function down(): void {
        Schema::dropIfExists('usuarios');
    }
};
