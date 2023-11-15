import "./App.css";
import PaymentSuccess from "./components/paymentSuccess";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Products from "./components/products";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Products />} />
      <Route path="/success" element={<PaymentSuccess />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
