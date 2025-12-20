import type { AnchorProps, MediaImage, StrapiBlock } from "@/types";

export interface Props {
    heading: string;
    subheading?: string;
    copy?: StrapiBlock;
    media: MediaImage;
    ctas: AnchorProps[];
}