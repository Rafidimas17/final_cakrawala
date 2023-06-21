import React from "react";

export default function Weather({data}) {
  return (
    <section className="container">
      <div
        className=" spacing-sm"
        style={{
          border: "1px solid black",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "10vh",
          borderRadius: 8,
        }}
      >
       <div className="row">
        <div className="col-4">
          <h5>{data.temperature}{" "}C</h5>
        </div>
        <div className="col-8">
          <h5>
          {data.description}
          </h5>
          </div>
       </div>
      </div>
    </section>
  );
}
