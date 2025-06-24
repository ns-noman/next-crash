import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-10">
      <h1>Mission</h1>
      <div className="mt-5">
        <button onClick={()=>alert('I have clicked here!')}>Click Here</button>
      </div>
    </main>
  );
}
