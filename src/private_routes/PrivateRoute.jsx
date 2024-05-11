import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import Loader from "../components/loader/Loader";

function PrivateRoute({ children }) {
  // location
  const { pathname } = useLocation();

  // auth info
  const { user, userLoading } = useContext(AuthContext);
  // user loading render this component
  if (userLoading) {
    return <Loader></Loader>;
  }

  // user is available render in this component
  if (user) {
    return <>{children}</>;
  }

  // user is not available redirect to signin page
  return <Navigate to={"/signin"} state={pathname} replace></Navigate>;
}
PrivateRoute.propTypes = { children: PropTypes.node.isRequired };
export default PrivateRoute;
