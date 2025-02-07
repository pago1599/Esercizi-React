import React from "react";
import { useState, useEffect } from "react";

export function Clock() {
  const currentTime = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    currentTime;
  }, []);

  return (
    <div>
      <h2 className="text-6xl border-2 p-4 rounded-lg shadow-md">{time}</h2>
    </div>
  );
}
