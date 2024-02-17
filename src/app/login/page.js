"use client";

import React from "react";
import { signInWithGoogle } from "@/lib/firebase/auth";

const GoogleAuth = () => {
  const signInWithGoogle = (event) => {
    event.preventDefault();
    signInWithGoogle();
  };
  return (
    <button onClick={() => signInWithGoogle()}>Sign in with Google</button>
  );
};

export default GoogleAuth;
