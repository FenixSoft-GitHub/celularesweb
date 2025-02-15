import { createBrowserRouter } from "react-router";
import { RootLatout } from "@/layouts/RootLatout";
import { AboutPage, CellPhonesPage, HomePage } from "../pages";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLatout />,
    children: [
      { path: "/", element: <HomePage/> },
      { path: "celulares", element: <CellPhonesPage/> },
      { path: "nosotros", element: <AboutPage/> },
      { path: "otros", element: <h2>Otros</h2> },
    ],
  },
]);