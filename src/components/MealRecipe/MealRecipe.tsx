import { FC } from "react";
import { TLikeState } from "@/shared/types/like-state.types";
import { useMealStore } from "@/shared/stores/meal-store";
import { MealCard } from "./MealCard";
import s from "./MealRecipe.module.scss";

interface IMealRecipeProps {
  likeHandler: () => void;
  like: TLikeState;
}

const MealRecipe: FC<IMealRecipeProps> = ({
  likeHandler,
  like
}) => {
  const meal = useMealStore((state) => state.meals);
  return (
    <div>
      <h2 className={s.title}>{meal.strMeal}</h2>
      <div className={s.content}>
        <MealCard
          area={meal.strArea || ""}
          category={meal.strCategory || ""}
          image={meal.strMealThumb}
          name={meal.strMeal}
          likeHandler={likeHandler}
          like={like}
        />
        <div>
          <h3>Recipe</h3>
          <span>{meal.strInstructions}</span>
        </div>
      </div>
    </div>
  );
};

export { MealRecipe };
