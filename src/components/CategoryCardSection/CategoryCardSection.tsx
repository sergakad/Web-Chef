import { FC } from "react";
import { CategoryCard } from "@/components/CategoryCard";
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
            key={category.id}
            name={category.name}
            description={category.description}
            image={category.image}
          />
        );
      })}
    </div>
  );
};

export { CategoryCardSection };
