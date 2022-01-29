import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo/Todo';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">ToDoist</h1>
        <Todo />
      </div>
    );
  }
}

