import { FC, useEffect } from "react";
import { IMeal } from "@/shared/interfaces/meal.interface";
import { SearchMealsByIngredient } from "@/api/MealHttp";
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
  name,
  backgroundImage = "http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.themealdb.com%2Fimages%2Fmedia%2Fmeals%2F1550440197.jpg&w=1920&q=75",
  ingredientImage,
}) => {
  useEffect(() => {
    (async () => {
      const selectionMeals: IMeal[] = [];
      const data = await SearchMealsByIngredient(
        name || "",
      );
      if (Array.isArray(data)) {
        for (let i = 0; i < 8; i += 1) {
          selectionMeals.push(
            data[Math.floor(Math.random() * data.length)],
          );
        }
      }
      // setIngredients(selectionIngredients);
      console.log(selectionMeals.length);
    })();
  }, [name]);

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
          src={
            `https://www.themealdb.com/images/ingredients/${ingredientImage}.png` ||
            ""
          }
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
