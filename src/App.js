import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import InputBox from './InputBox';
import SearchBox from './SearchBox';

function App() {
  return (
    <div>
      <Header></Header>
      <InputBox></InputBox>
      <SearchBox></SearchBox>
    </div>
  );
}

export default App;
