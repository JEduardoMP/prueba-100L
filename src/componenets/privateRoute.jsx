import { Navigate } from "react-router-dom";

const PrivateRoute = ({component: Component}) => {
  let auth;
  auth = false;
  return(
    auth === true ? (<Component />) : (<Navigate to="/" />)
  )
}

export default PrivateRoute;