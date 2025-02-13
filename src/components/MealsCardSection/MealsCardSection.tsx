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
            id={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
            strArea={meal.strArea}
            strCategory={meal.strCategory}
          />
        );
      })}
    </div>
  );
};

export { MealsCardSection };
