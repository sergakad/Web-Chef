import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/UI/Badge";
import { Difficulty } from "@/components/UI/Difficulty";
import Image from "next/image";
import { Like } from "@/components/UI/Like";
import { useLikeMealsStore } from "@/shared/stores/like-meals-store";
import { TLikeState } from "@/shared/types/like-state.types";
import s from "./MealCard.module.scss";

interface IMealProps {
  id: number;
  name?: string;
  image?: string;
  category?: string;
  area?: string;
}

const MealCard: FC<IMealProps> = ({
  id,
  name,
  category,
  area,
  image,
}) => {
  const likeMeals = useLikeMealsStore(
    (state) => state.meals,
  );
  const setLikeMeal = useLikeMealsStore(
    (state) => state.setMeals,
  );
  const deleteLikeMeal = useLikeMealsStore(
    (state) => state.deleteMeal,
  );
  const [like, setLike] = useState<TLikeState>("inactive");

  const likeHandler = () => {
    if (like === "active") {
      setLike("inactive");
      if (deleteLikeMeal) deleteLikeMeal(id);
    }
    if (like === "inactive") {
      setLike("active");
      setLikeMeal([
        {
          idMeal: id,
          strMeal: name || "",
          strMealThumb: image || "",
        },
      ]);
    }
  };

  useEffect(() => {
    const exist = likeMeals.some((el) => el.idMeal === id);
    if (exist) {
      setLike("active");
    } else {
      setLike("inactive");
    }
  }, []);

  return (
    <div>
      <div className={s.likeWrapper}>
        <Like onClick={likeHandler} state={like} />
      </div>
      <Link className={s.link} href={`${id}`}>
        <div className={s.imageWrapper}>
          <Image
            className={s.image}
            src={image || ""}
            alt="Title"
            sizes="100wv"
            fill
            priority
            draggable={false}
          />
          <div className={s.content}>
            <h3 className={s.name}>{name}</h3>
            <div className={s.information}>
              <div className={s.badgeWrapper}>
                <Badge>{category}</Badge>
                <Badge>{area}</Badge>
              </div>
              <Difficulty difficultyLevel={3} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export { MealCard };
