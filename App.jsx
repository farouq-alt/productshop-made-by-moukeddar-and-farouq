import ListProduct from "./components/productlist";
import { CartProvider } from "./context/CartContext";
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
