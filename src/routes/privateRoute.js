import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
export { PrivateRoute };

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  const history = useNavigate();

  axios.defaults.headers.common["Authorization"] = token;

  if (!token) {
    // not logged in so redirect to login page with the return url
    return <Navigate to='/login' />;
  }

  // authorized so return child components
  return children;
}
