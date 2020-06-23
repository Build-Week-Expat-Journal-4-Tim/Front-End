import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpForm from './Componets/SignUpForm'
import { useForm } from "react-hook-form";


function App() {
  return (
    <div className="App">
     <h1>Hello</h1>
     <SignUpForm/>

    </div>
  );
}

export default App;
