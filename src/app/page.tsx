"use client";

import { useEffect, useState } from "react";
import { CategoryCardSection } from "@/components/CategoryCardSection";
import { Loader } from "@/components/UI/Loader";
import { RandomMealCarouselSection } from "@/components/RandomMealCarouselSection";
import { useCategoriesStore } from "@/shared/stores/categories-store";
import { useRandomMealsStore } from "@/shared/stores/random-meals-store";
import { GetCategories } from "@/api/CategoryHttp";
import s from "./page.module.scss";

export default function Home() {
  const [isLoadingCategories, setLoadingCategories] =
    useState<boolean>(true);
  const setCategories = useCategoriesStore(
    (state) => state.setCategories,
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

  return (
    <main className={s.main}>
      <h2 className={s.title}>Cook it right now</h2>
      <div className={s.randomMealCarouselSection}>
        <RandomMealCarouselSection />
      </div>
      <h2 className={s.title}>Categories</h2>
      {isLoadingCategories ? (
        <Loader />
      ) : (
        <CategoryCardSection />
      )}
    </main>
  );
}
