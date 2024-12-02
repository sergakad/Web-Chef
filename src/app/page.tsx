"use client";

import { useEffect } from "react";
import { CategoryCardSection } from "@/components/CategoryCardSection";
import { RandomMealCarouselSection } from "@/components/RandomMealCarouselSection";
import { useCategoriesStore } from "@/shared/stores/categories-store";
import { useMealsStore } from "@/shared/stores/meals-store";
import { GetCategories } from "@/api/CategoryHttp";
import { GetRandomMeal } from "@/api/RandomMealHttp";
import s from "./page.module.scss";

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
    for (let i = 0; i < 5; i += 1) {
      (async () => {
        const data = await GetRandomMeal();
        if (Array.isArray(data)) {
          setMeals(data);
        }
      })();
    }
    setLoadingMeals(false);
  }, []);

  return (
    <main className={s.main}>
      <h2 className={s.title}>Cook it right now</h2>
      {isLoadingMeals ? (
        <div>Loading...</div>
      ) : (
        <div className={s.randomMealCarouselSection}>
          <RandomMealCarouselSection />
        </div>
      )}
      <h2 className={s.title}>Categories</h2>
      {isLoadingCategories ? (
        <div>Loading...</div>
      ) : (
        <CategoryCardSection />
      )}
    </main>
  );
}
