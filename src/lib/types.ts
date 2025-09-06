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

interface ArticleCardProps {
  header: ArticleHeaderProps;
  images: string[];
  details: ArticleDetailsProps;
}

interface ArticleHeaderProps {
  rank: number;
  title: string;
  metrics: {
    engagementScore: number;
    velocity: number;
    comments: number;
    shares: number;
    articles: number;
    estimatedTraffic: number;
  };
}

interface ArticleMetric {
  label: string;
  score: string | number;
  border: "right" | "left" | "none";
  flex?: number; // width in px
}

interface DashboardHeaderProps {
  categories: string[];
}
interface ArticleImagesProps {
  images: string[];
}

interface ArticleDetailsProps {
  story: string;
  whyItMatters: string;
  whoImportant: string;
  biggerPicture: string;
}

export type {
  ArticleMetric,
  ArticleDetailsProps,
  ArticleImagesProps,
  ArticleHeaderProps,
  ArticleCardProps,
  DashboardHeaderProps,
  TablerIcon,
  SocialMediaRow,
  PublisherRow,
  SocialSource,
  Publishers,
};
