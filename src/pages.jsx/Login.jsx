export default function Login() {
  return (
    <div className="p-10 max-w-sm mx-auto">
      <h1 className="text-xl font-bold">Login</h1>

      <input className="border w-full p-2 mt-2" placeholder="Email" />
      <input className="border w-full p-2 mt-2" placeholder="Password" />

      <button className="bg-black text-white w-full mt-3 p-2">
        Login
      </button>
    </div>
  );
}