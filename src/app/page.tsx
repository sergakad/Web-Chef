"use client";

import { RandomMealCarouselSection } from "@/components/RandomMealCarouselSection";
import { IngredientsCardSection } from "@/components/IngredientsCardSection";
import { Search } from "@/components/Search";
import { AdviceCardCarouselSection } from "@/components/AdviceCardCarouselSection";
import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.home}>
      <div className={s.section}>
        <h2 className={s.title}>Cook it right now</h2>
        <div className={s.randomMealCarousel}>
          <RandomMealCarouselSection />
        </div>
      </div>
      <AdviceCardCarouselSection />
      <div className={s.section}>
        <h2 className={s.title}>Ingredients & Recipes</h2>
        <IngredientsCardSection />
      </div>
      <h2 className={s.title}>Categories</h2>
    </main>
  );
}
