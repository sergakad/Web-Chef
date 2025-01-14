"use client";

import { useSearchMealsStore } from "@/shared/stores/search-meals-store";
import { MealsCardSection } from "@/components/MealsCardSection";
import s from "./page.module.scss";

export default function Search() {
  const searchMeals = useSearchMealsStore(
    (state) => state.meals,
  );

  return (
    <div>
      <h2 className={s.title}>Find your favorite meal</h2>
      <MealsCardSection meals={searchMeals} />
    </div>
  );
}
