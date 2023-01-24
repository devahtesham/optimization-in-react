import { useCallback } from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todo from "./Todo";


const UseCallBackExample = () => {
    console.log("parent render");
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };
    /*
        with the above addTodo function we dont call addTodo function which is calling from inside todo component, we 
        are only click on increment (+) button but along with this component it also render its child component even it is wrap in React.memo(). The reason is that 
        although todos value are not change(which is pass through prop) but the function addTodo which is passing in child component through prop
        is re create every time when its parent (or this current) component call due to state change ,so thats why we wrap this function
        in useCallback() hook so it will not re create every time when this parent component get rendered like below example
    */
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  },[todos]);

  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default UseCallBackExample