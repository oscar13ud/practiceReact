import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { modalContainer } from "../../components/ModalContainer";

export const FormCreateTODO = (props: modalContainer) => {
  const [todoName, setTodoName] = useState<string>("");
  const [enableButton, setEnableButton] = useState<boolean>(true);
  const maxCharacters = 21;

  useEffect(() => {
    setEnableButton(todoName.length < 1 || todoName.length >= 21);
  }, [todoName]);

  const closeModal = () => {
    setTodoName("");
    props.onCancel && props.onCancel();
  };

  const addNewTodo = () => {
    props.onAdd && props.onAdd(todoName);
    closeModal();
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
              <Form.Label>
                Nombre del TODO (max {maxCharacters} carac)
              </Form.Label>
              <Form.Control
                htmlSize={5}
                type="text"
                placeholder="TODO Name"
                autoFocus
                onChange={(ev) => setTodoName(ev.target.value)}
                isValid={!enableButton}
                isInvalid={enableButton}
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
          <Button
            disabled={enableButton}
            variant="primary"
            onClick={addNewTodo}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
