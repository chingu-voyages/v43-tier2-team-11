//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import MapPage from "./pages/MapPage";
import RestaurantList from "./pages/RestaurantList/RestaurantList";
import NoResultsPage from "./pages/NoResultsPage";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/map",
        element: <MapPage />,
      },
      {
        path: "/restaurantList",
        element: <RestaurantList />,
      },
      {
        path: "/noResults",
        element: <NoResultsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
