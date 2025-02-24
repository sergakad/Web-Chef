import { FC, useState } from "react";
import Link from "next/link";
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

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setHovered(false);
    }, 500);
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
