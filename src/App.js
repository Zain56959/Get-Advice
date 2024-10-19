import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState("");
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center w-full h-screen gap-10">
      <div className="w-72 bg-purple-400 p-4 rounded-lg shadow-lg animate-bounce">
      <h1 className="font-semibold text-white text-lg" >{advice}</h1>
      </div>
      <button className="bg-green-400 p-4 font-semibold text-white rounded-lg shadow-lg active:bg-green-300 " onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(data) {
  return (
    <p>
      You have read <strong>{data.count}</strong> pieces of advice
    </p>
  );
}
