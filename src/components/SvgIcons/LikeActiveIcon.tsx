import { ISvgProps } from "@/shared/types/svg.type";
import { FC } from "react";

export const LikeActiveIcon: FC<ISvgProps> = ({
  className,
  children,
}) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.81239 1.22854C7.40233 -0.587017 3.98686 -0.382492 1.80333 1.84212C-0.601276 4.29197 -0.601271 8.26395 1.80334 10.7138L10.4085 19.4809C10.5722 19.6477 10.7953 19.7172 11.0085 19.6893C11.1783 19.6793 11.3452 19.6082 11.4749 19.4761L20.0801 10.7091C22.4847 8.25921 22.4847 4.28723 20.0801 1.83738C17.895 -0.388872 14.4761 -0.592053 12.0657 1.22783C11.8236 1.41061 11.5917 1.6138 11.3723 1.83739L10.9394 2.27839L10.5112 1.84212C10.2901 1.61689 10.0564 1.41236 9.81239 1.22854Z"
        fill="#FF0000"
      />
      {children}
    </svg>
  );
};
