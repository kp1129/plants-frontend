import React from "react";
import { Spinner } from "reactstrap";

// This is the loading spinner to display
// while the Register form is submitting
const LoadingSpinner = (props) => {
  return (
    <div className="loading-spinner">
      <h1>Getting things ready...</h1>
      <Spinner type="grow" color="info" />
    </div>
  );
};

export default LoadingSpinner;
