import LoginCard from "@/components/component/LoginCard";
import React from "react";
import bgImage from "./hero.jpeg";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Image
        src={bgImage}
        placeholder="blur"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.6,
        }}
      />
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
