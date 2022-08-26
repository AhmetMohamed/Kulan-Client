import { useContext } from "react";
import { userContext } from "./utils/userContext";
import { Navigate, Outlet } from "react-router-dom";
function Protect() {
  const { user } = useContext(userContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
}
export default Protect;
