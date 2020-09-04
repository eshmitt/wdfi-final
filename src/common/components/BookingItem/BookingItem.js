import React from "react";
import styles from "./BookingItem.module.scss";

export const BookingItem = ({ image, text, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div className={styles.item} onClick={handleClick}>
      <img src={image} className={styles.image} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};
