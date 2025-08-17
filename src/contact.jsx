import Nav from "./nav.jsx";
import Head from "./head.jsx";
import Footer from "./Footer.jsx";
import Calls from "./Calls.jsx";
import BigShoes from "./Bigshoes.jsx"
import { Link } from "react-router";
function Contact() {
  return (
    <div className="h-screen w-screen">
      <Nav />
      <BigShoes/>
      <Calls/>
      <div className="h-100"></div>
      <Footer/>
    </div>
  );
}

export default Contact;
