import { routerType } from "../types/router.types";
import Home from "./Home";
import Details from "./Details";
import Login from "./Login";
import { ProtectedRoute } from "./protectedRoute";

const pagesData: routerType[] = [
  {
    path: "",
    element: <ProtectedRoute><Home /></ProtectedRoute>,
    title: "home"
  },
  {
    path: "details",
    element: <ProtectedRoute><Details /></ProtectedRoute>,
    title: "details"
  },
  {
    path: "login",
    element: <Login />,
    title: "Login"
  }
];

export default pagesData;