import { FC } from "react";
import { CarouselSection } from "@/components/UI/CarouselSection";
import { useMealsStore } from "@/shared/stores/meals-store";
import { RandomMealCard } from "./RandomMealCard";
// import s from './RandomMealCarouselSection.module.scss'

const RandomMealCarouselSection: FC = () => {
  const meals = useMealsStore((state) => state.meals);
  return (
    <div>

      <CarouselSection desktopItemsPerView={3}>
        {meals.map((meal) => {
          return (
            <RandomMealCard
              key={meal.idMeal}
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
