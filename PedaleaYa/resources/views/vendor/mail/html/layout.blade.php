<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Nunito', sans-serif; background: #f9fafb; color: #111827; }
        .header { background: #2563eb; color: #fff; padding: 20px; text-align: center; }
        .footer { background: #111827; color: #fff; padding: 10px; text-align: center; font-size: 12px; }
        a.button { background: #16a34a; color: #fff !important; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚴 PedaleaYa</h1>
    </div>

    <!-- Contenido principal -->
    <div style="max-width: 600px; margin: 20px auto; padding: 20px; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        {{ $slot }}
    </div>

    <div class="footer">
        © {{ date('Y') }} PedaleaYa. Todos los derechos reservados.
    </div>
</body>
</html>
