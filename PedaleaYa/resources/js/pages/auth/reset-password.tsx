import { useForm, Head, Link } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import {route} from 'ziggy-js';

interface ResetPasswordProps {
    token: string;
    email: string;
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: email || '',
        token,
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validación simple en cliente
        if (!data.password || !data.password_confirmation) {
            Swal.fire('Error', 'Debes completar todos los campos.', 'error');
            return;
        }

        if (data.password !== data.password_confirmation) {
            Swal.fire('Error', 'Las contraseñas no coinciden.', 'error');
            return;
        }

        post(route('contrasena.reset'), {
            onSuccess: () => {
                reset('password', 'password_confirmation');
                Swal.fire('Éxito', 'Tu contraseña fue restablecida correctamente.', 'success');
            },
            onError: () => {
                Swal.fire('Error', 'Ocurrió un error al restablecer tu contraseña.', 'error');
            },
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <Head title="Restablecer Contraseña" />

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
        
            <div className="card w-full max-w-md shadow-xl bg-base-100">
                <div className="card-body">
                    <h2 className="card-title text-center justify-center">
                        Restablecer contraseña
                    </h2>
                    <p className="text-center text-sm text-gray-500">
                        Ingresa tu nueva contraseña para continuar
                    </p>

                    <form onSubmit={handleSubmit} className="form-control gap-4 mt-4">
                        {/* Email */}
                        <label className="input input-bordered flex items-center gap-2">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                readOnly
                                className="grow"
                            />
                        </label>
                        {errors.email && (
                            <span className="text-error text-sm">{errors.email}</span>
                        )}

                        {/* Password */}
                        <label className="input input-bordered flex items-center gap-2">
                            <FontAwesomeIcon icon={faLock} />
                            <input
                                type="password"
                                name="password"
                                placeholder="Nueva contraseña"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="grow"
                            />
                        </label>
                        {errors.password && (
                            <span className="text-error text-sm">{errors.password}</span>
                        )}

                        {/* Password Confirmation */}
                        <label className="input input-bordered flex items-center gap-2">
                            <FontAwesomeIcon icon={faLock} />
                            <input
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirmar contraseña"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className="grow"
                            />
                        </label>
                        {errors.password_confirmation && (
                            <span className="text-error text-sm">
                                {errors.password_confirmation}
                            </span>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-primary mt-4"
                            disabled={processing}
                        >
                            {processing ? (
                                <span className="loading loading-spinner"></span>
                            ) : (
                                'Restablecer contraseña'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

