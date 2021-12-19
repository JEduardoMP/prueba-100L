// React hooks
import { useState } from "react/cjs/react.development";
// Router
import { Link } from "react-router-dom";
// Images
import Google from "../../../assets/Google_G_Logo.jpg";
import Windows from "../../../assets/microsoft-windows-logo.jpg";
import Facebook from "../../../assets/facebok-logo.jpg";
// Components
import FormEmail from "../../form-signUp/form-email";
import Navbar from "../../navbar/navbar";

const SmallView = () => {
  const [verify, setVerify] = useState({ email: "", contraseña: "" });

  const handleDataSmall = (correo, password) => {
    setVerify({
      email: correo,
      contraseña: password,
    });
  };
  return (
    <div>
      <div className="mx-5 mb-8">
        <div className="my-6 flex justify-center">
          <Navbar />
        </div>
        <FormEmail handleDataSmall={handleDataSmall} />
      </div>
      {verify.email === "" && verify.contraseña === "" ? (
        <div>
          <div className="flex items-center justify-between">
            <div className="w-1/4 h-px bg-gray-200"></div>
            <p className="px-1">o regístrate con:</p>
            <div className="w-1/4 h-px bg-gray-200"></div>
          </div>
          <br />
          <div className="flex justify-evenly items-center mx-4">
            <div className="shadow-sm border p-2">
              <img src={Google} alt="Google" />
            </div>
            <div className="shadow-sm border p-2">
              <img src={Windows} alt="Windows" />
            </div>
            <div className="shadow-sm border p-2">
              <img src={Facebook} alt="Facebook" />
            </div>
          </div>
        </div>
      ) : (
        <br />
      )}
      <div className="mt-20 mb-8 flex items-center justify-center">
        <div className="text-center">
          <p>¿Ya tienes tu cuenta?</p>
          <Link to="/login" exact className="text-primary font-bold">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallView;
