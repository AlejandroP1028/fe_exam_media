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

export type { TablerIcon, SocialMediaRow };
