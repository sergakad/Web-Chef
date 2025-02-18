import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/UI/Badge";
import { Difficulty } from "@/components/UI/Difficulty";
import { Like } from "@/components/UI/Like";
import { IMeal } from "@/shared/interfaces/meal.interface";
import s from "./MealCard.module.scss";

interface IMealProps {
  meal: IMeal;
}

const MealCard: FC<IMealProps> = ({ meal }) => {
  const {
    idMeal: id,
    strMeal: name,
    strArea: area,
    strCategory: category,
    strMealThumb: image,
  } = meal;

  return (
    <div>
      <div className={s.likeWrapper}>
        <Like meal={meal} />
      </div>
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
          <div className={s.content}>
            <h3 className={s.name}>{name}</h3>
            <div className={s.information}>
              <div className={s.badgeWrapper}>
                <Badge>{category}</Badge>
                <Badge>{area}</Badge>
              </div>
              <Difficulty meal={meal} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export { MealCard };
