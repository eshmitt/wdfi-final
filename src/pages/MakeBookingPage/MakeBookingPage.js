import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { SideBar } from "../../common/components/SideBar/SideBar";
import solent from "../../assets/solent.svg";
import lecturer from "../../assets/lecturer.svg";
import room from "../../assets/room.svg";
import counselling from "../../assets/counselling.svg";
import back from "../../assets/back.svg";
import forward from "../../assets/forward.svg";
import styles from "./MakeBookingPage.module.scss";
import { BookingItem } from "../../common/components/BookingItem/BookingItem";
import FormInput from "../../common/components/FormInput/FormInput";
import Button from "../../common/components/Button/Button";
import BookingsContext from "../../BookingsContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const MakeBookingPage = () => {
  const [lecturerSelected, setLecturerSelected] = useState(false);
  const [roomSelected, setRoomSelected] = useState(false);
  const [counsellingSelected, setCounsellingSelected] = useState(false);
  const [lecturerBooked, setLecturerBooked] = useState(false);
  const [roomBooked, setRoomBooked] = useState(false);
  const [counsellingBooked, setCounsellingBooked] = useState(false);
  const [dateSelected, setDateSelected] = useState("");

  const { bookings, addBooking } = useContext(BookingsContext);

  const history = useHistory();

  const renderOptions = () => {
    return (
      <div className={styles.options}>
        <BookingItem
          image={lecturer}
          text="Lecturer"
          onClick={() => setLecturerSelected(true)}
        />
        <BookingItem
          image={room}
          text="Room"
          onClick={() => setRoomSelected(true)}
        />
        <BookingItem
          image={counselling}
          text="Counselling"
          onClick={() => setCounsellingSelected(true)}
        />
      </div>
    );
  };

  const renderLecturerBookingForm = () => {
    return (
      <div className={styles.columnFlex}>
        <div className={styles.arrowNavContainer}>
          <img
            src={back}
            className={styles.arrow}
            onClick={() => {
              setLecturerSelected(false);
              setCounsellingSelected(true);
            }}
          />
          <img src={lecturer} className={styles.option} />
          <img
            src={forward}
            className={styles.arrow}
            onClick={() => {
              setLecturerSelected(false);
              setRoomSelected(true);
            }}
          />
        </div>
        <FormInput placeholder="Please select your course" />
        <FormInput placeholder="Please select your lecturer" />
        <FormInput placeholder="Please enter the subject" />
        <textarea
          placeholder="Please write out your question or message"
          className={styles.message}
        ></textarea>
        <Button onClick={handleLecturerBookingSubmit}>Submit</Button>
      </div>
    );
  };

  const renderLecturerBooked = () => {
    return (
      <div className={`${styles.columnFlex} ${styles.bookingComplete}`}>
        <img src={lecturer} className={styles.option} />
        <div className={styles.completedText}>
          Your message has been sent to your lecturer.
        </div>
        <div className={styles.completedText}>
          You may already have an appointment to check, go to the message tab.
        </div>
        <Button
          className={styles.goButton}
          onClick={() => history.push("/my-bookings")}
        >
          Go
        </Button>
      </div>
    );
  };

  const renderRoomBookingForm = () => {
    return (
      <div className={styles.columnFlex}>
        <div className={styles.arrowNavContainer}>
          <img
            src={back}
            className={styles.arrow}
            onClick={() => {
              setRoomSelected(false);
              setLecturerSelected(true);
            }}
          />
          <img src={room} className={styles.option} />
          <img
            src={forward}
            className={styles.arrow}
            onClick={() => {
              setRoomSelected(false);
              setCounsellingSelected(true);
            }}
          />
        </div>
        <FormInput placeholder="Please enter the room" />
        <FormInput
          value={dateSelected}
          type="date"
          onChange={setDateSelected}
        />
        <Button onClick={handleRoomBookingSubmit}>Submit</Button>
      </div>
    );
  };

  const renderRoomBooked = () => {
    return (
      <div className={`${styles.columnFlex} ${styles.bookingComplete}`}>
        <img src={room} className={styles.option} />
        <div className={styles.completedText}>
          Your room booking is complete.
        </div>
        <div className={styles.completedText}>
          You may already have an appointment to check, go to the message tab.
        </div>
        <Button
          className={styles.goButton}
          onClick={() => history.push("/my-bookings")}
        >
          Go
        </Button>
      </div>
    );
  };

  const renderCounsellingBookingForm = () => {
    return (
      <div className={styles.columnFlex}>
        <div className={styles.arrowNavContainer}>
          <img
            src={back}
            className={styles.arrow}
            onClick={() => {
              setCounsellingSelected(false);
              setRoomSelected(true);
            }}
          />
          <img src={counselling} className={styles.option} />
          <img
            src={forward}
            className={styles.arrow}
            onClick={() => {
              setCounsellingSelected(false);
              setLecturerSelected(true);
            }}
          />
        </div>
        <FormInput placeholder="Please enter the area you wish to discuss" />
        <textarea
          placeholder="Please describe your problem and how we can help"
          className={styles.message}
        ></textarea>
        <Button onClick={handleCounsellingBookingSubmit}>Submit</Button>
      </div>
    );
  };

  const renderCounsellingBooked = () => {
    return (
      <div className={`${styles.columnFlex} ${styles.bookingComplete}`}>
        <img src={lecturer} className={styles.option} />
        <div className={styles.completedText}>
          Your message has been sent to a counsellor.
        </div>
        <div className={styles.completedText}>
          You may already have an appointment to check, go to the messages tab.
        </div>
        <Button
          className={styles.goButton}
          onClick={() => history.push("/my-bookings")}
        >
          Go
        </Button>
      </div>
    );
  };

  const handleLecturerBookingSubmit = () => {
    setLecturerSelected(false);
    setLecturerBooked(true);

    const bookingDate = moment()
      .add(Math.floor(Math.random() * 15) + 1, "days")
      .toDate();
    const booking = {
      start: bookingDate,
      end: bookingDate,
      title: "Tutor Meeting",
    };
    addBooking(booking);
  };

  const handleRoomBookingSubmit = () => {
    setRoomSelected(false);
    setRoomBooked(true);

    const booking = {
      start: dateSelected,
      end: dateSelected,
      title: "Room Booking",
    };
    addBooking(booking);
  };

  const handleCounsellingBookingSubmit = () => {
    setCounsellingSelected(false);
    setCounsellingBooked(true);

    const bookingDate = moment()
      .add(Math.floor(Math.random() * 15) + 1, "days")
      .toDate();
    const booking = {
      start: bookingDate,
      end: bookingDate,
      title: "Counselling",
    };
    addBooking(booking);
  };

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.content}>
        <img src={solent} alt="solent-logo" className={styles.logo} />
        <div className={styles.text}>Booking Appointments</div>
        {!lecturerSelected &&
          !roomSelected &&
          !counsellingSelected &&
          !lecturerBooked &&
          !roomBooked &&
          !counsellingBooked &&
          renderOptions()}
        {lecturerSelected && renderLecturerBookingForm()}
        {lecturerBooked && renderLecturerBooked()}
        {roomSelected && renderRoomBookingForm()}
        {roomBooked && renderRoomBooked()}
        {counsellingSelected && renderCounsellingBookingForm()}
        {counsellingBooked && renderCounsellingBooked()}
      </div>
    </div>
  );
};
