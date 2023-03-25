//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import MapPage from "./pages/MapPage";
import Form from "./components/Form";

//import RestaurantDetail from "./components/RestaurantDetail/RestaurantDetail";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";

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
      // {
      //   path: "/restaurantDetail",
      //   element: <RestaurantDetail />,
      // },
      {
        path: "/restaurantCard",
        element: <RestaurantCard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
