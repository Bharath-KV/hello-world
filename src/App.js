import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome /> */}
      {/* <Hello name='BS'>
        <p>Welcome</p>
      </Hello> */}
      {/* <Message />
      <Counter addValue='2' /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
