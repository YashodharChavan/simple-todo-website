import React, { useRef, useState } from 'react';
import "./AddTodo.css";

const AddTodo = () => {
  const [todos, setTodos] = useState([]);
  const input = useRef();
  const [finishedTodo, setFinishedTodo] = useState([]);
  const [showFinishedTodos, setShowFinishedTodos] = useState(false);

  const button1 = useRef();
  const button2 = useRef();

  const handleAdd = (event) => {
    event.preventDefault();
    const newTodo = input.current.value.trim();

    if (newTodo) {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      input.current.value = '';
    }
  };

  const handleCheck = (index) => {
    setFinishedTodo((prevTodos) => [...prevTodos, todos[index]]);
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const handleFinishedDelete = (index) => {
    setFinishedTodo((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const showFinished = () => (
    <div className='flex flex-col justify-between'>
      {finishedTodo.map((todo, index) => (
        <span key={index} className='border border-black p-2 rounded-full flex gap-4 m-auto mb-2 w-1/2 justify-between px-3'>
          <span className='line-through'>
            {todo}
          </span>
          <button className='text-red-600 bg-blue-300 rounded-full px-4' onClick={() => handleFinishedDelete(index)}>
            Delete
          </button>
        </span>
      ))}
    </div>
  );

  const handleFinished = () => {
    setShowFinishedTodos(true);
    button2.current.style.backgroundColor = "#b2b2e9";
    button1.current.style.backgroundColor = "#60a5fa";
  };

  const handleCurrent = () => {
    setShowFinishedTodos(false);
    button1.current.style.backgroundColor = "#b2b2e9";
    button2.current.style.backgroundColor = "#60a5fa";
  };

  return (
    <>
      <div className='outer flex items-center justify-center h-40'>
        <input
          type="text"
          placeholder='Add Todo'
          ref={input}
          className='border input-for-todo sm:min-w-96 min-w-64 border-black px-4 py-2 rounded-full focus:outline-none'
        />
        <button
          onClick={handleAdd}
          className='p-2 ml-2 rounded-full bg-blue-400 add-btn'
        >
          Add Todo
        </button>
      </div>
      <hr />

      <div className="operation flex gap-4 justify-center items-center">
        <button className='bg-blue-300 rounded-full px-4' ref={button1} onClick={handleCurrent}>
          Current Todos
        </button>
        <button className='bg-blue-300 rounded-full px-4' ref={button2} onClick={handleFinished}>
          Finished Todos
        </button>
      </div>

      <div className='mt-4 flex flex-col justify-center items-center'>
        {!showFinishedTodos && todos.map((todo, index) => (
          <div key={index} className='border border-black p-2 rounded-full flex gap-4 mb-2 w-1/2'>
            <input type="checkbox" onChange={() => handleCheck(index)} />
            <h1>{todo}</h1>
          </div>
        ))}
      </div>
      {showFinishedTodos && showFinished()}
    </>
  );
};

export default AddTodo;
