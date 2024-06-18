import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PizzaProvider } from "./context/PizzaContext";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound";
import Pizza from "./views/Pizza";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <PizzaProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PizzaProvider>
    </BrowserRouter>
  );
};

export default App;
