import { FC } from "react";
import Link from "next/link";
import { Badge } from "@/components/UI/Badge";
import Image from "next/image";
import s from "./RandomMealCard.module.scss";

interface IRandomMealProps {
  id?: number;
  name?: string;
  image?: string;
  category?: string;
  area?: string;
}

const RandomMealCard: FC<IRandomMealProps> = ({
  id,
  name,
  category,
  area,
  image,
}) => {
  return (
    <Link href={`${id}`}>
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
      <h3>{name}</h3>
      <div className={s.badgeWrapper}>
        <Badge>{category}</Badge>
        <Badge>{area}</Badge>
      </div>
    </Link>
  );
};

export { RandomMealCard };