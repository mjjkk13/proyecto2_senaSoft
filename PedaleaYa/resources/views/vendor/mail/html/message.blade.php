<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restablecimiento de contraseña</title>
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background-color: #f4f7fb;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .email-wrapper {
            width: 100%;
            padding: 40px 0;
        }
        .email-content {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: #2563eb;
            padding: 20px;
            text-align: center;
        }
        .header img {
            height: 50px;
        }
        .body {
            padding: 30px;
            text-align: center;
        }
        .body h1 {
            color: #111827;
            font-size: 22px;
        }
        .body p {
            color: #4b5563;
            font-size: 15px;
            line-height: 1.6;
            margin: 15px 0;
        }
        .button {
            display: inline-block;
            background: #16a34a;
            color: #fff;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: bold;
            text-decoration: none;
            margin: 20px 0;
            transition: background 0.3s ease;
        }
        .button:hover {
            background: #15803d;
        }
        .footer {
            background: #111827;
            color: #9ca3af;
            font-size: 13px;
            text-align: center;
            padding: 15px;
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <div class="email-content">
            <div class="header">
                <img src="https://tu-dominio.com/logo.png" alt="PedaleaYa">
            </div>
            <div class="body">
                <h1>Restablecimiento de contraseña</h1>
                <p>Hola,</p>
                <p>Recibiste este correo porque solicitaste restablecer tu contraseña en <strong>PedaleaYa</strong>.</p>
                <a href="{{ $resetUrl }}" class="button">Restablecer contraseña</a>
                <p>Este enlace expirará en 60 minutos.<br>
                Si no solicitaste este cambio, ignora este correo.</p>
                <p>Gracias,<br>El equipo de <strong>PedaleaYa</strong></p>
            </div>
            <div class="footer">
                © {{ date('Y') }} PedaleaYa. Todos los derechos reservados.
            </div>
        </div>
    </div>
</body>
</html>
