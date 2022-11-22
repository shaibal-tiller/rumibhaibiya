import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2022-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60) / 24),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="App text-5xl bg-black h-[100vh]  flex items-center justify-center">
      {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <div>
          <p className="text-white text-xs">"আর কতকাল একা থাকবে রুমি ভাই" পরিষদ</p>
          <h1 className="text-red-500">আর বাকি</h1>
          <hr />
          <br />
          <p className="text-red-500 bg-black">
            <span >{timeLeft.days}</span>
            <span> Days </span>
            <span>{timeLeft.hours}</span>
            <span> Hours </span>
            <span>{timeLeft.minutes}</span>
            <span> Minutes </span>
            <span>{timeLeft.seconds}</span>
            <span> Seconds </span>
          </p>
          <br />
          <hr />
        </div>
      ) : (
        <p>Time is up 🔥</p>
      )}
    </div>
  );
}

export default App;
