import type { StrapiBlock } from "@/components/blocks/types";

interface GenericLinkProps {
  variant?: "primary" | "secondary" | "inline" | "nav";
  label: string;
  icon?: string;
}

export interface ButtonProps extends GenericLinkProps{
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface AnchorProps extends GenericLinkProps{
  href: string;
}

type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

type ImageFormats = {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
};

export type MediaImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type { StrapiBlock }

export interface AccordionProps {
    id: number
    heading: string
    copy: StrapiBlock
}