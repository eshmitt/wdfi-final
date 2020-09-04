import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Button.module.scss";

export default function Button(props) {
  const { children, busy, className, disabled, onClick } = props;

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`${styles.button} ${className}`}
    >
      {busy ? <FontAwesomeIcon icon={faCircleNotch} spin /> : children}
    </button>
  );
}
