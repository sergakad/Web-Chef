"use client";

import { useEffect, useState } from "react";
import { Loader, Button } from "@/components/UI";
import { CategoryCardSection } from "@/components/CategoryCardSection";
import { useCategoriesStore } from "@/shared/stores/categories-store";
import { GetCategories } from "@/api/CategoryHttp";
import s from "./page.module.scss";

export default function Categories() {
  const [isLoadingCategories, setLoadingCategories] =
    useState<boolean>(true);
  const setCategories = useCategoriesStore(
    (state) => state.setCategories,
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
    <main className={s.content}>
      <h2 className={s.title}>Categories</h2>
      <Button variant="back" />
      {isLoadingCategories ? (
        <Loader />
      ) : (
        <CategoryCardSection />
      )}
    </main>
  );
}
