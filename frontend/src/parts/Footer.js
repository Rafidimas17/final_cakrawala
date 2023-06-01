import React from "react";

import IconText from "./IconText";
import Button from "../elements/Button";
import "../assets/scss/style.scss";
import Fade from "react-reveal";
export default function Footer() {
  return (
    <Fade>
      <div className="container" style={{ borderTop: `1px solid #F0F1F6` }}>
        <div className="row">
          <div className="col-auto mr-5" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              We make your advanture easy and memorable
            </p>
          </div>
          <div className="col-auto mr-5">
            <ul className="list-group">
              <li
                className="list-groups-item"
                style={{ padding: `0.3125rem 0`, border: 0 }}
              >
                <Button className="btn-link" type="link" href="/properties">
                  Book of Mountain
                </Button>
              </li>
              <li
                className="list-groups-item"
                style={{ padding: `0.3125rem 0`, border: 0 }}
              >
                <Button className="btn-link" type="link" href="/payment">
                  Payment
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <ul className="list-group list-group-flush">
              <li
                className="list-groups-item"
                style={{ padding: `0.3125rem 0`, border: 0 }}
              >
                <Button className="btn-link" type="link" href="/properties">
                  Explore us
                </Button>
              </li>
              <li
                className="list-groups-item"
                style={{ padding: `0.3125rem 0`, border: 0 }}
              >
                <Button className="btn-link" type="link" href="/payment">
                  About
                </Button>
              </li>
              <li
                className="list-groups-item"
                style={{ padding: `0.3125rem 0`, border: 0 }}
              >
                <Button className="btn-link" type="link" href="/payment">
                  Privacy Policy
                </Button>
              </li>
              <li
                className="list-groups-item"
                style={{ padding: `0.3125rem 0`, border: 0 }}
              >
                <Button className="btn-link" type="link" href="/payment">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-group list-group-flush">
              <li
                className="list-groups-item"
                style={{ padding: `0.3125rem 0`, border: 0 }}
              >
                <Button className="btn-link" type="link" href="/properties">
                  Getting Touch
                </Button>
              </li>
              <li
                className="list-groups-item"
                style={{ padding: `0.3125rem 0`, border: 0 }}
              >
                <Button className="btn-link" type="link" href="/payment">
                  ckr.support@gmail.com
                </Button>
              </li>
              <li
                className="list-groups-item"
                style={{ padding: `0.3125rem 0`, border: 0 }}
              >
                <Button
                  className="btn-link"
                  type="link"
                  href="/payment"
                  style={{ color: `$gray-500`, fontWeight: 300 }}
                >
                  089-613-260-405
                </Button>
              </li>
              <li
                className="list-groups-item"
                style={{ padding: `0.3125rem 0`, border: 0 }}
              >
                <Button className="btn-link" type="link" href="/payment">
                  Cakrawala, Surabaya
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights" id="copyrights">
            Copyright 2022 • All rights reserved • Cakrawala
          </div>
        </div>
      </div>
    </Fade>
  );
}
