import Contact from "./contact";
import Display from "./display.jsx";
import { Route, Routes } from "react-router";
import Layout from "./Layout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<Display />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
