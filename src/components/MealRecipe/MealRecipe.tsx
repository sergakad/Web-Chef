import { FC } from "react";
import Image from "next/image";
import { useMealStore } from "@/shared/stores/meal-store";
import { Difficulty, Badge, Like } from "@/components/UI";
import s from "./MealRecipe.module.scss";

const MealRecipe: FC = () => {
  const meal = useMealStore((state) => state.meal);
  
  return (
    <div className={s.recipeCard}>
      <div className={s.recipeSection}>
        <div className={s.imageWrapper}>
          <div className={s.likeWrapper}>
            <Like meal={meal} />
          </div>
          <Image
            className={s.image}
            src={meal.strMealThumb || "/"}
            alt={meal.strMeal || "Meal"}
            sizes="100wv"
            fill
            priority
            draggable={false}
          />
        </div>
        <div className={s.recipe}>
          <h3>Recipe:</h3>
          <span>{meal.strInstructions}</span>
        </div>
      </div>
      <div className={s.ingredientsSection}>
        <h2 className={s.title}>{meal.strMeal}</h2>
        <div className={s.mealInfoWrapper}>
          <div className={s.mealInfo}>
            <div className={s.badgeWrapper}>
              <Badge>{meal.strCategory}</Badge>
              <Badge>{meal.strArea}</Badge>
              {meal.strTags
                ?.split(",")
                .map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
            </div>
            <div className={s.difficultyWrapper}>
              <span>Difficulty:</span>
              <Difficulty
                meal={meal}
              />
            </div>
          </div>
          <div className={s.ingredientsWrapper}>
            <h3>Ingredients:</h3>
            <div className={s.ingredientsWeight}>
              <ul className={s.ingredients}>
                {meal.strIngredient?.map(
                  (ingredient, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index} className={s.li}>
                      <div className={s.ingredient}>
                        {ingredient}
                      </div>
                      <div className={s.line} />
                      <div className={s.weight}>
                        {meal.strMeasure &&
                          meal.strMeasure[index]}
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MealRecipe };
