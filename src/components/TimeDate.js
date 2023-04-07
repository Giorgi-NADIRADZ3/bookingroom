import { useEffect, useState } from "react";

function TimeDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p> დღე : {date.toLocaleDateString()}</p>
      <p> დრო : {date.toLocaleTimeString()}</p>
    </div>
  );
}

export default TimeDate;
