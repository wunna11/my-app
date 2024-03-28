import { useState } from "react";
import Counter from "./Counter";

export default function Preserve() {
  const [showB, setShowB] = useState(true);
  const [isFancy, setIsFancy] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [isPlayerA, setIsPlayerA] = useState(false);

  return (
    <div>
      {/*  {isFancy ? <Counter fancy={true} /> : <Counter fancy={false} />} */}

      {/*   {isPause ? <h1>Hello</h1> : <Counter />}  */}
      
      { isPlayerA ? <Counter person="Wunna" /> : <Counter person="May Phoo" />}

      {/* <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => setShowB(e.target.checked)}
        />
        Render the second counter
        </label>
      
  */}
      {/* <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => setIsFancy(e.target.checked)}
        />
        Use Fancy
      </label>
*/}

      {/* <label>
        <input
          type="checkbox"
          checked={isPause}
          onChange={(e) => setIsPause(e.target.checked)}
        />
        Take a break
</label> */}

      <label>
        <input
          type="checkbox"
          checked={isPlayerA}
          onChange={(e) => setIsPlayerA(e.target.checked)}
        />
        Next Player
      </label>
    </div>
  );
}
