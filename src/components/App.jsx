import React, { useState } from "react";

function App() {
  setInterval(currentTime, 1000);
  const newTime = new Date().toLocaleTimeString("it-IT");
  const [time, setTime] = useState(newTime);

  function currentTime() {
    let news = new Date().toLocaleTimeString("it-IT");
    setTime(news);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
