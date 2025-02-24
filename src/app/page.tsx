import Image from "next/image";
import Counter from "./components/Counter";
import Greet from "./components/Greet";

export default function Home() {
  console.log("Greet Component is rendered");
  return (
    <>
      <div>Hello world</div>
      <Greet />
      <Counter />
    </>
  );
}
