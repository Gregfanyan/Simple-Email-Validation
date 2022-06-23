import React, { useState } from "react";
import style from "./ChangeEmail.module.css";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormModal from "../FormModal";
function ChangeEmail({ contentClosehandleClick }) {
  const [registeredEmail, setRegisteredEmail] = useState(
    "grigorfanyan@gmail.com"
  );
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
          <strong>{registeredEmail}</strong>
        </p>
      </div>
      <FormModal setRegisteredEmail={setRegisteredEmail} />
      <div>
        <FontAwesomeIcon onClick={contentClosehandleClick} icon={faAngleUp} />
      </div>
    </main>
  );
}

export default ChangeEmail;
