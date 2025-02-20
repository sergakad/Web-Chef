"use client";

import { MealsCardSection } from "@/components/MealsCardSection";
import { useLikeMealsStore } from "@/shared/stores/like-meals-store";
import { Button } from "@/components/UI";
import s from "./page.module.scss";

export default function Like() {
  const likeMeals = useLikeMealsStore(
    (state) => state.meals,
  );

  return (
    <main className={s.content}>
      <h2 className={s.title}>Likes</h2>
      <Button variant="back"/>
      {likeMeals.length !== 0 ? (
        <MealsCardSection meals={likeMeals} />
      ) : (
        <div>There is nothing yet</div>
      )}
    </main>
  );
}
