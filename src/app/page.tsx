"use client";

import { RandomMealCarouselSection } from "@/components/RandomMealCarouselSection";
import { IngredientsCardSection } from "@/components/IngredientsCardSection";
import { Search } from "@/components/Search";
import { AdviceCardCarouselSection } from "@/components/AdviceCardCarouselSection";
import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.home}>
      <div className={s.mainBackground}>
        <div className={s.mainContent}>
          <div className={s.text}>
            <span>
              Welcome to&nbsp;our recipe website!
              <br />
              <br />
              We&nbsp;are glad to&nbsp;welcome you
              to&nbsp;the world of&nbsp;cooking, where
              everyone will find something to&nbsp;their
              liking. Step-by-step instructions, useful
              tips, and a&nbsp;variety of&nbsp;ingredients
              are all there to&nbsp;make the cooking process
              fun and easy.
              <br />
              <br />
              Explore our website, find inspiration and
              create in&nbsp;the kitchen with pleasure!
            </span>
          </div>
          <Search />
        </div>
      </div>
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
