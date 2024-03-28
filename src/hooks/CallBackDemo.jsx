import { useCallback, useMemo, useState } from "react"

function express(count) {
  console.log('count', count)
  return count;
}

export default function CallBackDemo() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('useCallback')
    setCount(count+1)
  }, [count]);


  const memonized = useCallback(() => {
    doSmth();
  }, [count])

  let data = count

  const doSmth = (data) => {
    console.log('do smth', data)
  }

  const memonized2 = useMemo(() => express(count), [count]);
  console.log('memonized2' , memonized2)

  return (
    <div>
      <h1>Call Back Demo</h1>

      <button type='button' onClick={handleClick}>Increment</button>
      <button type='button' onClick={memonized}>callback</button>

    </div>
  )
}