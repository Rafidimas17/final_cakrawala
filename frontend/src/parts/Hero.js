import React from "react";
import { hiking } from "../assets";
import { frame } from "../assets";
import { IconCities } from "../assets";
import { IconHiker } from "../assets";
import { IconMountain } from "../assets";
import Fade from "react-reveal";
import Button from "../elements/Button";
import formatNumber from "../utils/formatNumber";
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 500 }}>
            <h2
              className="h2"
              style={{
                marginLeft: 10,
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: 40,
                color: "#011A4B",
              }}
            >
              Forget Busy Work, <br />
              Start Next Advanture
            </h2>
            <p
              className="mb-5 text-gray-900"
              style={{
                marginLeft: 10,
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              We provide what you need to enjoy your hiking in Indonesia. Let’s
              get started !
            </p>
            <Button
              className="btn px-5"
              style={{
                marginLeft: 10,
                width: 205,
                height: 45,
                backgroundColor: "#3252DF",
                color: "white",
                fontFamily: "Poppins",
                fontSize: 15,
                boxShadow: "0px 0px 15px rgba(35, 17, 238, 0.42)",
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row mt-5">
              <div
                className="col-auto"
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                <img
                  width="48"
                  height="48"
                  src={IconMountain}
                  alt={`${props.data.mountain} Mountain`}
                />
                <h6
                  className="mt-3"
                  style={{
                    fontSize: 18,
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  {formatNumber(props.data.mountain)}{" "}
                  <span
                    className="text-gray-500 font-weight-light"
                    style={{
                      fontSize: 18,
                      fontFamily: "Poppins",
                      fontWeight: 300,
                    }}
                  >
                    Mountain
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="48"
                  height="48"
                  src={IconHiker}
                  alt={`${props.data.hiker} Hiker`}
                />
                <h6
                  className="mt-3"
                  style={{
                    fontSize: 18,
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  {formatNumber(props.data.hiker)}{" "}
                  <span
                    className="text-gray-500 font-weight-light"
                    style={{
                      fontSize: 18,
                      fontFamily: "Poppins",
                      fontWeight: 300,
                    }}
                  >
                    Hiker
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="48"
                  height="48"
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6
                  className="mt-3"
                  style={{
                    fontSize: 18,
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  {formatNumber(props.data.cities)}{" "}
                  <span
                    className="text-gray-500 font-weight-light"
                    style={{
                      fontSize: 18,
                      fontFamily: "Poppins",
                      fontWeight: 300,
                    }}
                  >
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5" style={{ marginTop: 10, marginLeft: 70 }}>
            <div
              style={{
                width: 492,
                height: 396,
                marginTop: 30,
                marginRight: 90,
              }}
            >
              <img
                src={hiking}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{
                  width: 492,
                  height: 396,
                  margin: "-30px 0 0 -30px",
                  zIndex: 1,
                  borderTopLeftRadius: 150,
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  borderTopRightRadius: 15,
                  // marginRight: 20,
                }}
              />
              <img
                src={frame}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{
                  margin: "0 -15px -15px 0",
                  borderTopLeftRadius: 150,
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  borderTopRightRadius: 15,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
