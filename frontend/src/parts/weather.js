import React from "react";

export default function Weather({data}) {
  return (
    <section className="container">
      <div
        className="spacing-sm"
        style={{
          border: "1px solid black",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "10vh",
          borderRadius: 8,
        }}
      >
       {data.weather.value}{" "} {data.weather.unit}
      </div>
    </section>
  );
}
