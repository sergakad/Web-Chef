import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./SearchMealCardMini.module.scss";

interface ISearchMealCardMiniProps {
  id: number;
  name?: string;
  image?: string;
  onClick?: () => void;
}

const SearchMealCardMini: FC<ISearchMealCardMiniProps> = ({
  id,
  name,
  image,
  onClick,
}) => {
  return (
    <Link
      className={s.link}
      href={`/${id}`}
      onClick={onClick}
    >
      <div className={s.content}>
        <div className={s.imageWrapper}>
          <Image
            className={s.image}
            src={image || ""}
            alt="Title"
            sizes="100wv"
            fill
            priority
            draggable={false}
          />
        </div>
        <span className={s.name}>{name}</span>
      </div>
    </Link>
  );
};

export { SearchMealCardMini };
