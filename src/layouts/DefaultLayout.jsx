import { Outlet } from "react-router";
import Navbar from "../components/ui/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
