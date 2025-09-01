import Index from "./pages/Index/index";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import PageDefault from "components/PageDefault";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PageDefault/>}>
          <Route path="/" element={<Index />}/>
          <Route path="/aboutMe" element={<AboutMe />}/>
        </Route>
        
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes;