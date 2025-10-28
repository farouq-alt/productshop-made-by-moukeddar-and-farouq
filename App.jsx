import ListProduct from "./Components/G-Prods/productshop/components/productlist";
import { CartProvider } from "./Components/G-Prods/productshop/context/CartContext";
function App() {
  return (
    <div>
      <CartProvider>
        <ListProduct />
      </CartProvider>
    </div>
  );
}

export default App;
