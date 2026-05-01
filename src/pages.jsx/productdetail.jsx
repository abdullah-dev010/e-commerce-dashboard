import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-10 text-center">
      <img src={product.image} className="h-60 mx-auto" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
    </div>
  );
}