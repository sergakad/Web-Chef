import { FC } from "react";
import { IMeal } from "@/shared/interfaces/meal.interface";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import s from "./IngredientsCard.module.scss";

interface IIngredientsCardProps {
  id: number;
  name?: string;
  backgroundImage?: string;
  meals?: IMeal[];
  ingredientImage?: string;
}
const IngredientsCard: FC<IIngredientsCardProps> = ({
  id,
  name = "Chicken",
  backgroundImage = "http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.themealdb.com%2Fimages%2Fmedia%2Fmeals%2F1550440197.jpg&w=1920&q=75",
  ingredientImage = "https://www.themealdb.com/images/ingredients/Lime.png",
}) => {
  return (
    <div
      className={s.ingredientCard}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), url(${backgroundImage})`,
      }}
    >
      <h3 className={s.title}>Recipes with {name}:</h3>
      <ul className={s.meals}>
        <li className={s.li}>
          <Link className={s.link} href={`${id}`}>
            Спагетти
          </Link>
        </li>
        <li className={s.li}>
          <Link className={s.link} href={`${id}`}>
            Борщ
          </Link>
        </li>
        <li className={s.li}>
          <Link className={s.link} href={`${id}`}>
            Спагетти
          </Link>
        </li>
        <li className={s.li}>
          <Link className={s.link} href={`${id}`}>
            Борщ
          </Link>
        </li>
        <li className={s.li}>
          <Link className={s.link} href={`${id}`}>
            Спагетти
          </Link>
        </li>
      </ul>
      <Link className={cn(s.link, s.more)} href={`${id}`}>
        More
      </Link>
      <div className={s.imageWrapper}>
        <Image
          className={s.image}
          src={ingredientImage || ""}
          alt="Title"
          sizes="100wv"
          fill
          priority
          draggable={false}
        />
      </div>
    </div>
  );
};
export { IngredientsCard };
