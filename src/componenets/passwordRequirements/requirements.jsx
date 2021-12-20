import { useState } from "react";
import {
  equalCharacters,
  excludePhrase,
  minLength,
  oneNumVal,
  passwordVerify,
  specialCharacters,
} from "../../hooks/passwordValidation";

const PasswordRequirements = ({ pass }) => {
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const characters = "!”#$%&/()=?¿^*@[]{};:>_<,.-|`+.";
  return (
    <div className="flex flex-col">
      <br />
      <div className="text-sm">
        <p>
          Por razones de seguridad tu contraseña debe tener las siguientes
          carateristicas:
        </p>
        <br />
        <p className="flex items-baseline">
          {minLength(pass) === true ? (
            <svg
              className="mr-2"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="#74CC15" />
            </svg>
          ) : (
            <svg
              className="mr-2"
              width="9"
              height="9"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="#8C8C8C" />
            </svg>
          )}
          Mínimo 6 caracteres (letras, números y caracteres especiales).
        </p>
        <p className="flex items-baseline">
          {oneNumVal(pass) === true ? (
            <svg
              className="mr-2"
              width="6"
              height="6"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="#74CC15" />
            </svg>
          ) : (
            <svg
              className="mr-2"
              width="8"
              height="8"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="#8C8C8C" />
            </svg>
          )}
          Mínimo 1 número.
        </p>
        <p className="flex items-baseline">
          {specialCharacters(pass) === true ? (
            <svg
              className="mr-2"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="#74CC15" />
            </svg>
          ) : (
            <svg
              className="mr-2"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="#8C8C8C" />
            </svg>
          )}
          Mínimo 1 de estos caracteres especiales {characters}
        </p>
        <p className="flex items-baseline">
          {excludePhrase(pass) === false ? (
            <svg
              className="mr-2"
              width="6"
              height="6"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="#74CC15" />
            </svg>
          ) : (
            <svg
              className="mr-2"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="#8C8C8C" />
            </svg>
          )}
          No tener la frase “100Ladrillos”.
        </p>
        <p className="flex items-baseline">
          {equalCharacters(pass) === false ? (
            <svg
              className="mr-2"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="#74CC15" />
            </svg>
          ) : (
            <svg
              className="mr-2"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="#8C8C8C" />
            </svg>
          )}
          No tener mas de 3 caracteres idénticos en forma consecutiva (ej: aaa).
        </p>
        <p className="flex items-baseline">
          {equalCharacters(pass) === false ? (
            <svg
              className="mr-2"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="#74CC15" />
            </svg>
          ) : (
            <svg
              className="mr-2"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="#8C8C8C" />
            </svg>
          )}
          No tener mas de 3 caracteres numéricos y/o letras en forma secuencial
          (ej: 123).
        </p>
      </div>
      <br />
      <label className="mb-2">Confirma tu contraseña</label>
      <input
        className="rounded border border-gray-400 py-2 pl-1.5 w-full "
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required
      />
      {passwordVerify(pass, passwordConfirm) === true &&
      passwordConfirm.length > 0 ? (
        <p>Las contraseñas coinciden</p>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default PasswordRequirements;
