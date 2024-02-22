"use client";

import React from "react";
import { useRouter } from "next/navigation";

function LoginCard() {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        padding: "50px 80px",
        borderRadius: "10px",
      }}
    >
      <button
        style={{
          padding: "10px",
          margin: "5px",
          borderRadius: "5px",
          backgroundColor: "lightblue",
          width: "100%",
          cursor: "pointer",
          color: "black",
        }}
        onClick={() => router.push("/connect")}
      >
        Login as NGO
      </button>
      <br />
      <button
        style={{
          padding: "10px",
          margin: "5px",
          borderRadius: "5px",
          backgroundColor: "lightblue",
          width: "100%",
          cursor: "pointer",
          color: "black",
        }}
        onClick={() => router.push("/hotel")}
      >
        Login as Restaurant
      </button>
    </div>
  );
}

export default LoginCard;
