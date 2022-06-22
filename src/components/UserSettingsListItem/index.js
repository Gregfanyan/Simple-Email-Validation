import React, { useState } from "react";
import styles from "./UserSettingsListItem.module.css";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faEnvelope,
  faAt,
  faLock,
  faClipboardList,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import ChangePassword from "../ChangePassword";

function UserSettingsListItem({ category }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const contentClosehandleClick = () => {
    setOpen(false);
  };

  const icon =
    category.icon === "envelope"
      ? faEnvelope
      : category.icon === "at"
      ? faAt
      : category.icon === "clipboard"
      ? faClipboardList
      : category.icon === "lock"
      ? faLock
      : faCircleXmark;
  return (
    <ListGroup.Item className={styles.wrapper}>
      <section className={styles.listItem}>
        <div className={styles.iconWrapper}>
          <div>
            <FontAwesomeIcon icon={icon} size="2x" />
          </div>
          {category.name}
        </div>

        <FontAwesomeIcon
          onClick={handleClick}
          className={styles.icon}
          icon={open ? faAngleDown : faAngleUp}
        />
      </section>
      {open && category.icon === "at" && (
        <ChangePassword contentClosehandleClick={contentClosehandleClick} />
      )}
    </ListGroup.Item>
  );
}

export default UserSettingsListItem;
