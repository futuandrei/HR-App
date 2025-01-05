import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import EmployeePage from "../pages/EmployeePage";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <NotFound />,
//     children: [
//       { index: true, element: <LoginPage /> }, // Default child route ("/")
//       { path: "/HomePage", element: <HomePage /> },
//       { path: "/EmployeePage", element: <EmployeePage /> },
//     ],
//   },
// ]);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />, // Set LoginPage as the root path
    errorElement: <NotFound />,
  },
  {
    path: "/app",
    element: <Root />, // Use Root for layout pages
    children: [
      { path: "HomePage", element: <HomePage /> }, // Accessible via /app/HomePage
      { path: "EmployeePage", element: <EmployeePage /> }, // Accessible via /app/EmployeePage
    ],
  },
]);
