import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import style from "./FormModal.module.css";

function FormModal() {
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
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email";
          } else if (input.confirmEmail && value !== input.confirmEmail) {
            stateObj["confirmEmail"] =
              "Email and Confirm Email does not match.";
          } else {
            stateObj["confirmEmail"] = input.confirmEmail
              ? ""
              : error.confirmEmail;
          }
          break;

        case "confirmEmail":
          if (!value) {
            stateObj[name] = "Please enter Confirm Email.";
          } else if (input.email && value !== input.email) {
            stateObj[name] = "Email and Confirm Email does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
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
                onBlur={validateInput}
                value={input.email}
              />
              {error.email && <span className={style.err}>{error.email}</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={onInputChange}
                value={input.confirmEmail}
                onBlur={validateInput}
                type="email"
                name="confirmEmail"
                placeholder="Email-Addresse wiederholen"
              />
              {error.confirmEmail && (
                <span className={style.err}>{error.confirmEmail}</span>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className={style.footer}>
          <Button
            style={{
              backgroundColor: "#ad325d",
            }}
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
