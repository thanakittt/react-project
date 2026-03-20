import Button from "./Button";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-5">
      <Card />
      <h1 className="text-4xl font-bold  text-red-500">Hello, BamBoo</h1>
      <Button />
    </div>
  );
}
function Card() {
  return (
    <div className="bg-red-500 p-5 rounded-lg">
      <h1 className="text-4xl font-bold  text-white">Hello, Frame</h1>
    </div>
  );
}