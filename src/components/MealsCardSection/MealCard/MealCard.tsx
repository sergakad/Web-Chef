import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./MealCard.module.scss";

interface IMealProps {
  id:number;
  name?: string;
  image?: string;
}

const MealCard: FC<IMealProps> = ({
  id,
  name,
  image,
}) => {
  return (
    <Link className={s.link} href={`/${id}`}>
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

export { MealCard };
