import { FC } from "react";
import { MealCard } from "@/components/RandomMealCarouselSection/MealCard";
import s from "./Meal.module.scss";

interface IMealProps {
  id: number;
  name?: string;
  category?: string;
  area?: string;
  instructions?: string;
  ingredient?: [string];
  measure?: [string];
  image?: string;
  video?: string;
}

const Meal: FC<IMealProps> = ({
  id,
  name,
  category,
  area,
  instructions,
  ingredient,
  measure,
  image,
  video,
}) => {
  return (
    <div>
      <h2 className={s.title}>{name}</h2>
      <MealCard
        id={id}
        area={area}
        category={category}
        image={image}
      />
    </div>
  );
};

export { Meal };
