import React, { useState, useEffect } from "react";

export default function Effect() {
  const [getPacar, setPacar] = useState(0);
  const [pacarSaya, setNamaPacar] = useState("");
  useEffect(() => {
    if (getPacar < 0) {
      setNamaPacar("Muhammad");
    } else {
      setNamaPacar("Ibrahim");
    }
  }, [getPacar]);

  return (
    <>
      <h5>{getPacar}</h5>
      <h1>{pacarSaya}</h1>
      <button onClick={() => setPacar((prev) => prev + 1)}>Tambah</button>
      <button onClick={() => setPacar((prev) => prev - 1)}>Kurang</button>
    </>
  );
}
