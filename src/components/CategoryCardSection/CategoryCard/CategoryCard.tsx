import { FC, useState } from "react";
import Link from "next/link";
import { useCategoryMouseStateStore } from "@/shared/stores/categories-store";
import cn from "classnames";
import s from "./Category.module.scss";

interface ICategoryCard {
  name?: string;
  description?: string;
  backgroundImage?: string;
}

const CategoryCard: FC<ICategoryCard> = ({
  name,
  description,
  backgroundImage,
}) => {
  const [isHovered, setHovered] = useState<boolean>(false);
  const { categoryMouseState, setCategoryMouseState } =
    useCategoryMouseStateStore((state) => state);

  const handleMouseEnter = () => {
    setHovered(true);
    if (categoryMouseState === "leave")
      setCategoryMouseState("enter");
  };

  const handleMouseLeave = () => {
    (async () => {
      setTimeout(() => {
        setHovered(false);
      }, 100);
      if (categoryMouseState === "enter")
        setCategoryMouseState("leave");
    })();
  };

  return (
    <div
      className={cn(
        s.cardWrapper,
        s[`cardWrapperHovered_${isHovered}`],
      )}
    >
      <div
        className={s.descriptionWrapper}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <Link
          className={s.link}
          href={`/categories/${name}`}
        >
          <div
            className={s.card}
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <h3 className={s.name}>{name}</h3>
          </div>
        </Link>
        <span className={s.description}>{description}</span>
        <div className={s.barrier} />
      </div>
    </div>
  );
};

export { CategoryCard };
