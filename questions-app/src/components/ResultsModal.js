import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Heading } from '@chakra-ui/react';
import './ResultsModal.css'
import Answers from './HistoryAnswers';
import { useMutation } from 'react-query';
import { postRecord } from '../api/record';
import RecordList  from './HistoryAnswers';

const ResultsModal = ({ mostrarModal, respuestasCorrectas, onClose, nombreUsuario }) => {
    const [showAnswers, setshowAnswers] = useState(false);

    const { mutate: saveRecord, isSuccess, isError } = useMutation(postRecord);

    const handleCerrarModal = () => {
        onClose(); // Cierra el modal
        saveRecord({
            nombre: nombreUsuario, // Nombre del usuario
            puntuacion: respuestasCorrectas // Puntuación del usuario
        });
        
    };
    useEffect(() => {
        if (isSuccess) {
            setshowAnswers(true);
        }
    }, [isSuccess]);
    return (
        <>
            {mostrarModal && (
                <div className="modal-backdrop">
                    <Modal className="modal" isOpen={true} onClose={onClose} >
                        <ModalOverlay />
                        <ModalContent className="results-modal" >
                        <Heading as="h1" size="md" className='resultados'>
                            Resultados
                        </Heading>
                            <ModalBody>
                            <div className="answers">
                               <p>Respuestas correctas:ㅤ</p>
                               <div className="circle">
                                <span className='number'>{respuestasCorrectas}</span>
                                </div>
                            </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button type="submit" className="boton" colorScheme="blue" onClick={handleCerrarModal}>Cerrar</Button>
                            </ModalFooter>
                        </ModalContent>
                        <div className="semicircle"></div>
                    </Modal>
                </div>
            )}
            {showAnswers && <RecordList nombreUsuario={nombreUsuario} />}
            
        </>
    );
};

export default ResultsModal;
