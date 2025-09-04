import React from "react";
import Header from "@/components/login/Header";
import LoginCard from "@/components/login/LoginCard";
const page = () => {
  return (
    <div className="w-full h-screen items-center justify-center flex flex-col space-y-6">
      {/* Header */}
      <Header />

      {/* */}
      <LoginCard />
    </div>
  );
};

export default page;
