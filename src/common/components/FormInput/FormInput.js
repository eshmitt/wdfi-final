import React from "react";
import styles from "./FormInput.module.scss";

export default function FormInput({
  name,
  value,
  placeholder,
  className,
  type,
  onChange,
}) {
  const renderInput = () => {
    return (
      <input
        className={`${styles.input} ${className}`}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type || "text"}
        onChange={handleInputChange}
      />
    );
  };

  const handleInputChange = (e) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div>
      <div className={className}>{renderInput()}</div>
    </div>
  );
}
