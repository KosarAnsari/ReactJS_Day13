# Day 13 – ReactJS useEffect Hook

## 📌 Topics Covered
- **Handling Side Effects of State**
- **Handling Side Effects of Props**
- Understanding `useEffect` dependencies
- Running effects **once** vs. **on dependency changes**
- Keeping side-effect logic clean and efficient

---

## 📖 What I Learned
- `useEffect` is used in React functional components to perform side effects like:
  - Fetching data
  - Updating the DOM manually
  - Subscribing/unsubscribing to services
- The dependency array `[ ]` controls when the effect runs:
  - **Empty array** → runs once after the component mounts
  - **With dependencies** → runs whenever those dependencies change
- We can separate effects for **state changes** and **prop changes**.

---

## 🛠 Example Project

### Counter Component with `useEffect`

```jsx
import { useEffect } from 'react';

function Counter({ count, data }) {
  const handleCount = () => {
    console.log("Handle count");
  };

  useEffect(() => {
    handleCount();
  }, [count]);

  const handleData = () => {
    console.log("Data called");
  };

  useEffect(() => {
    handleData();
  }, [data]);

  return (
    <>
      <h5>Counter Component:</h5>
      <p>Counter Value: {count}</p>
      <p>Data Value: {data}</p>
    </>
  );
}

export default Counter;


---

📷 Output Preview

The component displays the count and data values.
Whenever these values change, the corresponding useEffect hook runs and logs the change.


---

🏷 Tech Used

ReactJS

Vite

JSX

useEffect Hook



---

📅 Day 13 Summary

Today I learned how to:

Trigger side effects when state or props change

Structure multiple useEffect hooks for cleaner logic

Avoid unnecessary re-renders by controlling dependencies



---

🚀 Next Steps

Implement useEffect with API calls

Learn cleanup functions inside useEffect



---

#ReactJS #FrontendDevelopment #useEffect #ReactHooks #LearningInPublic

