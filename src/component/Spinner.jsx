import React from "react";
import "./spinner.css"

const Spinner = () => {
  return (
    <div className="s-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  )
}

export default Spinner;