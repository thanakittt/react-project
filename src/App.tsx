import Welcome from "./Welcome";

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
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}
