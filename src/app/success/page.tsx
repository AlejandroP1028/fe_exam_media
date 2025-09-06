import React from "react";
import Image from "next/image";
import CustomButton from "@/components/custom/Button";
import Link from "next/link";
const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-6 w-[420px]">
        <Image src={"/logo.svg"} alt="Logo" width={44} height={48} />
        <div className="flex flex-col items-center">
          <div className="font-sans font-black text-[32px] leading-[120%]">
            You're all set!
          </div>
          <div className="font-sans text-center text-sm text-[#3D3D3A]] leading-[140%]">
            Your account is ready. Start creating engaging newsletters. Connect
            with your audience and grow your brand!
          </div>
        </div>
      </div>
      <Link href={"/scoup/dashboard"}>
        <CustomButton text="GO TO YOUR NEWSLETTER DASHBOARD" className="mt-6" />
      </Link>
    </div>
  );
};

export default page;
