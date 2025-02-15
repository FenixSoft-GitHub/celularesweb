import { Outlet, useLocation } from "react-router"
import { NavBar } from "@/components/shared/NavBar"
import { Footer } from "@/components/shared/Footer"
import { Banner } from "../components/home/Banner";
import { Newsletter } from "../components/home/Newsletter";

export const RootLatout = () => {
  const { pathname } = useLocation();
  return (
    <div className="h-screen flex flex-col font-montserrat">
      <NavBar />

      {pathname === "/" && <Banner />}

      <main className="container my-8 flex-1">
        <Outlet />
      </main>

      {pathname === "/" && <Newsletter />}

      <Footer />
    </div>
  );
}
