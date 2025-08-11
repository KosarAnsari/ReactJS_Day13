import { useEffect, useState } from 'react';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    // callOnce();
    counterFunction();
  }, [count]);

  useEffect(() => {
    callOnce();
  }, []);
  function callOnce() {
    console.log('call once function');
  }

  function counterFunction() {
    console.log(count);
  }

  return (
    <>
      <h1>UseEffect Hook</h1>
      <h4>Handling Side Effects of state</h4>
      <button onClick={() => setCount(count + 1)}>Counter:{count}</button>
      <button onClick={() => setData(data + 1)}>Data:{data}</button>

      <h4>Handling side Effects of Props</h4>
      <Counter count={count} data={data}/>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </>
  );
}
export default App;
