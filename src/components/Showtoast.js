import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {Toast} from 'react-bootstrap';

const Showtoast = () =>{
    
        const [showToast, setShowToast] = useState(false);
    
        const mostrar = () => setShowToast(!showToast);
    
        return (
            <div>
                <Button variant="primary" onClick={mostrar}>
                    Mostrar Toast
                </Button>
    
                <Toast show={showToast} onClose={mostrar} className="bg-primary">
                    <Toast.Body>Hola este es un toast</Toast.Body>
                </Toast>
            </div>
        );
}

export default Showtoast;