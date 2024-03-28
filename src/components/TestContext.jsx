import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function TestContext() {

  const data = useContext(DataContext);

  console.log('data', data)

  return (
    <div>
      <h1>Test Context</h1>
    </div>
  )
}