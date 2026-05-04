import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
//text
  const addToCart = (p) => setCart([...cart, p]);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* NAVBAR */}
      <div className="flex justify-between p-4 bg-black text-white">
        <h1>E-Shop</h1>

        <input
          placeholder="Search..."
          className="p-1 text-black"
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to="/cart">Cart ({cart.length})</Link>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
        {filtered.map(p => (
          <div key={p.id} className="bg-white p-3">

            <img src={p.image} className="h-32 mx-auto" />

            <h3>{p.title.slice(0, 30)}</h3>
            <p>${p.price}</p>

            <button
              onClick={() => addToCart(p)}
              className="bg-black text-white w-full"
            >
              Add
            </button>

            <Link to={`/product/${p.id}`} className="text-blue-500">
              View
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
}
