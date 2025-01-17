"use client";

import { GetMeal } from "@/api/MealHttp";
import { useParams } from "next/navigation";
import { MealRecipe } from "@/components/MealRecipe";
import { Loader } from "@/components/UI/Loader";
import { Back } from "@/components/UI/Back";
import { useMealStore } from "@/shared/stores/meal-store";
import { useLikeMealsStore } from "@/shared/stores/like-meals-store";
import { TLikeState } from "@/shared/types/like-state.types";
import { useEffect, useState } from "react";

export default function MealPage() {
  const { idMeal } = useParams();
  const setMeal = useMealStore((state) => state.setMeals);
  const meal = useMealStore((state) => state.meals);
  const [like, setLike] = useState<TLikeState>("inactive");
  const likeMeals = useLikeMealsStore(
    (state) => state.meals,
  );
  const setLikeMeal = useLikeMealsStore(
    (state) => state.setMeals,
  );
  const deleteMeal = useLikeMealsStore(
    (state) => state.deleteMeal,
  );
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await GetMeal(idMeal);
      if (typeof data === "object") {
        setMeal(data);
        const exist = likeMeals.some(
          (el) => el.idMeal === data.idMeal,
        );
        if (exist) {
          setLike("active");
        } else {
          setLike("inactive");
        }
        setLoading(false);
      }
    })();
  }, []);

  const likeHandler = () => {
    if (like === "active") {
      setLike("inactive");
      if (deleteMeal) deleteMeal(meal.idMeal);
    }
    if (like === "inactive") {
      setLike("active");
      setLikeMeal([
        {
          idMeal: meal.idMeal,
          strMeal: meal.strMeal,
          strMealThumb: meal.strMealThumb,
        },
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem(
      "likeMeals",
      JSON.stringify(likeMeals),
    );
  }, [likeMeals]);

  return (
    <main>
      <Back/>
      {isLoading ? (
        <Loader/>
      ) : (
        <MealRecipe likeHandler={likeHandler} like={like} />
      )}
    </main>
  );
}
