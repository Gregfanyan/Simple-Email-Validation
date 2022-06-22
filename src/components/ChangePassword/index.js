import React from "react";
import { Button } from "react-bootstrap";
import style from "./ChangePassword.module.css";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChangePassword({ contentClosehandleClick }) {
  return (
    <main className={style.main}>
      <div className={style.textWrapper}>
        <p>
          Du hast eine neue E-Mail-Adresse? Hier kannst du jederzeit deine
          E-Mail-Adresse ändern.
        </p>
        <p>
          Deine aktuelle E-Mail-Adresse:
          <br />
          <strong>grigorfanyan@gmail.com</strong>
        </p>
      </div>
      <Button className={style.button}>E-Mail-Adresse Ändern</Button>
      <div>
        <FontAwesomeIcon onClick={contentClosehandleClick} icon={faAngleUp} />
      </div>
    </main>
  );
}

export default ChangePassword;