import React from "react";
import Fade from "react-reveal/Fade";
import Breadcrumb from "../elements/Breadcrumb";
export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-auto text-center">
            <h1 className="h2" style={{ fontFamily: "Poppins", marginTop: 20 }}>
              {data.name}
            </h1>
            <span className="text-gray-600" style={{ fontFamily: "Poppins" }}>
              {data.city},{data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}
