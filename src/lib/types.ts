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

interface ArticleFooterProps {
  whoImportant: string;
  whatNext: string;
  biggerPicture: string;
}

interface KeywordTag {
  id: string;
  text: string;
}

interface ArticleImage {
  src: string;
  alt: string;
}
type Section = {
  label: string;
  content: string;
  border: "right" | "left" | "none";
};
interface ArticleCardProps {
  header: ArticleHeaderProps;
  images: ArticleImage[];
  details: ArticleDetailsProps;
  footer: ArticleFooterProps;
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
  images: ArticleImage[];
}

interface ArticleDetailsProps {
  story: string;
  whyItMatters: string;
  whoImportant: string;
  biggerPicture: string;
}

export type {
  Section,
  ArticleFooterProps,
  ArticleImage,
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
  KeywordTag,
};
