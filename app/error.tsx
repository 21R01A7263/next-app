"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  return (
    <>
      <div>An exception occurred</div>
      <button className="btn" onClick={() => reset()}>
        Try Again
      </button>
    </>
  );
};

export default ErrorPage;
