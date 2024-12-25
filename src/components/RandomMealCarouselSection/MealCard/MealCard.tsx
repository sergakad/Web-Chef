import { FC } from "react";
import Link from "next/link";
import { Badge } from "@/components/UI/Badge";
import Image from "next/image";
import { Like } from "@/components/UI/Like";
import s from "./MealCard.module.scss";

interface IMealProps {
  id: number;
  name?: string;
  image?: string;
  category?: string;
  area?: string;
}

const MealCard: FC<IMealProps> = ({
  id,
  name,
  category,
  area,
  image,
}) => {
  return (
    <Link className={s.link} href={`${id}`}>
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

      <div className={s.content}>
        <h3 className={s.name}>{name}</h3>
        <div className={s.badgeWrapper}>
          <Badge>{category}</Badge>
          <Badge>{area}</Badge>
        </div>
      </div>
      <div className={s.likeWrapper}>
        <Like />
      </div>
    </Link>
  );
};

export { MealCard };
