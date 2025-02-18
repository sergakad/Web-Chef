import { FC, useEffect, useState } from "react";
import { Loader } from "@/components/UI/Loader";
import { CarouselSection } from "@/components/UI/CarouselSection";
import { useRandomMealsStore } from "@/shared/stores/random-meals-store";
import { MealCard } from "./MealCard";

const RandomMealCarouselSection: FC = () => {
  const { randomMeals, getRandomMeals, resetRandomMeals } =
    useRandomMealsStore((state) => state);

  const [isLoadingRandomMeals, setLoadingRandomMeals] =
    useState<boolean>(true);

  useEffect(() => {
    resetRandomMeals();
    getRandomMeals();
  }, []);

  useEffect(() => {
    setLoadingRandomMeals(true);
    if (randomMeals.length > 0)
      setLoadingRandomMeals(false);
  }, [randomMeals]);

  return (
    <div>
      {isLoadingRandomMeals ? (
        <Loader />
      ) : (
        <div>
          <CarouselSection
            desktopItemsPerView={3}
            tabletItemsPerView={3}
          >
            {randomMeals.map((meal) => {
              return (
                <MealCard key={meal.idMeal} meal={meal} />
              );
            })}
          </CarouselSection>
        </div>
      )}
    </div>
  );
};

export { RandomMealCarouselSection };
