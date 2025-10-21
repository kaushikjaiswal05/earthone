import React from "react";
import "./snowfall.css";

function Snowfall() {
  return (
    <div className="snowfall">
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="snowflake">
          ❄
        </div>
      ))}
    </div>
  );
}

export default Snowfall;
