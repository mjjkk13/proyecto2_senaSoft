import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faMapMarkerAlt, faBicycle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  ubicacion: string;
}

export default function Ciclopaseos({ eventos }: { eventos: Evento[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
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
            <Link href="/ingreso" className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-green-800 transition">
              Iniciar Sesión
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENIDO */}
      <section id="eventos" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-5xl mb-4 text-green-600" />
            <h3 className="text-3xl font-bold text-gray-800 mb-3">Eventos de Ciclopaseo</h3>
            <p className="text-gray-600">Participa en nuestras actividades y vive la movilidad sostenible</p>
          </div>

          {eventos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventos.map((evento) => (
                <div key={evento.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
                  <h4 className="text-xl font-bold text-green-700 mb-2">{evento.titulo}</h4>
                  <p className="text-gray-600 mb-4">{evento.descripcion}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-green-600" />
                    {new Date(evento.fecha).toLocaleDateString("es-CO", {
                      weekday: "long", year: "numeric", month: "long", day: "numeric"
                    })}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500" />
                    {evento.ubicacion}
                  </div>
                  <button className="mt-4 w-full bg-yellow-300 text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
                    Inscribirme
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No hay ciclopaseos disponibles en este momento.</p>
          )}
        </div>
      </section>
    </div>
  );
}
