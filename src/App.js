import React, { useState } from 'react';
import "./App.css";
import Todoinput from './components/Todoinput';
import Todolist from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo((prevListTodo) => [...prevListTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    setListTodo((prevListTodo) => {
      const newListTodo = [...prevListTodo];
      newListTodo.splice(key, 1);
      return newListTodo;
    });
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <Todoinput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => (
          <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
