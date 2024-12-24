import { FC } from "react";
import { Badge } from "@/components/UI/Badge";
import Image from "next/image";
import s from './MealCard.module.scss'

interface IMealProps {
  name: string;
  image: string;
  category: string;
  area: string;
}

const MealCard: FC<IMealProps> = ({
  name,
  category,
  area,
  image,
}) => {
  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <Image
          className={s.image}
          src={image || "/"}
          alt={name || "Meal"}
          sizes="100wv"
          fill
          priority
          draggable={false}
        />
      </div>
      <div className={s.content}>
        <div className={s.badgeWrapper}>
          <Badge>{category}</Badge>
          <Badge>{area}</Badge>
        </div>
      </div>
    </div>
  );
};

export { MealCard };
