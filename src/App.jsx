import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Contact, Home, Profil, Sportchilar, Cards } from "./pages";

function App() {
  const links = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/sportchilar",
          element: <Sportchilar />,
        },
        {
          path: ":id",
          element: <Cards />,
        },
        {
          path: "/Profil",
          element: <Profil />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={links} />;
}

export default App;
