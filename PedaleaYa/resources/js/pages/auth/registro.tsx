import { useForm, Head, Link } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

export default function Registro() {
  const { data, setData, post, processing, errors, reset } = useForm({
    nombre: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    if (errors && Object.keys(errors).length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: 'Verifica los campos e intenta nuevamente.',
        confirmButtonColor: '#dc2626',
      });
    }
  }, [errors]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/registro', {
      onSuccess: () => {
        Swal.fire({
          icon: 'success',
          title: 'Cuenta creada',
          text: 'Tu registro fue exitoso, ahora puedes iniciar sesión.',
          confirmButtonColor: '#2563eb',
        });
        reset('password', 'password_confirmation');
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-white">
      <Head title="Registro" />

      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-white rounded-full p-3 shadow-lg">
          <FontAwesomeIcon icon={faBicycle} className="text-3xl text-green-600" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">PedaleaYa</h1>
          <p className="text-sm opacity-90">Movilidad Sostenible</p>
        </div>
      </div>

      {/* Card Registro */}
      <form
        onSubmit={submit}
        className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Crear una cuenta
        </h2>

        {/* Nombre */}
        <div className="mb-5">
          <label className="block font-semibold mb-2">Nombre completo</label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              name="nombre"
              value={data.nombre}
              onChange={(e) => setData('nombre', e.target.value)}
              className={`w-full border rounded-lg px-10 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none ${
                errors.nombre ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tu nombre completo"
              required
            />
          </div>
          {errors.nombre && (
            <span className="text-red-500 text-sm mt-1">{errors.nombre}</span>
          )}
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block font-semibold mb-2">Correo electrónico</label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className={`w-full border rounded-lg px-10 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block font-semibold mb-2">Contraseña</label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className={`w-full border rounded-lg px-10 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="••••••••"
              required
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm mt-1">{errors.password}</span>
          )}
        </div>

        {/* Confirmación */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Confirmar contraseña</label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              onChange={(e) => setData('password_confirmation', e.target.value)}
              className={`w-full border rounded-lg px-10 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none ${
                errors.password_confirmation ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Repite la contraseña"
              required
            />
          </div>
          {errors.password_confirmation && (
            <span className="text-red-500 text-sm mt-1">{errors.password_confirmation}</span>
          )}
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={processing}
          className="w-full bg-yellow-300 text-green-800 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition flex items-center justify-center shadow-lg"
        >
          {processing && (
            <FontAwesomeIcon
              icon={faSpinner}
              className="animate-spin mr-2"
            />
          )}
          Registrarse
        </button>

        {/* Link a login */}
        <div className="text-center text-sm text-gray-600 mt-6">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/ingreso" className="text-green-700 font-semibold hover:underline">
            Inicia sesión aquí
          </Link>
        </div>
      </form>
    </div>
  );
}
