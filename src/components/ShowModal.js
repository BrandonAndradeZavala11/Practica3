import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

function ShowModal(){
    const[showModal, setShowModal] = useState(false);
    const mostrarModal = () => setShowModal(true);
    const cerrarModal = () => setShowModal(false);

    return(
        <div>
            <Button varient="primary" onClick={mostrarModal}>Mostrar modal</Button>
            <Modal show={showModal} onHide={cerrarModal}>
            <Modal.Header closeButton>
                <Modal.Title>Es un modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>UNA EXPLICACION</p>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ShowModal;