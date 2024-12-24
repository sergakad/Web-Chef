"use client";

import { GetMeal } from "@/api/MealHttp";
import { useParams } from "next/navigation";
import { MealRecipe } from "@/components/MealRecipe";
import { useMealStore } from "@/shared/stores/meal-store";
import { useEffect } from "react";

export default function MealPage() {
  const { idMeal } = useParams();
  const setMeal = useMealStore((state) => state.setMeals);
  useEffect(() => {
    (async () => {
      const data = await GetMeal(idMeal);
      if (typeof data === "object") {
        console.log(data);
        setMeal(data);
      }
    })();
  }, []);

  return (
    <div>
      <MealRecipe />
    </div>
  );
}
