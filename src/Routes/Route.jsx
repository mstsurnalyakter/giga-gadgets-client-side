import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import ProductsDetails from "../pages/ProductsDetails";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "../utilitis/ProtectedRoute";


const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/add",
        element: (
          <ProtectedRoute>
            <AddProductPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <ProtectedRoute>
            <ProductsDetails />
           </ProtectedRoute>
        ),
      }
    ],
  },
  {
    path: "/signIn",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <RegisterPage />,
  },
]);

export default Route;
