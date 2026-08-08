export default function Checkout(){

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Checkout</h1>

      <input className="border w-full p-2 mt-2" placeholder="Name" />
      <input className="border w-full p-2 mt-2" placeholder="Address" />
      <input className="border w-full p-2 mt-2" placeholder="Phone" />

      <button className="bg-green-600 text-white w-full mt-3 p-2">
        Place Order
      </button>
    </div>
  );
}
