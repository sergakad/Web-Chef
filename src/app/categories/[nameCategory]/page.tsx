"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { GetCategoryMeals } from "@/api/MealHttp";
import { useCategoryMealsStore } from "@/shared/stores/category-meals-store";
import { MealsCardSection } from "@/components/MealsCardSection";
import s from "./page.module.scss";

export default function Category() {
  const { nameCategory } = useParams();
  const setMeals = useCategoryMealsStore(
    (state) => state.setMeals,
  );
  const isLoadingMeals = useCategoryMealsStore(
    (state) => state.isLoading,
  );
  const setLoadingMeals = useCategoryMealsStore(
    (state) => state.setLoading,
  );
  const meals = useCategoryMealsStore(
    (state) => state.meals,
  );

  useEffect(() => {
    (async () => {
      const data = await GetCategoryMeals(nameCategory);
      if (Array.isArray(data)) {
        setMeals(data);
        setLoadingMeals(false);
      }
    })();
  }, []);

  return (
    <div>
      <h2 className={s.title}>{nameCategory}</h2>
      {isLoadingMeals ? (
        <div>Loading...</div>
      ) : (
        <MealsCardSection meals={meals}/>
      )}
    </div>
  );
}
