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
    <div className="">
      <h1 className="text-4xl font-bold  text-red-500">Hello, Frame</h1>
    </div>
  );
}