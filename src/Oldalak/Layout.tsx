import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/NavBar/Index";

export function Layout() {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  )
}