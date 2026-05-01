import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Cart</h1>

      {cart.length === 0 ? (
        <p>No items</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="border p-2 flex justify-between">
            <p>{item.title}</p>
            <p>${item.price}</p>

            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h2 className="mt-3 font-bold">Total: ${total}</h2>
    </div>
  );
}