import { useForm, Head, Link } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSpinner, faBicycle } from '@fortawesome/free-solid-svg-icons';

interface Props {
  status?: string;
}

export default function OlvideContrasena({ status }: Props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
  });

  useEffect(() => {
    if (status) {
      Swal.fire({
        icon: 'success',
        title: 'Correo enviado',
        text: status,
        confirmButtonColor: '#2563eb',
      });
    }
  }, [status]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/olvide-contrasena', {
      onSuccess: () => {
        Swal.fire({
          icon: 'success',
          title: 'Revisa tu correo',
          text: 'Te hemos enviado un enlace para restablecer tu contraseña.',
          confirmButtonColor: '#2563eb',
        });
        reset('email');
      },
      onError: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No pudimos enviar el correo, verifica el email.',
          confirmButtonColor: '#dc2626',
        });
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-white">
      <Head title="Olvidé mi contraseña" />

      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-8">
            <div className="bg-white rounded-full p-3 shadow-lg">
                <FontAwesomeIcon icon={faBicycle} className="text-3xl text-green-600" />
            </div>
            <div>
                <h1 className="text-3xl font-extrabold tracking-tight">PedaleaYa</h1>
                <p className="text-sm opacity-90">Movilidad Sostenible</p>
            </div>
        </Link>

      {/* Card */}
      <form
        onSubmit={submit}
        className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          ¿Olvidaste tu contraseña?
        </h2>

        <p className="text-sm text-gray-600 text-center mb-6">
          Ingresa tu correo electrónico y te enviaremos un enlace para
          restablecerla.
        </p>

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

        {/* Botón */}
        <button
          type="submit"
          disabled={processing}
          className="w-full bg-yellow-300 text-green-800 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition flex items-center justify-center shadow-lg"
        >
          {processing && (
            <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
          )}
          Enviar enlace
        </button>

        {/* Volver al login */}
        <div className="text-center text-sm text-gray-600 mt-6">
          ¿Ya lo recordaste?{" "}
          <Link
            href="/ingreso"
            className="text-green-700 font-semibold hover:underline"
          >
            Inicia sesión aquí
          </Link>
        </div>
      </form>
    </div>
  );
}
