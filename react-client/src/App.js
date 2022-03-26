import React, { useState, useEffect } from 'react';
import { Route, Link, Routes, Navigate } from 'react-router-dom';
import { jsString } from './components/snippet';


function App() {

  let jsSubString = jsString.substring(0, 294)


  return (

    <div className="App">

      <div className='title'>Typing Tutor</div>
      <div class="timer" id="timer">0</div>
      <div class="container">
        <div class="snippet" id="snippet"> {jsSubString} </div>
        <textarea class="user-input" id="userInput" autofocus>Response</textarea>
      </div>

    </div>
  );
}

export default App;
