//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import MapPage from "./pages/MapPage";
import Form from "./components/Form";

//import RestaurantDetail from "./components/RestaurantDetail/RestaurantDetail";

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
      // }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
