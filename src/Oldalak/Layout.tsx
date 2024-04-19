import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/Navbar/Index";

export function Layout() {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  )
}