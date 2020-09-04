import React from "react";
import styles from "./SideBarNavItem.module.scss";

export const SideBarNavItem = ({ image, text, active, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div className={styles.navItem} onClick={handleClick}>
      <img src={image} />
      <div className={`${styles.text} + ${active ? styles.active : ""}`}>
        {text}
      </div>
    </div>
  );
};
