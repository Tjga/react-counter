import React from 'react';
import Navbar from './components/Navbar'
import NavItem from './components/NavItem'


function App() {
  return (
    <div className="App">
      <h1>hello</h1>
        <Navbar />
        <NavItem name='jerry' age="13"/>
    </div>
  );
}

export default App;
