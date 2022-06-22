import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import style from "./FormModal.module.css";

function FormModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changePassword = "E-Mail-Adresse Ändern";
  return (
    <>
      <Button className={style.button} onClick={handleShow}>
        {changePassword}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{changePassword}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bitte gib deine neue E-Mail-Adresse zweimal an. Deine alte
          E-Mail-Adresse wird damit für das Portal ungültig. Bei Angeboten oder
          Fragen werden wir dich künfig über die neue E-Mail-Adresse
          kontaktieren. Um wieder alle Funktionen des Portals nutzen zu können,
          musst du deine neue E-Mail-Adresse bestätigen.
        </Modal.Body>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email-Addresse"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email-Addresse wiederholen"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            color: "#ad325d",
          }}
        >
          <Button
            style={{
              backgroundColor: "#ad325d",
            }}
            variant="primary"
            onClick={handleClose}
          >
            speichern
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModal;
