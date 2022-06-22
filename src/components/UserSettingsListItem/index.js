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
function UserSettingsListItem({ category }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
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
    <ListGroup.Item className={styles.listItem} onClick={handleClick}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={icon} size="2x" />
        {category.name}
      </div>

      <FontAwesomeIcon
        style={{ color: "#ad325d", cursor: "pointer" }}
        icon={open ? faAngleDown : faAngleUp}
      />
    </ListGroup.Item>
  );
}

export default UserSettingsListItem;
