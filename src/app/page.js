import LoginCard from "@/components/component/LoginCard";
import React from "react";
const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center my-6">
        Welcome to Meal Matters
      </h1>
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
