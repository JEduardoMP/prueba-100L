import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex ">
      <li>
        <NavLink activeClassName="bg-red-500" to="/" exact>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill="#EAEAEA" />
          </svg>
        </NavLink>
      </li>
      <li className="mx-8">
        <NavLink activeClassName="fill-gray-500" to="/" exact>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill="#EAEAEA" />
          </svg>
        </NavLink>
      </li>
      <li className="mr-8">
        <NavLink activeClassName="fill-gray-500" to="/" exact>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill="#EAEAEA" />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="fill-gray-500" to="/" exact>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill="#EAEAEA" />
          </svg>
        </NavLink>
      </li>
    </ul>
  );
};
export default Navbar;
