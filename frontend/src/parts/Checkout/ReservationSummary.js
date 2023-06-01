import React from "react";

export default function ReservationSummary({ data }) {

  return (
   
    
    <div
      className="col-4 shadow p-3 mb-5 bg-white rounded"
      style={{
        backgroundColor: "white",
        borderRadius: 8,
        height:"100%",
        position: "static",
      }}
    >
      <h3
        className="m-3"
        style={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        Reservation summary
      </h3>

      <div
        className="container"
        // style={{ border: "1px solid black", height: "100vh" }}
      >
        <div
          className="row p-2"
          style={{
            border: "1px solid #A5A5A5",
         
          }}
        >
          <div className="col">
            <h6
              className="checkin"
              style={{
                fontWeight: 700,
                fontFamily: "Poppins",
                color: "#3d3d3d",
                fontSize: 16,
              }}
            >
              CHECK-IN :
            </h6>
            <p
              className="checkin"
              style={{
                color: "#0B165B",
                fontFamily: "Poppins",
                // fontWeight: 580,
                fontSize: 14,
              }}
            >
              Sun, 22 Nov 2022
            </p>
            <h6
              className="checkin mt-4"
              style={{
                fontWeight: 700,
                fontFamily: "Poppins",
                color: "#3d3d3d",
                fontSize: 16,
              }}
            >
              DURATION :
            </h6>
            <h6
              className="date-out"
              style={{
                color: "#0B165B",
                fontSize: 16,
                fontWeight: 500,
                fontFamily: "Poppins",
                float: "left",
                marginTop: 2,
              }}
            >
             3 Day
            </h6>
            <h6
              className="checkin mt-5"
              style={{
                fontWeight: 700,
                fontFamily: "Poppins",
                color: "#3d3d3d",
                fontSize: 16,
              }}
            >
              YOU SELECTED :
            </h6>
            <h6
              className="date-out"
              style={{
                color: "#0B165B",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 14,
              }}
            >
             Merbabu Mountain
            </h6>
            
          </div>
          <div className="col">
            <h6
              className="checkout"
              style={{
                fontWeight: 700,
                fontSize: 16,
                fontFamily: "Poppins",
                color: "#3d3d3d",
              }}
            >
              CHECK-OUT :
            </h6>
            <p
              className="date-out"
              style={{
                color: "#0B165B",
                fontSize: 14,
                fontFamily: "Poppins",
                
              }}
            >
              Wed, 25 Nov 2022
            </p>
            <h6
              className="checkin mt-4"
              style={{
                fontWeight: 700,
                fontFamily: "Poppins",
                color: "#3d3d3d",
                fontSize: 16,
              }}
            >
              TRACK :
            </h6>
            <h6
              className="date-out"
              style={{
                color: "#0B165B",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 14,
              }}
            >
             Selo
            </h6>
          </div>
        </div>
        <div className="row p-2 mt-2">
          <div className="col">
            <h6
              className="checkin"
              style={{
                fontWeight: 600,
                fontFamily: "Poppins",
                color: "#0B165B",
                fontSize: 20,
              }}
            >
              Your price summary :
            </h6>
            <div className="row mt-2">
              <div className="col mt-2">
                <h6 className="titleHiking">Hiking</h6>
                <h6 className="titleAsurance mt-2" style={{ float: "left" }}>
                  Asurance
                </h6>
              </div>
              <div className="col mt-2">
                <h6 className="totalHiking" style={{ textAlign: "right" }}>
                  $ 3
                </h6>
                <h6
                  className="totalAsurance mt-3"
                  style={{ textAlign: "right" }}
                >
                  $ 4
                </h6>
              </div>
            </div>
            <h5
              className="titleTotalPrice mt-2"
              style={{
                float: "left",
                color: "#0ED33A",
                fontWeight: 600,
                fontSize: 18,
                fontFamily: "Poppins",
              }}
            >
              Total Price
            </h5>
            <h5
              className="totalPrice mt-2"
              style={{
                float: "right",
                color: "#0ED33A",
                fontWeight: 600,
                fontSize: 18,
                fontFamily: "Poppins",
              }}
            >
              $ 7
            </h5>
          </div>
        </div>
      </div>
    </div>
        
  );
}
