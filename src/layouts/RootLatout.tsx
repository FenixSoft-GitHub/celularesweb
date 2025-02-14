import { Outlet } from "react-router"
import { NavBar } from "@/components/shared/NavBar"
import { Footer } from "@/components/shared/Footer"

export const RootLatout = () => {
  return (
    <div className="h-screen flex flex-col font-montserrat">
      <NavBar />
      <main className="container my-8 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
