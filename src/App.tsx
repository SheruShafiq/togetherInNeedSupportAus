import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Services from "./pages/Services";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/services"} element={<Services />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
