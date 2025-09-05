import React from "react";

interface SocialSourcesProps {
  platform?: string;
  quantity: number;
  image: string;
}

const SocialSources = ({ platform, quantity, image }: SocialSourcesProps) => {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <img src={image} alt="" />
      <span>
        {quantity} {platform} {platform ? "Influencers" : "Publishers"}
      </span>
    </div>
  );
};

export default SocialSources;
