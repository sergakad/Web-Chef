"use client";

import { useEffect } from "react";
import { CategoryCardSection } from "@/components/CategoryCardSection";
import { RandomMealCarouselSection } from "@/components/RandomMealCarouselSection";
import { useCategoriesStore } from "@/shared/stores/categories-store";
import { useRandomMealsStore } from "@/shared/stores/random-meals-store";
import { GetCategories } from "@/api/CategoryHttp";
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
  const isLoadingRandomMeals = useRandomMealsStore(
    (state) => state.isLoading,
  );
  const setLoadingRandomMeals = useRandomMealsStore(
    (state) => state.setLoading,
  );
  const randomMeals = useRandomMealsStore(
    (state) => state.meals,
  );

  useEffect(() => {
    (async () => {
      const data = await GetCategories();
      if (Array.isArray(data)) {
        setCategories(data);
        setLoadingCategories(false);
      }
    })();
  }, []);

  useEffect(() => {
    setLoadingRandomMeals(false);  //это не работает !!!
    console.log("я сработал", randomMeals);
  }, [randomMeals]);

  return (
    <main className={s.main}>
      <h2 className={s.title}>Cook it right now</h2>

      {isLoadingRandomMeals ? (
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
