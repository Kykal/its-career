import React from 'react';

//Components
import Header from './components/Header';
import Main   from './components/Main';


//Main component content
const App = (): JSX.Element => {
  //Main component render
  return (
    <>
      <Header />
      <Main />
    </>
  );
};


export default App; //Export main component
