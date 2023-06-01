import React from "react";
export default function CardWelcome() {
  return (
    <div className="container">
      <div className="card-welcome">
        <div className="container">
          <div className="row pl-5 ">
            <div className="col-11">
              <h5 id="logo-brand" className="mt-4">
                Cakrawala.
              </h5>
              <h5 className="tagline-home mt-5">Start your journey with us.</h5>
              <p className="brand-text mb-0">
                We provide what you need to enjoy your hiking in Indonesia.
              </p>
              <div className="card-brand p-4">
                <p className="testy-comment m-2">
                  "What a great trip with my team and I should try again and
                  again next time soon"
                </p>
                <img
                  src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="job-image"
                  className="img-brand float-left"
                />
                <p className="mb-0 name-position">Furky R Syahroni</p>
                <p className="job-position m-2">Travel & hiking enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
