import Index from "./pages/Index/index";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/aboutMe" element={<AboutMe />}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes;