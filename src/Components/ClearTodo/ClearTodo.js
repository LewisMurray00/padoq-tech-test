import React from 'react';

function ClearTodo({clearList, buttonText}) {
  return (
  <div>
      <button onClick={clearList}>
          {buttonText}
      </button>
  </div>);
}

export default ClearTodo;
