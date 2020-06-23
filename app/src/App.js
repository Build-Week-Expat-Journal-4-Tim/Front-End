import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpForm from './Components/LoginForms/SignUpForm';
import StoryList from './Components/StoryComponents/StoryList';
import StoryModal  from './Components/StoryComponents/StoryModal';

function App() {
  return (
    <div className="App">
     <SignUpForm/>
     <StoryList/>
     <StoryModal/>
    </div>
  );
}

export default App;
