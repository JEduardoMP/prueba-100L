// React hooks
import { useState } from "react";
// Components
import FormEmail from "../../form-signUp/form-email";
import Navbar from "../../navbar/navbar";
// Images
import Angel from "../../../assets/AngelIndependencia.jpg";
import Google from "../../../assets/Google_G_Logo.jpg";
import Windows from "../../../assets/microsoft-windows-logo.jpg";
import Facebook from "../../../assets/facebok-logo.jpg";

const Biggest = () => {
  const [validation, setValidation] = useState({email: '', contraseña: ''});

  const handleDataInfo = (correo, password) => {
    setValidation({
      email: correo,
      contraseña: password
    })
  }
  return (
    <div className="flex">
      <div className="w-3/6">
        <img
          src={Angel}
          alt="Angel de la independencia"
          className="relative w-full"
        />
      </div>
      <div className="border-t-2 flex justify-center items-center w-3/5">
        <div className="w-2/4">
          <FormEmail handleDataInfo={handleDataInfo} />
          {validation.email === '' && validation.contraseña === '' ? (
            <div>
              <div className="flex items-center justify-between">
                <div className="w-1/4 h-px bg-gray-200"></div>
                <p className="px-1 my-8">o regístrate con:</p>
                <div className="w-1/4 h-px bg-gray-200"></div>
              </div>
              <div className="flex justify-evenly items-center mb-10">
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
          <div className="flex justify-center">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biggest;
