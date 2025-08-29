import Index from "./pages/index/index";
import AboutMe from "./pages/aboutme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/aboutMe" element={<AboutMe />}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;