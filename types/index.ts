interface GenericLinkProps {
  variant?: "primary" | "secondary" | "inline";
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