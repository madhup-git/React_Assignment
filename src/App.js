import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import DisplayParagraph from './Components/DisplayDetails';
import Input from './Components/AddDetails';

function App() {
  return (
    <div className="App">
      <DisplayParagraph/>
      <Input/>
    </div>
  );
}

export default App;
