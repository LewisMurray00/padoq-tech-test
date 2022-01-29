import React from 'react';
import ListTodo from '../ListTodo/ListTodo'

function ShowTodo({ list, toggleTodo }) {
  return (
      <ol>
          {list.map((listTodo, i) => (
              <ListTodo
                name={listTodo.name}
                completed={listTodo.completed}
                key={listTodo.name}
                toggleTodo={() => toggleTodo(i)}
              />
          ))}
      </ol>
  );
}

export default ShowTodo;
