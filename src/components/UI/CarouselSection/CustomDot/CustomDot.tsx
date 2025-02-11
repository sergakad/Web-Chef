import { FC } from "react";
import cn from "classnames";
import s from "./CustomDot.module.scss";

interface ICustomDot {
  onClick: () => void;
  active?: boolean;
}

const CustomDot: FC<ICustomDot> = ({ onClick, active }) => {
  return (
    <button
      onClick={(e) => {
        onClick();
        e.preventDefault();
      }}
      className={cn(s.customDot, {
        [s.customDotActive]: active,
      })}
    >
      {/**/}
    </button>
  );
};

export { CustomDot };
