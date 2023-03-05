import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Notes from '../components/Notes/Notes';
import Modal from '../components/Modal/Modal';


export default function MainPage() {
  const [modalStatus, setModalStatus] = useState("none");

  return (
    <>
      <Header />
      <Form />
      <Notes setModalStatus={setModalStatus} />
      <Modal status={modalStatus} setModalStatus={setModalStatus} />
    </>
  )
}
