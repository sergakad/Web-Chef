import { FC } from "react";
import { IMeal } from "@/shared/interfaces/meal.interface";
import { MealCard } from "./MealCard";
import s from "./MealsCardSection.module.scss";

interface IMealsCardSectionProps {
  meals: IMeal[];
}

const MealsCardSection: FC<IMealsCardSectionProps> = ({
  meals,
}) => {

  return (
    <div className={s.cardSection}>
      {meals.map((meal) => {
        return (
          <MealCard
            key={meal.idMeal}
            meal={meal}
          />
        );
      })}
    </div>
  );
};

export { MealsCardSection };
