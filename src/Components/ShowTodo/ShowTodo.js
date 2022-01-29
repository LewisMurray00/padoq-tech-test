import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import ListTodo from '../ListTodo/ListTodo';

function ShowTodo({ list, toggleTodo }) {
  return (
      <ol>
          {list.map((listTodo, i) => (
              <listTodo
                name={listTodo.name}
                completed={ListGroupItem.completed}
                key={listTodo.name}
                toggleTodo={() => toggleTodo(i)}
              />
          ))}
      </ol>
  );
}

export default ShowTodo;
