import type { MediaImage } from "@/types";

export interface Props {
    media: MediaImage
    config?: {
        class?: string;
        autoplay?: boolean
        loop?: boolean
        muted?: boolean
        controls?: boolean
    }
}