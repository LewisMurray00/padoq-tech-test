import React from 'react';
import './ListTodo.css';

function ListTodo({name, completed, toggleTodo }) {
  return (
      <section>
        <li
            className={completed ? "tickedTodo" : "untickedTodo"}
            onClick={toggleTodo}
        >
            {name}
        </li>
      </section>
  );
}

export default ListTodo;
