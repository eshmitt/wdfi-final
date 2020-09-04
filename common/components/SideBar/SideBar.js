import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./SideBar.module.scss";
import home from "../../../assets/home.svg";
import mybooking from "../../../assets/mybooking.svg";
import mybookingred from "../../../assets/mybooking-red.svg";
import makebooking from "../../../assets/makebooking.svg";
import makebookingred from "../../../assets/makebooking-red.svg";
import tasklist from "../../../assets/tasklist.svg";
import messages from "../../../assets/messages.svg";
import { SideBarNavItem } from "../SideBarNavItem/SideBarNavItem";

export const SideBar = () => {
  const history = useHistory();

  const isActive = (path) => {
    return history.location.pathname === path;
  };

  return (
    <div className={styles.sideBar}>
      <SideBarNavItem image={home} text="Home" />
      <SideBarNavItem
        image={isActive("/my-bookings") ? mybookingred : mybooking}
        text="My Bookings"
        active={isActive("/my-bookings")}
        onClick={() => {
          history.push("/my-bookings");
        }}
      />
      <SideBarNavItem
        image={isActive("/make-booking") ? makebookingred : makebooking}
        text="Make Booking"
        active={isActive("/make-booking")}
        onClick={() => {
          history.push("/make-booking");
        }}
      />
      <SideBarNavItem image={tasklist} text="Tasklist" />
      <SideBarNavItem image={messages} text="Messages" />
    </div>
  );
};
