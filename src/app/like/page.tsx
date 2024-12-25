"use client";

import { MealsCardSection } from "@/components/MealsCardSection";
import { useLikeMealsStore } from "@/shared/stores/like-meals-store";

import s from "./page.module.scss";

export default function Like() {
  const likeMeals = useLikeMealsStore(
    (state) => state.meals,
  );

  return (
    <div>
      <h2 className={s.title}>Did you like it</h2>
      {likeMeals.length !== 0 ? (
        <MealsCardSection meals={likeMeals} />
      ) : (
        <div>There is nothing yet</div>
      )}
    </div>
  );
}
