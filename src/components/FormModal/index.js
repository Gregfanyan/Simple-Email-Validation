import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import style from "./FormModal.module.css";

function FormModal({ setRegisteredEmail }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeEmail = "E-Mail-Adresse Ändern";
  const [input, setInput] = useState({
    email: "",
    confirmEmail: "",
  });

  const [error, setError] = useState({
    email: "",
    confirmEmail: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateInput = () => {
    if (input.email === "") {
      setError({ ...error, email: "Please enter Email" });
      return false;
    }
    if (input.confirmEmail === "") {
      setError({ ...error, confirmEmail: "Please enter Confrim Email" });
      return false;
    }
    if (input.email !== input.confirmEmail) {
      setError({
        ...error,
        confirmEmail: "Email and Confirm Email does not match.",
      });
      return false;
    }

    return true;
  };

  const clearInputs = () => {
    setInput({
      email: "",
      confirmEmail: "",
    });
  };

  const clearErrors = () => {
    setError({
      email: "",
      confirmEmail: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateInput();
    if (isValid) {
      setRegisteredEmail(input.email);
      clearInputs();
      clearErrors();
    }
  };

  return (
    <>
      <Button className={style.button} onClick={handleShow}>
        {changeEmail}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{changeEmail}</Modal.Title>
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
                name="email"
                placeholder="Email-Addresse"
                autoFocus
                onChange={onInputChange}
                value={input.email}
                isInvalid={error.email}
              />
              {error.email && <span className={style.err}>{error.email}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={onInputChange}
                value={input.confirmEmail}
                type="email"
                name="confirmEmail"
                placeholder="Email-Addresse wiederholen"
                isInvalid={error.confirmEmail}
              />
              {error.confirmEmail && (
                <span className={style.err}>{error.confirmEmail}</span>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className={style.footer}>
          <Button
            onClick={handleSubmit}
            className={style.button}
            variant="primary"
          >
            speichern
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModal;
