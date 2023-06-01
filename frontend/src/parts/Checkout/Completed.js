import React from "react";
import Fade from "react-reveal";
import { ImageCompleted } from "../../assets";
export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={ImageCompleted}
              className="img-fluid"
              alt="completed checkout"
            />
            <p className="text-gray-500">
              We wil inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
