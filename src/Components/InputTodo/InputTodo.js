import React, {useState} from 'react';

function InputTodo({ addToTodo, buttonText }) {

    const [input, setInput] = useState("");

    function handleInput(e){
        const value = e.target.value;
        setInput(value)
    }

  return (
      <section>
        <input value={input} onChange={handleInput}></input>
        <button onClick={()=> addToTodo(input)}>
            {buttonText}
        </button>
      </section>
  );
}

export default InputTodo;
