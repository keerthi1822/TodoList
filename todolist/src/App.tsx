import React from 'react';

import keerthiPic from "./images/keerthipicture.png";
import TodoList from "./components/TodoList";
import img from "../src/asserts/images/clerk.png";

import './App.css';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='app-header-div'>
          <a href='https://clerk.io/' target="_blank">
            <img src={img} className="logo" alt="logo" width="100" />
          </a>
          <h1>Todo list</h1>
        </div>
        <div className='app-header-myProfile'>
          <div>
            <h2> Keerthika devi Alampalli.</h2>
            <p>Frontend Developer.</p>
            <a
          href="/Keerthika'sResume.pdf"
          download="Keerthika'sResume.pdf"
          rel="noreferrer"
          title="click for resume"
          style={{color:'white',textDecoration:'none', fontStyle:'italic'}}
        >
          <sub>
          Keerthika's Resume{" "}
            <i className="fas fa-cloud-download-alt"></i>
          </sub>
        </a>
          </div>

          <img width={150} src={keerthiPic} alt="K" />
        </div>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
