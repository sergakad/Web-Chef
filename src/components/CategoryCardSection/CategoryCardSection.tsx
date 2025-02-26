import { FC, useEffect, useState } from "react";
import { CategoryCard } from "@/components/CategoryCardSection/CategoryCard";
import {
  useCategoriesStore,
  useCategoryMouseStateStore,
} from "@/shared/stores/categories-store";
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

  const { categoryMouseState, setCategoryMouseState } = useCategoryMouseStateStore(
    (state) => state,
  );

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
    setCategoryMouseState('leave');
  }, []);

  return (
    <div>
      {isLoadingCategories ? (
        <Loader />
      ) : (
        <>
          {categoryMouseState === "enter" && (
            <div className={s.overlay} />
          )}
          <div className={s.cardSection}>
            {categories.map((category) => {
              const categoryImage = categoriesImage.find(
                (cat) => cat.id === category.idCategory,
              );
              return (
                <CategoryCard
                  key={category.idCategory}
                  name={category.strCategory}
                  description={
                    category.strCategoryDescription
                  }
                  backgroundImage={
                    categoryImage?.backgroundImage
                  }
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export { CategoryCardSection };
