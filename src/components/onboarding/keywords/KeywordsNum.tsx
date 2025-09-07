import React from "react";

export interface KeywordsProps {
  quantity: number;
  image: string;
  type: string;
}
import Image from "next/image";

const KeywordsNum = ({ quantity, image, type }: KeywordsProps) => {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <Image src={image} alt="" />
      <span>
        {quantity} {type} {" Keywords"}
      </span>
    </div>
  );
};

export default KeywordsNum;
