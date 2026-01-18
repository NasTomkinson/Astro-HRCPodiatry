import type { AnchorProps, MediaImage, StrapiBlock } from "@/types"

export interface Props {
    heading: string;
    subheading?: string;
    copy?: StrapiBlock;
    ctas: AnchorProps[];
    media: MediaImage;
    reverseOrder?: boolean;
}