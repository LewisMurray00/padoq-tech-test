import React, {useState} from 'react';

import InputTodo from '../InputTodo/InputTodo';
import ShowTodo from '../ShowTodo/ShowTodo';
import ClearTodo from '../ClearTodo/ClearTodo';

let todoList = [
    {name: "Send application off", completed: false}
];

function Todo() {

    const [list, setList] = useState(todoList);

    function addToTodo(newListTodo){
        const listObject = { name: newListTodo};
        const updatedList = [...list, listObject]
        setList(updatedList)
    }

    function clearList(){
        setList([]);
    }

    function toggleTodo(index){
        const updatedItem = {
            ...list[index],
            completed: !list[index].completed
        };

        const updatedList = [
            ...list.slice(0,index),
            updatedItem,
            ...list.slice(index + 1)
        ];

        setList(updatedList)
    }

  return (
      <section>
          <InputTodo addToTodo={addToTodo} buttonText="Add to Todo list" />
          <ShowTodo list={list} toggleTodo={toggleTodo} />
          <ClearTodo clearList={clearList} buttonText="Clear Todo List" />
      </section>
  );
}

export default Todo;
