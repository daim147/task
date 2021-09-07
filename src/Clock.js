import React, { useEffect, useState } from "react";
import "./App.css";
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function Clock() {
  const [daytoAdd, setDay] = useState("");
  const [hourtoAdd, setHour] = useState("");
  const [minutestoAdd, setMinutes] = useState("");
  const [bg, setBg] = useState(false);
  const [secondstoAdd, setSeconds] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const day = date.getDay();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      setDay(days[day - 1]);
      setHour(hour);
      setMinutes(minutes);
      setSeconds(seconds);
      if (seconds == 0) {
        setBg((bg) => !bg);
      }
    }, 1000);
  }, []);

  return (
    <div className="timer" style={{ backgroundColor: bg ? "red" : "green" }}>
      <h3>{daytoAdd}</h3>
      <h1>
        {hourtoAdd % 12}:{minutestoAdd < 10 ? `0${minutestoAdd}` : minutestoAdd}
        :{secondstoAdd < 10 ? `0${secondstoAdd}` : secondstoAdd}{" "}
        {hourtoAdd < 12 ? "AM" : "PM"}
      </h1>
    </div>
  );
}

export default Clock;
