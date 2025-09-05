import React from "react";
import { IconProps, Icon } from "@tabler/icons-react";

type TablerIcon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<Icon>
>;

interface SocialMediaRow {
  id: number;
  twitter: string;
  facebook: string;
  reddit: string;
  youtube: string;
}

interface SocialSource {
  quantity: number;
  image: string;
  platform: string;
}

type Publishers = Pick<SocialSource, "quantity" | "image">;

interface PublisherRow {
  id: number;
  website: string;
  publication: string;
}

export type {
  TablerIcon,
  SocialMediaRow,
  PublisherRow,
  SocialSource,
  Publishers,
};
