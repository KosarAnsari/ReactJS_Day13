import { useEffect } from 'react';

function Counter({ count, data }) {
  const handleCount = () => {
    console.log('Handle count');
  };

  useEffect(() => {
    handleCount();
  }, [count]);

  const handleData = () => {
    console.log('Data called');
  };

  useEffect(() => {
    handleData();
  }, [data]);
  return (
    <>
      <h5>Counter Component</h5>
      <p>Counter Value:{count}</p>
      <p>Data Value:{data}</p>
    </>
  );
}
export default Counter;
