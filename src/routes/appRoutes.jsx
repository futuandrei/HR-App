import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import EmployeePage from "../pages/EmployeePage";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/HomePage", element: <HomePage /> },
      { path: "/EmployeePage", element: <EmployeePage /> },
    ],
  },
]);
