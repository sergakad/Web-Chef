"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { GetCategoryMeals } from "@/api/MealHttp";
import { Loader } from "@/components/UI/Loader";
import { Back } from "@/components/UI/Back";
import { useCategoryMealsStore } from "@/shared/stores/category-meals-store";
import { MealsCardSection } from "@/components/MealsCardSection";
import s from "./page.module.scss";

export default function Category() {
  const { nameCategory } = useParams();
  const setMeals = useCategoryMealsStore(
    (state) => state.setMeals,
  );
  const [isLoadingMeals, setLoadingMeals] =
    useState<boolean>(true);
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
    <main>
      <Back/>
      <h2 className={s.title}>{nameCategory}</h2>
      {isLoadingMeals ? (
        <Loader />
      ) : (
        <MealsCardSection meals={meals} />
      )}
    </main>
  );
}
