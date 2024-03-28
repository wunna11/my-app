import { useState, useEffect } from 'react';
import Clock from './clock';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Time() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');

  const selectColor = (e) => {
    console.log('res', e.target.value)
    setColor(e.target.value)
  }

  return (
    <div>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={selectColor}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}
