// React hooks
import { useEffect, useState } from "react";
// Router
import { Link } from "react-router-dom";
import WindowSizeInfo from "../../hooks/getWindowSize";
const FormEmail = ({ handleDataInfo, handleDataSmall }) => {

  const [inputInfo, setInputInfo] = useState({ email: "", password: "" });
  
  const {width} = WindowSizeInfo();
  
  useEffect(() => {
    if (width > 768) {
      handleDataInfo(inputInfo.email, inputInfo.password);
    }else {
      handleDataSmall(inputInfo.email, inputInfo.password);
    }
  }, [inputInfo])


  return (
    <div>
      <form action="">
        <h2 className="font-bold text-lg">Crea tu cuenta</h2>
        <br />
        <p className="text-base">
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
        <br />
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">
            ¿Cuál es tu correo electrónico?
          </label>
          <input
            className="rounded border border-gray-400 py-2 pl-1.5 "
            type="email"
            name="email"
            id="email"
            onChange={(e) =>
              setInputInfo({ ...inputInfo, email: e.target.value })
            }
            placeholder="tu@correo.com"
            required
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2">
            Ingrese una contraseña
          </label>
          <div className=" w-full relative">
            <input
              className="rounded border border-gray-400 py-2 pl-1.5 w-full "
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              onChange={(e) =>
                setInputInfo({ ...inputInfo, password: e.target.value })
              }
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormEmail;
