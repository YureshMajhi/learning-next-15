"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <button className="bg-blue-500" onClick={() => router.push("/")}>
        Go Home
      </button>
    </div>
  );
};

export default page;
