import Todo from "./Todo";
import AddTodo from "./AddTodo";
import React from 'react';

function Todos() {
    const state = {
        addTodoValue: "",
        todos: []
    }

    const getTime = () => {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

     const handleDelete = todo => {
        const todos = this.state.todos.filter(t => t.id !== todo);
        this.setState({ todos });
      }
    
      const handleDone = todo => {
        const todos = [...this.state.todos];
        todos.map(t => {
          if (t.id === todo.id) {
            t.isDone = !t.isDone;
          }
          
          return t;
        });
        
        this.setState({todos});
      }
      
      const addNewTodo = value => {
        if (value) {
          const todos = [...this.state.todos];
          todos.push(
            {
              id: this.getTime(),
              value: value,
              isDone: false
            }
          );
          
          this.setState({ addTodoValue: "", todos })
        } else {
          console.log("Please Add Todo Text");
        }
      }
      

  return (
    <table className="table">
        <tbody>
        {this.state.todos.map((todo, index) => (
            <tr key={todo.id}>
            <Todo index={index+1} todo={todo} fooDelete={handleDelete} fooDoneDone={handleDone} />
            </tr>
        ))}
        <tr>
            <td colSpan="4" className="text-center">
            <AddTodo fooAddTodo={addNewTodo} addTodoValue={this.state.addTodoValue} />
            </td>
        </tr>
        </tbody>
    </table>

  );
}

export default Todos;


