import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { modalContainer } from "../../components/ModalContainer";

export const FormCreateTODO = (props: modalContainer) => {
  const [todoName, setTodoName] = useState<string>("");

  const closeModal = () => {
    setTodoName("");
    props.onCancel && props.onCancel();
  };
  return (
    <>
      <Modal show={props.isVisible} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Nuevo TODO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre del TODO (max 50 carac)</Form.Label>
              <Form.Control
                htmlSize={5}
                type="text"
                placeholder="TODO Name"
                autoFocus
                onChange={(ev) => setTodoName(ev.target.value)}
                isValid={todoName.length < 21}
                isInvalid={todoName.length < 1 || todoName.length >= 21}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Detalle de la actividad</Form.Label>
              <Form.Control as="textarea" rows={3} disabled />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => console.log()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
