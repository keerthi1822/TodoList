import React, { useState } from 'react';
import logo from './logo.svg';
import keerthiPic from "./images/keerthipicture.png";
import TodoList from "./components/TodoList";
import './App.css';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='app-header-div'>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Todo list</h1>
        </div>
        <div className='app-header-myProfile'>
        <div>
        <h2> Keerthika devi Alampalli.</h2>
        <p>Frontend Developer.</p>
        </div>
          
          <img width={150} src={keerthiPic} alt="K" />
        </div>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
