
import React, {} from 'react';

function AddTodo() {
    const state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }
  
    const handleChange = (e) => {
      this.setState({
        value: e.target.value
      });
    }
  
    const clearInput = () => {
      document.getElementById("todoValue").value = "";
      this.setState({value:""});
    }
  
    const addTodo = () => {
      this.props.fooAddTodo(this.state.value);
      this.clearInput();
    }
  return (
    <div className="input-group mb-3">
    <input type="text" className="form-control" id="todoValue" placeholder="ToDo" onChange={handleChange} />
    <div className="input-group-append">
      <button onClick={addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
    </div>
  </div>
  );
}

export default AddTodo;




