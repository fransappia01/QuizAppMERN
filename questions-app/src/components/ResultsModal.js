import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Heading } from '@chakra-ui/react';
import './ResultsModal.css'
import Answers from './HistoryAnswers';
import { postRecord } from '../api/record';
import RecordList  from './HistoryAnswers';

const ResultsModal = ({ mostrarModal, respuestasCorrectas, onClose, nombreUsuario }) => {
    const [showAnswers, setshowAnswers] = useState(false);

    const handleCerrarModal = () => {
        onClose(); // Cierra el modal
        setshowAnswers(true); 
        
        try {
            // Llama a la función postRecord para guardar la puntuación
            postRecord({
                nombre: nombreUsuario, // Nombre del usuario 
                puntuacion: respuestasCorrectas // Puntuación del usuario
            });
            console.log('Puntuación guardada correctamente', nombreUsuario);
        } catch (error) {
            console.error('Error al guardar la puntuación:', error);
        }
    };
    return (
        <>
            {mostrarModal && (
                <div className="modal-backdrop">
                    <Modal className="modal" isOpen={true} onClose={onClose} >
                        <ModalOverlay />
                        <ModalContent className="results-modal">
                        <Heading as="h1" size="md">
                            Resultados
                        </Heading>
                            <ModalBody>
                                <p className="answers">Respuestas correctas: {respuestasCorrectas}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button type="submit" className="boton" colorScheme="blue" onClick={handleCerrarModal}>Cerrar</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </div>
            )}
            {showAnswers && <RecordList nombreUsuario={nombreUsuario} />}
            
        </>
    );
};

export default ResultsModal;
