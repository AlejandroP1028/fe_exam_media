import React from "react";
import Header from "@/components/signup/Header";
import SignupCard from "@/components/signup/SignupCard";
const page = () => {
  return (
    <div className="w-full h-screen items-center justify-center flex flex-col space-y-6">
      {/* Header */}
      <Header />

      {/* */}
      <SignupCard />
    </div>
  );
};

export default page;
