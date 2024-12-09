"use client";

import { GetMeal } from "@/api/MealHttp";
import { useParams } from "next/navigation";
import { Meal } from "@/components/Meal";
import { useMealStore } from "@/shared/stores/meal-store";
import { useEffect } from "react";

export default function MealPage() {
  const { idMeal } = useParams();
  const meal = useMealStore((state) => state.MealRecept);
  const setMeal = useMealStore((state) => state.setMealRecept);
  useEffect(() => {
    (async () => {
      const data = await GetMeal(idMeal);
      if (Array.isArray(data)) {
        console.log(data);
        setMeal(data)
      }
    })();
  }, []);

  return (
    <div>
      <Meal
        id={meal.idMeal}
        name={meal.strMeal}
        area={meal.strArea}
        category={meal.strCategory}
        image={meal.strMealThumb}
        instructions={meal.strInstructions}
        video={meal.strYoutube}
      />
    </div>
  );
}
