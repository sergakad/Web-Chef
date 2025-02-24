import { FC, useRef, useEffect, useState } from "react";
import Link from "next/link";
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
  const descriptionRef = useRef(null);
  const [heightDescription, setHeightDescription] =
    useState<number>(0);

  const updateHeightDescription = () => {
    const currentHeight =
      descriptionRef.current?.offsetHeight;
    setHeightDescription(currentHeight);
    document.documentElement.style.setProperty(
      "--description-height",
      `${currentHeight}px`,
    );
    console.log("currentHeight:", currentHeight);
  };

  useEffect(() => {
    updateHeightDescription();
  }, []);

  return (
    <div className={s.cardWrapper}>
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
        className={s.descriptionWrapper}
        ref={descriptionRef}
        // style={{ height: "var(--description-height)" }}
      >
        <span className={s.description}>{description}</span>
        <div className={s.barrier} />
      </div>
    </div>
  );
};

export { CategoryCard };
