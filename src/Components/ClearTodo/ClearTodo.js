import React from 'react';

function ClearTodo({clearList, buttonText}) {
  return (
  <div data-testid="cleartodo-div">
      <button onClick={clearList} data-testid="cleartodo-button">
          {buttonText}
      </button>
  </div>);
}

export default ClearTodo;
