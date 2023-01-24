import React, { useState } from 'react'
import { useMemo } from 'react';

const UseMemoExample = () => {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    };
    /*
        Here the problem is that when when this component renders, the expensiveCalculation function renders again and again for no reason which 
        causes performance issues, so we wrap in useMemo hook , and pass the dependenvy array, and this deoendency array works same as in useEffect
    */
    const calculation = useMemo(()=>{
        expensiveCalculation(count);
    },[count])

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

export default UseMemoExample