export interface Props {
  type: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "inline";
  label: string;
  disabled?: boolean;
}
