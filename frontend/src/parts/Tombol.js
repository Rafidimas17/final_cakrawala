import React from "react";
import Button from "react-bootstrap/Button";
export default function Tombol(props) {
  return (
    <div>
      <Button onClick={() => props.clicked()}>Select</Button>
    </div>
  );
}
