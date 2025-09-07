import React from "react";

interface SocialSourcesProps {
  platform?: string;
  quantity: number;
  image: string;
}
import Image from "next/image";

const SocialSources = ({ platform, quantity, image }: SocialSourcesProps) => {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <Image src={image} alt="" />
      <span>
        {quantity} {platform} {platform ? "Influencers" : "Publishers"}
      </span>
    </div>
  );
};

export default SocialSources;
