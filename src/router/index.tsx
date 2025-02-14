import { createBrowserRouter } from "react-router";
import { RootLatout } from "@/layouts/RootLatout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLatout />,
    children: [
      { path: "/", element: <h2>Home</h2> },
      { path: "celulares", element: <h2>Celulares</h2> },
      { path: "nosotros", element: <h2>Sobre Nosotros</h2> },
      { path: "otros", element: <h2>Otros</h2> },
    ],
  },
]);