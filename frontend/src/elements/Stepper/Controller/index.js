import React from "react";
import Fade from "react-reveal/Fade";

export default function Controller(props) {
  return (
    <Fade>
      <section className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-3 mt-1">{props.children}</div>
        </div>
      </section>
    </Fade>
  );
}
