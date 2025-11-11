import { useState } from "react";

function Count() {
  let [count, setCount] = useState(0);

  let inCount = () =>{
    setCount(count+1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inCount}>Increase Count</button>
    </div>
  );
}

export default Count;
