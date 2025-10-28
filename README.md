
<h1>🛍️ E-Shop – React E-commerce App</h1>
<p>A simple <strong>e-commerce demo</strong> built with <strong>React (Vite)</strong> using:</p>
<ul>
  <li><code>useReducer</code> for complex state management</li>
  <li><code>useContext</code> for global state sharing</li>
  <li><code>React Router</code> for navigation</li>
</ul>

<hr>

<h2>🚀 Features</h2>
<ul>
  <li>🧠 Global state management with <code>useReducer</code> + <code>useContext</code></li>
  <li>🛒 Add, remove, and update product quantities</li>
  <li>➕ / ➖ buttons to modify quantity</li>
  <li>💰 Automatic total amount calculation</li>
  <li>🧹 Clear cart in one click</li>
  <li>🌐 Page navigation with React Router (v6)</li>
  <li>🎨 Styled with Bootstrap</li>
</ul>

<hr>

<h2>⚙️ Create and Run the Project (Vite)</h2>

<h3>1️⃣ Create the project</h3>
<pre><code>npm create vite@latest e-shop -- --template react</code></pre>

<h3>2️⃣ Go to your project folder</h3>
<pre><code>cd e-shop</code></pre>

<h3>3️⃣ Install dependencies</h3>
<pre><code>npm install</code></pre>

<h3>4️⃣ Run the app</h3>
<pre><code>npm run dev</code></pre>
<p>Then open 👉 <a href="http://localhost:5173/">http://localhost:5173/</a></p>

<hr>

<h2>📂 Folder Structure</h2>
<pre>
src/
│
├── context/
│   ├── CartContext.jsx      # Provides global cart state and dispatch
│   └── CartReducer.js       # Handles reducer logic (add, remove, modify, clear)
│
├── components/
│   ├── Navbar.jsx           # Navigation bar with cart count
│   ├── ListProduct.jsx      # Product list view
│   ├── ProductCard.jsx      # Individual product card
│   └── Cart.jsx             # Cart page with modify/remove buttons
│
└── App.jsx                  # Main entry (Router + Provider)
</pre>

<hr>

<h2>🧠 Main Concepts</h2>

<h3>🪣 useReducer</h3>
<p>Used for handling multiple cart actions in a clean and centralized way:</p>
<pre><code>const [state, dispatch] = useReducer(CartReducer, initialState);</code></pre>

<h4>Actions:</h4>
<ul>
  <li>ADD_TO_CART</li>
  <li>REMOVE_FROM_CART</li>
  <li>MODIFY_QTE</li>
  <li>CLEAR_CART</li>
  <li>GET_TOTAL_AMOUNT</li>
</ul>

<p><strong>Example:</strong></p>
<pre><code>case "ADD_TO_CART":
  const exist = state.cart.find((p) =&gt; p.id === action.payload.id);
  if (exist) {
    return {
      ...state,
      cart: state.cart.map((p) =&gt;
        p.id === action.payload.id ? { ...p, qte: p.qte + 1 } : p
      ),
    };
  }
  return { ...state, cart: [...state.cart, { ...action.payload, qte: 1 }] };</code></pre>

<h3>🌍 useContext</h3>
<p>Shares state and dispatch across all components:</p>
<pre><code>&lt;CartContext.Provider value={{ state, dispatch }}&gt;
  {children}
&lt;/CartContext.Provider&gt;</code></pre>

<h3>🧭 React Router</h3>
<p>Used for simple and clean navigation between pages.</p>

<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th>Route</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>/</td>
    <td>Displays all products with "Add to Cart" buttons</td>
  </tr>
  <tr>
    <td>/cart</td>
    <td>Shows products in the cart with edit and remove options</td>
  </tr>
</table>

<h3>💡 Example Quantity Update</h3>
<pre><code>payload: { id: p.id, qte: Math.max(p.qte - 1, 1) }</code></pre>
<p>Ensures the quantity never drops below <strong>1</strong> when decreasing.</p>

<hr>

<h2>❤️ Author</h2>
<p>Built with <strong>React Hooks</strong>, <strong>Vite</strong>, and <strong>Bootstrap</strong>.<br>Made with ❤️ for learning and experimentation.</p>
