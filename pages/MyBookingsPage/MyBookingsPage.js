import React, { useState, useContext } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { SideBar } from "../../common/components/SideBar/SideBar";
import styles from "./MyBookingsPage.module.scss";
import solent from "../../assets/solent.svg";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BookingsContext from "../../BookingsContext";

export const MyBookingsPage = () => {
  const localizer = momentLocalizer(moment);
  const bookings = useContext(BookingsContext);

  const getEventStyle = (event, start, end, isSelected) => {
    let colour;
    switch (event.title) {
      case "Tutor Meeting":
        colour = "red";
        break;
      case "Counselling":
        colour = "green";
        break;
      case "Room Booking":
        colour = "blue";
      default:
        break;
    }
    return {
      style: {
        backgroundColor: colour,
        borderRadius: "15px",
        opacity: 0.8,
        color: "white",
        border: "0px",
        display: "block",
      },
    };
  };

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.calendarContainer}>
        <img src={solent} alt="solent-logo" className={styles.logo} />
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={bookings}
          style={{ height: "500" }}
          eventPropGetter={getEventStyle}
        />
      </div>
    </div>
  );
};
