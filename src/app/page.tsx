"use client";

import { useEffect, useState } from "react";
import { CategoryCardSection } from "@/components/CategoryCardSection";
import { Loader } from "@/components/UI/Loader";
// import { Notification } from "@/components/UI/Notification";
import { RandomMealCarouselSection } from "@/components/RandomMealCarouselSection";
import { useCategoriesStore } from "@/shared/stores/categories-store";
// import { useLikeMealsStore } from "@/shared/stores/like-meals-store";
import { GetCategories } from "@/api/CategoryHttp";
import s from "./page.module.scss";

export default function Home() {
  // const [noticeMessage, setNoticeMessage] =
  //   useState<string>("");
  const [isLoadingCategories, setLoadingCategories] =
    useState<boolean>(true);
  // const [isNotification, setNotification] =
  //   useState<boolean>(false);
  const setCategories = useCategoriesStore(
    (state) => state.setCategories,
  );
  // const likeMeals = useLikeMealsStore(
  //   (state) => state.meals,
  // );

  useEffect(() => {
    (async () => {
      const data = await GetCategories();
      if (Array.isArray(data)) {
        setCategories(data);
        setLoadingCategories(false);
      }
    })();
  }, []);

  // useEffect(() => {
  //   setNotification(true);
  //   setNoticeMessage("like");
  //   setTimeout(() => {
  //     setNotification(false);
  //   }, 3000);
  // }, [likeMeals]);

  return (
    <main className={s.main}>
      {/* {isNotification && (
        <Notification message={noticeMessage} />
      )} */}
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
