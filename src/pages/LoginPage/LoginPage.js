import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import solent from "../../assets/solent.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import FormInput from "../../common/components/FormInput/FormInput";
import Button from "../../common/components/Button/Button";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

export const LoginPage = () => {
  const history = useHistory();

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState(""); // This should be more secure in production.

  const handleLogin = () => {
    history.push("/my-bookings");
  };

  return (
    <div className={styles.container}>
      <img src={solent} alt="solent-logo" className={styles.logo} />
      <div className={styles.headerText}>
        Please use your university credentials
      </div>

      <div className={styles.inputContainer}>
        <FormInput
          value={userName}
          onChange={setUsername}
          placeholder="Username"
        />
        <div className={styles.text}>Forgot username/email</div>
      </div>

      <div>
        <FormInput
          vaue={password}
          onChange={setPassword}
          placeholder="Password"
          type="password"
        />
        <div className={styles.text}>Forgot password</div>
      </div>

      <div className={styles.alternativeText}>or login via social media</div>
      <div className={styles.socialContainer}>
        <img src={facebook} alt="facebook-logo" className={styles.socialLogo} />
        <img src={google} alt="google-logo" className={styles.socialLogo} />
      </div>
      <Button
        disabled={userName === "" && password === ""}
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  );
};
