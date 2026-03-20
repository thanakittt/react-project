
export default function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-5">
      <h1 className="text-4xl font-bold  text-black uppercase">Login</h1>
      <input type="text" placeholder="Username" className="border-1 border-black rounded-lg p-2 w-60" />
      <input type="password" placeholder="Password" className="border-1 border-black rounded-lg p-2 w-60" />
      <button className="border-1 border-gray-400 rounded-lg p-2 w-20 bg-blue-500 text-white">Login</button>
    </div>
  );
}
