import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';

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
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      <Form />
    </div>
  );
}

export default App;
