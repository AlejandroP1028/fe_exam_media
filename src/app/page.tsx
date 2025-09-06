import React from "react";
import CustomButton from "@/components/custom/Button";
import Link from "next/link";
const page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Link href={"/auth/signup"}>
        <CustomButton text="Start Here" />
      </Link>
    </div>
  );
};

export default page;
