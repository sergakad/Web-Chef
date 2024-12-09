import { FC } from "react";
import { useCategoryMealsStore } from "@/shared/stores/category-meals-store";
import { MealCard } from "./MealCard";
import s from "./MealsCardSection.module.scss";

const MealsCardSection: FC = () => {
  const meals = useCategoryMealsStore(
    (state) => state.meals,
  );
  return (
    <div className={s.cardSection}>
      {meals.map((meal) => {
        return (
          <MealCard
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
          />
        );
      })}
    </div>
  );
};

export { MealsCardSection };
