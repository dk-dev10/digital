import React, { useState } from 'react';

import Button from './Components/Button';
import Modal from './Components/Modal';

import './index.css';

const App = () => {
  const [modal, setModal] = useState(false);

  function handleModalShow() {
    setModal(true);
  }
  function handleModalHide() {
    setModal(false);
  }

  return (
    <div className='container'>
      <Button onClick={handleModalShow}>Налоговый вычет</Button>
      <Modal modal={modal} handleModal={handleModalHide} />
    </div>
  );
};

export default App;
