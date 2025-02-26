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
  let hoverTimeout: NodeJS.Timeout;
  const [isDescriptionHovered, setDescriptionHovered] =
    useState<boolean>(false);

  const descriptionHandleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setDescriptionHovered(true);
  };

  const descriptionHandleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setDescriptionHovered(false);
    }, 300);
  };

  return (
    <div
      className={cn(
        s.cardWrapper,
        s[`cardWrapperHovered_${isDescriptionHovered}`],
      )}
    >
      <Link className={s.link} href={`/categories/${name}`}>
        <div
          className={s.card}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <h3 className={s.name}>{name}</h3>
        </div>
      </Link>
      <div
        className={cn(
          s.descriptionWrapper,
          s[
            `descriptionWrapperHovered_${isDescriptionHovered}`
          ],
        )}
        onMouseLeave={descriptionHandleMouseLeave}
        onMouseEnter={descriptionHandleMouseEnter}
      >
        <span className={s.description}>{description}</span>
        <div className={s.barrier} />
      </div>
    </div>
  );
};

export { CategoryCard };
