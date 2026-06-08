import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-3 gap-3">
      {products.map(p => (
        <div key={p.id} className="border p-3">
          <img src={p.image} className="h-32 mx-auto" />
          <h3>{p.title.slice(0, 30)}</h3>
          <p>${p.price}</p>

          <Link to={`/product/${p.id}`} className="text-blue-600">
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}
