import React, { useState } from "react";
import styles from "./UserSettingsListItem.module.css";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
function UserSettingsListItem({ category }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <ListGroup.Item className={styles.listItem} onClick={handleClick}>
      {category.name}

      <FontAwesomeIcon
        style={{ color: "#ad325d", cursor: "pointer" }}
        icon={open ? faAngleDown : faAngleUp}
      />
    </ListGroup.Item>
  );
}

export default UserSettingsListItem;
