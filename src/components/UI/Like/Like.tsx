import { FC } from "react";
import { LikeIcon } from "@/components/SvgIcons/LikeIcon";
import { TLikeState } from "@/shared/types/like-state.types";
import s from "./Like.module.scss";


interface ILikeProps {
  onClick?: () => void;
  state?: TLikeState;
}

const Like: FC<ILikeProps> = ({ onClick, state = 'inactive' }) => {
  return (
    <div
      className={s.likeWrapper}
      onClick={onClick}
    >
        <LikeIcon className={s[`like_${state}`]} />
    </div>
  );
};

export { Like };
