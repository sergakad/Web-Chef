import { FC, useEffect, useState } from "react";
import { Loader } from "@/components/UI/Loader";
import { GetRandomMeal } from "@/api/RandomMealHttp";
import { CarouselSection } from "@/components/UI/CarouselSection";
import { useRandomMealsStore } from "@/shared/stores/random-meals-store";
// import { useLikeMealsStore } from "@/shared/stores/like-meals-store";
import { IMeal } from "@/shared/interfaces/meal.interface";
// import { TLikeState } from "@/shared/types/like-state.types";
import { MealCard } from "./MealCard";

// interface ILikeMeals {
//   idMeal: number;
//   like: TLikeState;
// }

const RandomMealCarouselSection: FC = () => {
  // const like: ILikeMeals[] = [];
  const randomMeals = useRandomMealsStore(
    (state) => state.meals,
  );
  const setRandomMeals = useRandomMealsStore(
    (state) => state.setMeals,
  );
  const [isLoadingRandomMeals, setLoadingRandomMeals] =
    useState<boolean>(true);

  useEffect(() => {
    setLoadingRandomMeals(true);
    setRandomMeals([]);
    (async () => {
      const random: IMeal[] = [];
      const randomPromises = Array.from({ length: 5 }, () =>
        GetRandomMeal(),
      );
      const data = await Promise.all(randomPromises);
      data.forEach((el) => {
        if (Array.isArray(el)) {
          random.push(...el);
        }
      });
      setRandomMeals(random);
      setLoadingRandomMeals(false);
    })();
  }, []);

  return (
    <div>
      {isLoadingRandomMeals ? (
        <Loader />
      ) : (
        <div>
          <CarouselSection desktopItemsPerView={3}>
            {randomMeals.map((meal) => {
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
      )}
    </div>
  );
};

export { RandomMealCarouselSection };
