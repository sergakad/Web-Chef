"use client";

import { useEffect } from "react";
import { CategoryCardSection } from "@/components/CategoryCardSection";
import { useCategoriesStore } from "@/shared/stores/categories-store";
import { GetCategories } from "@/api/CategoryHttp";
import css from "./page.module.scss";

export default function Home() {
  const isLoading = useCategoriesStore(
    (state) => state.isLoading,
  );
  const setLoading = useCategoriesStore(
    (state) => state.setLoading,
  );
  const setCategories = useCategoriesStore(
    (state) => state.setCategories,
  );
  useEffect(() => {
    (async () => {
      const data = await GetCategories();
      if (Array.isArray(data)) {
        setCategories(data);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className={css.main}>
      <CategoryCardSection />
    </main>
  );
}
