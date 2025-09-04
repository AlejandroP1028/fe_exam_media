import React from "react";
import Image from "next/image";
import logo from "@/../public/logo.svg";
const Header = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <Image src={logo} alt="Logo" width={44} height={48} />
      <div className="flex flex-col items-center">
        <div className="font-sans font-black text-[32px] leading-[120%]">
          Create an Account
        </div>
        <div className="font-sans  text-base leading-[140%]">
          Get instant access and start creating today.
        </div>
      </div>
    </div>
  );
};

export default Header;
