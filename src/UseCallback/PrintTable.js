import React, { useState, useEffect } from "react";

function PrintTable({ hitungAngka }) {

  const [ rows, setRows ] = useState([])

  useEffect(() => {
    console.log("Fungsi HitungAngka sedang berjalan");
    setRows(hitungAngka())
  }, [hitungAngka]);

  return rows.map((row,index) => {
    return <p key={index}>{row}</p>
  })
}

export default PrintTable;