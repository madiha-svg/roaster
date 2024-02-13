import React, {useState} from 'react';
import './App.css';
import Head from './components/Head';
import Table from './components/Table';
import Foot from './components/Foot';
import Modal from './components/Modal';
import employees from "./components/Sample.json"; 

function App() {
  const [modalOpen , setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState('');
  const handleShowModal = (address) => {
    setSelectedData(address);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  }
  return (
    <div className="App">
      <Head />
      <Table employees={employees} />
      <Foot />
      <Modal isOpen = {modalOpen} closeModal= {handleCloseModal} address= {selectedData}/>
    </div>
  );
}



export default App;
