import { FC, useEffect, useState } from "react";
import { CategoryCard } from "@/components/CategoryCardSection/CategoryCard";
import { useCategoriesStore } from "@/shared/stores/categories-store";
import { ICategoriesImage } from "@/shared/interfaces/category.interface";
import { Loader } from "@/components/UI/Loader";
import s from "./CategoryCardSection.module.scss";

const CategoryCardSection: FC = () => {
  const categories = useCategoriesStore(
    (state) => state.categories,
  );

  const [isLoadingCategories, setLoadingCategories] =
    useState<boolean>(true);

  const [categoriesImage, setCategoriesImage] = useState<
    ICategoriesImage[]
  >([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "/data/categories-image.json",
      );
      const data = await response.json();
      if (Array.isArray(data.categories))
        setCategoriesImage(data.categories);
      setLoadingCategories(false);
    })();
  }, []);

  return (
    <div>
      {isLoadingCategories ? (
        <Loader />
      ) : (
        <div className={s.cardSection}>
          {categories.map((category) => {
            return (
              <CategoryCard
                key={category.idCategory}
                name={category.strCategory}
                description={
                  category.strCategoryDescription
                }
                backgroundImage={categoriesImage[1].backgroundImage}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export { CategoryCardSection };
