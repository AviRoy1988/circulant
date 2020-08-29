import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./withspinner.style";

const WithSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return spinner;
};

export default WithSpinner;