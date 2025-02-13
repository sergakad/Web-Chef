import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge, Difficulty, Like } from "@/components/UI";
import s from "./MealCard.module.scss";

interface IMealCardProps {
  id: number;
  name?: string;
  image?: string;
  strCategory?:string;
  strArea?:string;
}

const MealCard: FC<IMealCardProps> = ({
  id,
  name,
  image,
  strCategory, 
  strArea,
}) => {
  return (
    <div className={s.mealCard}>
      <div className={s.like}>
        <Like />
      </div>
      <div className={s.barrier} />
      <div className={s.content}>
        <Link className={s.name} href={`/${id}`}>
          {name}
        </Link>
        <div className={s.badgeWrapper}>
          <Badge>{strCategory}</Badge>
          <Badge>{strArea}</Badge>
        </div>
        <Difficulty />
      </div>

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
    </div>
  );
};

export { MealCard };
