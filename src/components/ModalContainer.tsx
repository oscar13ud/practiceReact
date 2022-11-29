import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ModalContainer = (props: modalContainer) => {
  return (
    <>
      <Modal show={props.isVisible}>
        <Modal.Body>Desea borrar el elemento?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onCancel}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={props.onAccept}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

interface modalContainer {
  isVisible: boolean;
  onAccept?: () => void;
  onCancel?: () => void;
}
