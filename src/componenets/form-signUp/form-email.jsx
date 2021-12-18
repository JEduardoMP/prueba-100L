import { useState } from "react";
import { Link } from "react-router-dom";
const FormEmail = () => {
  const [password, setPassword] = useState(null);

  return (
    <form action="">
      <h2>Crea tu cuenta</h2>
      <p>
        Al aceptar crear una cuenta en 100 Ladrillos aceptas nuestro{" "}
        <Link className="text-blue-400" to="/" exact>
          Aviso de Privacidad
        </Link>
        ,{" "}
        <Link className="text-blue-400" to="/" exact>
          Derechos Arco
        </Link>{" "}
        y nuestros{" "}
        <Link className="text-blue-400" to="/" exact>
          Términos y Condiciones.
        </Link>
      </p>
      <div>
        <label htmlFor="email">¿Cuál es tu correo electrónico?</label>
        <input type="email" name="email" id="email" required />
      </div>

      <div>
        <label htmlFor="password">Ingrese una contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <input type="submit" value="Siguiente" />
    </form>
  );
};

export default FormEmail;
