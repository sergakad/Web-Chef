import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge, Difficulty, Like } from "@/components/UI";
import { IMeal } from "@/shared/interfaces/meal.interface";
import cn from "classnames";
import s from "./MealCard.module.scss";

interface IMealCardProps {
  meal: IMeal;
}

const MealCard: FC<IMealCardProps> = ({ meal }) => {
  const {
    idMeal: id,
    strMeal: name,
    strMealThumb: image,
    strCategory: category,
    strArea: area,
    strTags: tags,
  } = meal;

  return (
    <div className={s.mealCard}>
      <div className={s.like}>
        <Like meal={meal} />
      </div>
      <div className={s.barrier} />
      <Link
        className={cn(s.link, s.content)}
        href={`/${id}`}
      >
        <div className={s.name}>{name}</div>
        <div className={s.badgeWrapper}>
          <Badge>{category}</Badge>
          <Badge>{area}</Badge>
          {tags
            ?.split(",")
            .map((tag) => <Badge key={tag}>{tag}</Badge>)}
        </div>
        <Difficulty meal={meal} />
      </Link>
      <Link
        className={cn(s.link, s.imageWrapper)}
        href={`/${id}`}
      >
        <Image
          className={s.image}
          src={image || ""}
          alt="Title"
          sizes="100wv"
          fill
          priority
          draggable={false}
        />
      </Link>
    </div>
  );
};

export { MealCard };
