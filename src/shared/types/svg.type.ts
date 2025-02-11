import { MouseEventHandler, ReactNode } from "react";

export interface ISvgProps {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
  fill?: string;
  children?: ReactNode;
}
