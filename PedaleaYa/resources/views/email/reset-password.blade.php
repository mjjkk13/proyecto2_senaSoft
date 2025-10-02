@component('mail::message')
# Restablecimiento de contraseña

Hola {{ $usuario->nombre }},

Has solicitado restablecer tu contraseña en **PedaleaYa**.

@component('mail::button', ['url' => $resetUrl])
Restablecer contraseña
@endcomponent

Este enlace expirará en 60 minutos.  
Si no solicitaste este cambio, ignora este correo.

Gracias,  
El equipo de **PedaleaYa**
@endcomponent
