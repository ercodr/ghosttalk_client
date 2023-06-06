// import { useContext } from "react";
// import { Outlet } from "react-router-dom";
// import { LoginContext } from "../components/Context";
// import Login from "./Login";

// const useAuth = () => {
//   const { loggedIn } = useContext(LoginContext);
//   const user = { loggedIn: loggedIn };
//   return user && user.loggedIn;
// };

// const ProtectedRoutes = () => {
//   const isAuthenticated = useAuth();
//   return isAuthenticated ? <Outlet /> : <Login />;
// };

// export default ProtectedRoutes;
