"use client";
import React, { useEffect } from "react";

const error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <div>Error fetching data</div>;
};

export default error;
