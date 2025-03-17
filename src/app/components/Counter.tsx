"use client";
import { useAuth } from "@clerk/nextjs";
import React, { useState } from "react";

const Counter = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  if (!isLoaded || !userId) return null;

  console.log("Counter Component");
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </>
  );
};

export default Counter;
