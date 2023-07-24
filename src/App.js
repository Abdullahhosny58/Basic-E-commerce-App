import Navbar from "./compoenents/Navbar";
import Slider from "./compoenents/Slider";
import ProductsList from "./compoenents/Products-List";
import { Routes, Route } from "react-router-dom";
import About from "./compoenents/About";
import ProductDetails from "./compoenents/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
