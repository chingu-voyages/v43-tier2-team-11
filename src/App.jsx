//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import MapPage from "./pages/MapPage";
import Form from "./components/Form";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";
import RestaurantListPage from "./components/RestaurantListPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/map",
        element: <MapPage />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/restaurantCard",
        element: <RestaurantCard />,
      },
      {
        path: "/restaurantListPage",
        element: <RestaurantListPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
