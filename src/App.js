import React, {useState} from 'react';
import './App.css';
import Head from './components/Head';
import Table from './components/Table';
import Foot from './components/Foot';
import Modal from './components/Modal';

function App() {
  
  return (
    <div className="App">
      <Head />
      <Table />
      <Foot />
      <Modal />
    </div>
  );
}



export default App;
