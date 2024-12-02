"use client";

import { useEffect } from "react";
import { CategoryCardSection } from "@/components/CategoryCardSection";
import { RandomMealCarouselSection } from "@/components/RandomMealCarouselSection";
import { useCategoriesStore } from "@/shared/stores/categories-store";
import { useMealsStore } from "@/shared/stores/meals-store";
import { GetCategories } from "@/api/CategoryHttp";
import { GetRandomMeal } from "@/api/RandomMealHttp";
import css from "./page.module.scss";

export default function Home() {
  const isLoadingCategories = useCategoriesStore(
    (state) => state.isLoading,
  );
  const setLoadingCategories = useCategoriesStore(
    (state) => state.setLoading,
  );
  const setCategories = useCategoriesStore(
    (state) => state.setCategories,
  );
  const isLoadingMeals = useMealsStore(
    (state) => state.isLoading,
  );
  const setLoadingMeals = useMealsStore(
    (state) => state.setLoading,
  );
  const setMeals = useMealsStore((state) => state.setMeals);

  useEffect(() => {
    (async () => {
      const data = await GetCategories();
      if (Array.isArray(data)) {
        setCategories(data);
        setLoadingCategories(false);
      }
    })();
    (async () => {
      const data = await GetRandomMeal();
      if (Array.isArray(data)) {
        setMeals(data);
        setMeals(data);
        setMeals(data);
        setMeals(data);
        setMeals(data);
        setLoadingMeals(false);
      }
    })();
  }, []);

  return (
    <main className={css.main}>
      {isLoadingMeals ? (
        <div>Loading...</div>
      ) : (
        <RandomMealCarouselSection />
      )}
      {isLoadingCategories ? (
        <div>Loading...</div>
      ) : (
        <CategoryCardSection />
      )}
    </main>
  );
}
