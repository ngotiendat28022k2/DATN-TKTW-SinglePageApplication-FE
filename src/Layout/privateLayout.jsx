import { useNavigate } from "react-router-dom";
import local from "../utiliti/local/localSesion";
import AccessDenied from "../components/AccessDenied";

const PrivateLayout = ({ children }) => {
  const navigate = useNavigate();
  const user = local.get("user");
  console.log("user", user);
  if (!user) {
    return <AccessDenied />;
  }
  if (user.role <= 0) {
    return <AccessDenied />;
  }

  return children;
};

export default PrivateLayout;
