import React, { useState, useEffect } from 'react';
import { Route, Link, Routes, Navigate } from 'react-router-dom';


function App() {

  







  return (

    <div className="App">

      <div className='title'>Typing Tutor</div>
      <div class="timer" id="timer">0</div>
      <div class="container">
        <div class="code-display" id="codeDisplay">Code</div>
        <textarea class="user-input" id="userInput" autofocus>Response</textarea>
      </div>

    </div>
  );
}

export default App;
