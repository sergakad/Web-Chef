import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./Category.module.scss";

interface ICategoryCard {
  name?: string;
  description?: string;
  image?: string;
}

const CategoryCard: FC<ICategoryCard> = ({
  name,
  description,
  image,
}) => {
  return (
    <Link className={s.link} href={`/categories/${name}`}>
      <div className={s.card}>
        <div className={s.content}>
          <div className={s.nameWrapper}>
            <h3 className={s.name}>{name}</h3>
          </div>
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src={image || ''}
              alt="Title"
              sizes="100wv"
              fill
              priority
              draggable={false}
            />
          </div>

          <div className={s.descriptionWrapper}>
            <span className={s.description}>
              {description}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { CategoryCard };
