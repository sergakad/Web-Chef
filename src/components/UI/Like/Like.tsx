import { FC } from "react";
import { LikeInactiveIcon } from "@/components/SvgIcons/LikeInactiveIcon";
import { LikeActiveIcon } from "@/components/SvgIcons/LikeActiveIcon";
import { TLikeState } from "@/shared/types/like-state.types";
import s from "./Like.module.scss";

interface ILikeProps {
  onClick?: () => void;
  state?: TLikeState;
}

const Like: FC<ILikeProps> = ({
  onClick,
  state = "inactive",
}) => {
  return (
    <div className={s.likeWrapper} onClick={onClick}>
      {state === "inactive" && <LikeInactiveIcon />}
      {state === "active" && <LikeActiveIcon />}
    </div>
  );
};

export { Like };
