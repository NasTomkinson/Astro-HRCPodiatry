import type { AnchorProps, MediaImage } from "@/types";

export interface Props {
  heading: string;
  copy?: string;
  ctas?: AnchorProps[]
  media?: MediaImage
  class?: string
}
