import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import ProductDetail from "./pages/ProductDetail";
import Providers from "./context/ProductProvider";
import ContactPage from "./pages/ContactPage"
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Providers>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </Providers>
  );
}

export default App;
