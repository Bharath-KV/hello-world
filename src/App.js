import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import PortalDemo from './components/PortalDemo';
// import FRParentInput from './components/FRParentInput';
// import FocusInput from './components/FocusInput';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message';
// import Counter from './components/Counter';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';

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
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <PureComp /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName='Ironman' />
      </ErrorBoundary>
      <ErrorBoundary>        
        <Hero heroName='Thor' />
      </ErrorBoundary>
      <ErrorBoundary>        
        <Hero heroName='Joker' />
      </ErrorBoundary> */}
      {/* <ClickCounter name='Bharath' />
      <HoverCounter /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}
      <User render={(isLoggedIn) => isLoggedIn ? 'Bharath' : 'Guest'} /> 
      <CounterTwo render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )} 
      />
      <CounterTwo render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )} 
      />
    </div>
  );
}

export default App;
