import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/Navbar/Index";
import { Footer } from "../Components/Footer/Index";

export function Layout() {
  return (
    <>
      <NavBar />

      <Outlet />

      <Footer />
    </>
  )
}