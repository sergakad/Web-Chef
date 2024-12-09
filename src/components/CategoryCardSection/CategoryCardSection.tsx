import { FC } from "react";
import { CategoryCard } from "@/components/CategoryCardSection/CategoryCard";
import { useCategoriesStore } from "@/shared/stores/categories-store";
import s from "./CategoryCardSection.module.scss";

const CategoryCardSection: FC = () => {
  const categories = useCategoriesStore(
    (state) => state.categories,
  );
  return (
    <div className={s.cardSection}>
      {categories.map((category) => {
        return (
          <CategoryCard
            key={category.idCategory}
            name={category.strCategory}
            description={category.strCategoryDescription}
            image={category.strCategoryThumb}
          />
        );
      })}
    </div>
  );
};

export { CategoryCardSection };
