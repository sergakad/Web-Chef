"use client";

import { useEffect, useState } from "react";
import { GetMeal } from "@/api/MealHttp";
import { useParams } from "next/navigation";
import { MealRecipe } from "@/components/MealRecipe";
import { Loader } from "@/components/UI/Loader";
import { useMealStore } from "@/shared/stores/meal-store";
import { Button } from "@/components/UI/Button/Button";
import s from "./page.module.scss";

export default function MealPage() {
  const { idMeal } = useParams();
  const setMeal = useMealStore((state) => state.setMeal);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await GetMeal(idMeal);
      if (typeof data === "object") {
        setMeal(data);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main>
      <Button className={s.button} variant="back" />
      {isLoading ? <Loader /> : <MealRecipe />}
    </main>
  );
}
