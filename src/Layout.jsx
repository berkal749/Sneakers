import Nav from "./nav.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow"> <Outlet></Outlet></main>
      <Footer />
    </div>
  );
}

export default Layout;
