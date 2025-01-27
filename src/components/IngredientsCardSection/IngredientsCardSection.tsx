import { FC, useEffect, useState } from "react";
import { GetIngredients } from "@/api/IngredientHttp";
import { useIngredientsStore } from "@/shared/stores/ingredient-store";
import { Loader } from "@/components/UI/Loader";
import { IIngredient } from "@/shared/interfaces/ingredient.interface";
import { IngredientsCard } from "./IngredientsCard/IngredientsCard";
import s from "./IngredientsCardSection.module.scss";

const IngredientsCardSection: FC = () => {
  const ingredients = useIngredientsStore(
    (state) => state.ingredients,
  );

  const setIngredients = useIngredientsStore(
    (state) => state.setIngredients,
  );
  const [isLoadingIngredients, setLoadingIngredients] =
    useState<boolean>(true);

  useEffect(() => {
    setLoadingIngredients(true);
    const selectionIngredients: IIngredient[] = [];
    (async () => {
      const data = await GetIngredients();
      if (Array.isArray(data)) {
        for (let i = 0; i < 8; i += 1) {
          selectionIngredients.push(
            data[Math.floor(Math.random() * data.length)],
          );
        }
      }
      setIngredients(selectionIngredients);
      setLoadingIngredients(false);
    })();
  }, []);

  return (
    <div>
      {isLoadingIngredients ? (
        <Loader />
      ) : (
        <div className={s.ingredientCardSection}>
          {ingredients.map((ingredient) => {
            return (
              <IngredientsCard
                key={ingredient.idIngredient}
                id={ingredient.idIngredient}
                ingredientImage={ingredient.strIngredient}
                name={ingredient.strIngredient}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export { IngredientsCardSection };
