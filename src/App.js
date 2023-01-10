import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Congratulation from "./pages/Congratulation";
import Details from "./pages/Details";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/categories/:idc" element={<Details />} />
        <Route path="/categories/:idc/products/:idp" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/congratulation" element={<Congratulation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
