import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

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
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milleseconds = date.getMilliseconds();
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
        {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}.
        {milleseconds < 10
          ? `00${milleseconds}`
          : milleseconds < 100
          ? `0${milleseconds}`
          : milleseconds}{" "}
        {AMPM}
      </h1>
      <Button style={{ marginLeft: "45%" }} onClick={() => setPause(!pause)}>
        pause/unpause
      </Button>
      <h2 className="Cat">Good {TimeDay}!</h2>
    </div>
  );
}

export default TimeOfDay;
