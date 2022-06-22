import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.userIcon}>
        <FontAwesomeIcon icon={faUser} size="5x" />
      </div>
      <h2>devel oper</h2>
    </header>
  );
}

export default Header;
