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
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
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
