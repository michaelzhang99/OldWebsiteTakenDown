import React, { useState, useEffect } from "react";

function TimeOfDay() {
  const [date, setDate] = useState(new Date());
  const [pause, setPause] = useState(false);
  useEffect(() => {
    let interval;
    if (!pause) {
      interval = setInterval(() => setDate(new Date()), 1);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [pause]);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milleseconds = date.getMilliseconds();
  const day = date.getDay();
  let TimeDay;
  let AMPM;

  if (hours < 12) {
    TimeDay = "Morning";
  } else if (hours >= 12 && hours < 17) {
    TimeDay = "Evening";
  } else {
    TimeDay = "Night";
  }
  AMPM = hours > 12 ? "PM" : "AM";

  if (hours > 12) {
    hours = hours - 12;
  }

  return (
    <div>
      <h1 className="Tiger">
        {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}.
        {milleseconds} {AMPM}
      </h1>
      <button onClick={() => setPause(!pause)}>pause/unpause</button>
      <h2 className="Cat">Good {TimeDay}!</h2>
    </div>
  );
}

export default TimeOfDay;
