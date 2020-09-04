import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import moment from "moment";
import "./App.scss";
import BookingsContext from "./BookingsContext";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MyBookingsPage } from "./pages/MyBookingsPage/MyBookingsPage";
import { MakeBookingPage } from "./pages/MakeBookingPage/MakeBookingPage";

function App() {
  const [bookings, updateBookings] = useState([
    {
      id: 0,
      start: moment().add(1, "days").toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Counselling",
    },
    {
      id: 1,
      start: moment().add(3, "days").toDate(),
      end: moment().add(3, "days").toDate(),
      title: "Room Booking",
    },
  ]);
  const addBooking = (booking) => {
    const updatedBookings = [...bookings, booking];
    updateBookings(updatedBookings);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/my-bookings">
          <BookingsContext.Provider value={bookings}>
            <MyBookingsPage />
          </BookingsContext.Provider>
        </Route>
        <Route exact path="/make-booking">
          <BookingsContext.Provider value={{ bookings, addBooking }}>
            <MakeBookingPage />
          </BookingsContext.Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
