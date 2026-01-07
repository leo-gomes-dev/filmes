import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filmes />} />

        {/* Rota NotFound*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
