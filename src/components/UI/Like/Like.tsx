import { FC } from "react";
import { LikeIcon } from "@/components/SvgIcons/LikeIcon";
import cn from "classnames";
import { TLikeState } from "@/shared/types/like-state.types";
import s from "./Like.module.scss";


interface ILikeProps {
  onClick?: () => void;
  state?: TLikeState;
}

const Like: FC<ILikeProps> = ({ onClick, state = 'inactive' }) => {
  return (
    <button
      className={cn(s.likeWrapper, s[`like_${state}`])}
      onClick={onClick}
    >
      <div className={s.like}>
        <LikeIcon />
      </div>
    </button>
  );
};

export { Like };
