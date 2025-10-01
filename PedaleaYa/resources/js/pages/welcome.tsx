import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBicycle,
  faTimes,
  faCalendarAlt,
  faShieldAlt,
  faClock,
  faLeaf,
  faMobileAlt,
  faCheckCircle,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

export default function SENABikesLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo SENA */}
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2">
                <FontAwesomeIcon
                  icon={faBicycle}
                  className="text-2xl text-green-600"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">PedaleaYa</h1>
                <p className="text-xs opacity-90">Movilidad Sostenible</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 items-center">
              <a className="hover:text-yellow-300 transition" href="/eventos">
                Ciclopaseos
              </a>
              <a className="hover:text-yellow-300 transition" href="/tarifas">
                Tarifas
              </a>
              {/* Iniciar Sesión */}
              <Link
                href="/ingreso"
                className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-green-800 transition"
              >
                Iniciar Sesión
              </Link>
            </nav>

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              <FontAwesomeIcon
                icon={menuOpen ? faTimes : faBars}
                className="h-6 w-6"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-green-500 pt-4">

              <a href="#eventos" className="block hover:text-yellow-300">
                Ciclopaseos
              </a>
              <a href="/tarifas" className="block hover:text-yellow-300">
                Tarifas
              </a>
              {/* Iniciar Sesión */}
              <Link
                href="/ingreso"
                className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold w-full text-center"
              >
                Iniciar Sesión
              </Link>
            </div>
          )}
        </div>

        {/* HERO */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="inline-block bg-yellow-300 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                100 Bicicletas Disponibles
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Sistema de Alquiler de Bicicletas del{" "}
                <span className="text-yellow-300">SENA</span>
              </h2>
              <p className="text-lg opacity-95 mb-6">
                Plataforma digital para funcionarios y aprendices del SENA.
                Alquila bicicletas, participa en ciclopaseos y contribuye a la
                movilidad sostenible.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/tarifas"
                  className="bg-yellow-300 text-green-800 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition shadow-lg"
                >
                  Alquilar Ahora
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">100</div>
                  <div className="text-sm opacity-90">Bicicletas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">24/7</div>
                  <div className="text-sm opacity-90">Disponibilidad</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">0%</div>
                  <div className="text-sm opacity-90">Emisiones CO₂</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* BENEFICIOS */}
      <section id="beneficios" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              Beneficios del Sistema
            </h3>
            <p className="text-gray-600">
              Impacto positivo para la comunidad SENA y el medio ambiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faLeaf} className="text-green-600 text-2xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Eco-Amigable</h4>
              <p className="text-sm text-gray-600">
                Reduce la huella de carbono y promueve la movilidad sostenible
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-blue-600 text-2xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Económico</h4>
              <p className="text-sm text-gray-600">
                Tarifas accesibles con descuentos por estrato socioeconómico
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faClock} className="text-purple-600 text-2xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Disponible 24/7</h4>
              <p className="text-sm text-gray-600">
                Acceso las 24 horas a través de la plataforma digital
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faMobileAlt} className="text-orange-600 text-2xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Fácil de Usar</h4>
              <p className="text-sm text-gray-600">
                Interface intuitiva desde cualquier dispositivo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CICLOPASEOS */}
      <section id="eventos" className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-5xl mb-4 text-yellow-300" />
            <h3 className="text-3xl font-bold mb-4">
              Eventos de Ciclopaseo SENA
            </h3>
            <p className="text-lg mb-8 opacity-95">
              Únete a nuestra comunidad y participa en actividades recreativas y deportivas. 
              Fomentamos el bienestar y el trabajo en equipo a través del ciclismo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
                <h4 className="font-bold text-xl mb-2 text-black">Ciclopaseo Semanal</h4>
                <p className="text-sm opacity-90 mb-3 text-black">
                  Todos los domingos a las 7:00 AM. Recorridos guiados por la ciudad.
                </p>
                <button className="bg-yellow-300 text-green-800 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-400 transition">
                  Inscríbete Ahora
                </button>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
                <h4 className="font-bold text-xl mb-2 text-black">Eventos Especiales</h4>
                <p className="text-sm opacity-90 mb-3 text-black">
                  Celebraciones del SENA, día mundial de la bicicleta y más.
                </p>
                <button className="bg-yellow-300 text-green-800 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-400 transition">
                  Ver Calendario
                </button>
              </div>
            </div>

            <p className="text-sm opacity-80">
              Los administradores pueden publicar nuevos eventos en cualquier momento
            </p>
          </div>
        </div>
      </section>

      {/* TARIFAS */}
      <section id="tarifas" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              Sistema de Tarifas
            </h3>
            <p className="text-gray-600">
              Precios justos con descuentos por estrato socioeconómico
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Tarifa Base</h4>
                <div className="text-4xl font-bold text-green-600 mb-2">$2.000</div>
                <p className="text-gray-600 mb-4">por hora</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                    Cálculo automático del tiempo
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                    Pago al finalizar el recorrido
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                    Descuentos aplicables
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Descuentos por Estrato</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Estrato 1-2</span>
                    <span className="text-green-600 font-bold">30% OFF</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Estrato 3</span>
                    <span className="text-blue-600 font-bold">20% OFF</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Estrato 4</span>
                    <span className="text-purple-600 font-bold">10% OFF</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Estrato 5-6</span>
                    <span className="text-gray-600 font-bold">Tarifa completa</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faShieldAlt} className="text-yellow-600 text-2xl mt-1" />
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Información Importante</h5>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• El tiempo se calcula desde el momento del alquiler hasta la devolución</li>
                    <li>• Se generan tarifas adicionales después del tiempo inicialmente facturado</li>
                    <li>• Los descuentos se aplican automáticamente según tu perfil registrado</li>
                    <li>• Las bicicletas deben devolverse en las estaciones autorizadas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para comenzar a pedalear?
          </h3>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Únete al sistema de movilidad sostenible del SENA. Regístrate ahora
            y comienza a disfrutar de todos los beneficios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {/* Registrarse Ahora → /registro */}
            <Link
              href="/registro"
              className="bg-yellow-300 text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition shadow-xl"
            >
              Registrarse Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faBicycle} className="text-white" />
                </div>
                <span className="font-bold text-white text-lg">PedaleaYa</span>
              </div>
              <p className="text-sm text-gray-400">
                Sistema de gestión de alquiler de bicicletas para la comunidad SENA.
                Promoviendo la movilidad sostenible.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm">

                <li><a href="#eventos" className="hover:text-green-400 transition">Ciclopaseos</a></li>
                <li><a href="/tarifas" className="hover:text-green-400 transition">Tarifas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Reportar Problema</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Manual de Usuario</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <span>bicicletas@pedaleaYa.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <span>01 8000 910 270</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🕐</span>
                  <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} PedaleaYa. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-green-400 transition">Términos y Condiciones</a>
              <a href="#" className="hover:text-green-400 transition">Privacidad</a>
              <a href="#" className="hover:text-green-400 transition">Política de Datos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}