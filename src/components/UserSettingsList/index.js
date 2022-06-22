import React from "react";
import styles from "./UserSettingsList.module.css";
import { ListGroup } from "react-bootstrap";
import { defaultListData } from "../../utils/defaultListData";
import UserSettingsListItem from "../UserSettingsListItem";
function UserSettingsList() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.userSettingsContainer}>
        {defaultListData.map((category, i) => (
          <ListGroup
            key={category.name}
            className={styles.listGroup}
            variant="flush"
          >
            <UserSettingsListItem category={category} />
          </ListGroup>
        ))}
      </div>
    </section>
  );
}

export default UserSettingsList;
