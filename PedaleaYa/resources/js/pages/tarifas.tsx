import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faShieldAlt, faMoneyBillWave, faBicycle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

interface Tarifa {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  beneficios: string[];
  color: string;
}

export default function Tarifas({ tarifas }: { tarifas: Tarifa[] }) {
  const colorMap: Record<string, string> = {
    green: "text-green-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
    yellow: "text-yellow-600",
    gray: "text-gray-600"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* HEADER con Logo */}
      <header className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white rounded-full p-2">
              <FontAwesomeIcon icon={faBicycle} className="text-2xl text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">PedaleaYa</h1>
              <p className="text-xs opacity-90">Movilidad Sostenible</p>
            </div>
          </Link>

          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className="hover:text-yellow-300 transition">Inicio</Link>
            <Link href="/ingreso" className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-green-800 transition">
              Iniciar Sesión
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENIDO DE TARIFAS */}
      <section id="tarifas" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">Sistema de Tarifas</h3>
            <p className="text-gray-600">Precios justos con descuentos por estrato socioeconómico</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {tarifas.length > 0 ? (
              tarifas.map((tarifa) => (
                <div
                  key={tarifa.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FontAwesomeIcon icon={faMoneyBillWave} className={`${colorMap[tarifa.color] || "text-green-600"} text-2xl`} />
                    <h4 className="text-xl font-bold text-gray-800">{tarifa.nombre}</h4>
                  </div>
                  <div className={`text-4xl font-extrabold ${colorMap[tarifa.color] || "text-green-600"} mb-2`}>
                    ${Number(tarifa.precio).toLocaleString("es-CO", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </div>
                  <p className="text-gray-600 mb-4">{tarifa.descripcion}</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {tarifa.beneficios?.map((beneficio, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCheckCircle} className={colorMap[tarifa.color] || "text-green-600"} />
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">No hay tarifas registradas</p>
            )}
          </div>

          {/* Información Importante */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={faShieldAlt} className="text-yellow-600 text-2xl mt-1" />
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Información Importante</h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• El tiempo se calcula desde el momento del alquiler hasta la devolución.</li>
                  <li>• Se generan tarifas adicionales después del tiempo inicialmente facturado.</li>
                  <li>• Los descuentos se aplican automáticamente según tu perfil registrado.</li>
                  <li>• Las bicicletas deben devolverse en las estaciones autorizadas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} PedaleaYa. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-green-400 transition">Términos y Condiciones</Link>
            <Link href="#" className="hover:text-green-400 transition">Privacidad</Link>
            <Link href="#" className="hover:text-green-400 transition">Política de Datos</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
