// import React, { useState } from "react";
// import logo from './logo.svg';
// import './App.css';
// // import backgroundVideo from './video/video.mp4'
// import { Login } from "./Login";
// import { Register } from "./Register";
// import Forget from "./Forget.js";



// function App() {
//   const [currentForm, setCurrentForm] = useState('login');
//   const [forget , setForget] = useState(false);

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   const forgetForm = (curr)=>{
//     setForget(!curr);
//   }

//   return (
//     <div className="App">
//       {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//       }

//       {
//         forget == 'false'?<Login onForget={forgetForm}/> :<Forget onForget={forgetForm}/>
//       }

      

//     </div>
//   );
// }

// export default App;

import {useState} from 'react';

const App = () => {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 5));
  };

  return (
    <div>
      <h2>number is: {num}</h2>
      <button onClick={handleClick}>Generate random number</button>
    </div>
  );
};

export default App;
