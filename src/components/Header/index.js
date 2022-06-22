import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPencil } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header className={styles.header}>
      <section
      className={styles.container}
      >
        <div className={styles.userIcon}>
          <FontAwesomeIcon icon={faUser} size="5x" />
        </div>
        <div className={styles.pencil}>
          <FontAwesomeIcon icon={faPencil} />
        </div>
      </section>
      <h2>devel oper</h2>
    </header>
  );
}

export default Header;
