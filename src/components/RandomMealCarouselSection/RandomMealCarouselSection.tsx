import { FC } from "react";
import { CarouselSection } from "@/components/UI/CarouselSection";
import { useRandomMealsStore } from "@/shared/stores/random-meals-store";
import { MealCard } from "./MealCard";
// import s from './RandomMealCarouselSection.module.scss'

const RandomMealCarouselSection: FC = () => {
  const meals = useRandomMealsStore((state) => state.meals);
  return (
    <div>
      <CarouselSection desktopItemsPerView={3}>
        {meals.map((meal) => {
          return (
            <MealCard
              key={meal.idMeal}
              id={meal.idMeal}
              name={meal.strMeal}
              category={meal.strCategory}
              area={meal.strArea}
              image={meal.strMealThumb}
            />
          );
        })}
      </CarouselSection>
    </div>
  );
};

export { RandomMealCarouselSection };
