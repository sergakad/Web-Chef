import type { ISvgProps } from "@/shared/types/svg.type";
import { FC } from "react";

export const ArrowLeftIcon: FC<ISvgProps> = () => {
  return (
    <svg
      width="22"
      height="13"
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.63272 12.7415L0.247831 7.12415C-0.0826111 6.77944 -0.0826111 6.22056 0.247831 5.87585L5.63272 0.258531C5.96317 -0.0861769 6.49892 -0.0861769 6.82936 0.258531C7.15981 0.603237 7.15981 1.16212 6.82936 1.50682L2.88895 5.61732L21.1538 5.61732C21.6212 5.61732 22 6.01251 22 6.5C22 6.98749 21.6212 7.38268 21.1538 7.38268L2.88895 7.38268L6.82936 11.4932C7.15981 11.8379 7.15981 12.3968 6.82936 12.7415C6.49892 13.0862 5.96317 13.0862 5.63272 12.7415Z"
        fill="black"
      />
    </svg>
  );
};
