import LoginCard from "@/components/component/LoginCard";
import React from "react";
const page = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <LoginCard />
      </div>
    </div>
  );
};

export default page;
