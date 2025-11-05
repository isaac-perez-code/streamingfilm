import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 p-10 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl text-white font-bold text-center mb-8">
          Crea tu cuenta
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Nombre completo"
            required
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Correo"
            required
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-xl hover:bg-red-700"
          >
            Registrarme
          </button>
        </form>
        <p className="text-gray-400 text-center mt-6">
          ¿Ya tienes cuenta?{" "}
          <Link to="/" className="text-red-500 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}