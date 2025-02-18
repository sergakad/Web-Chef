import { FC, useEffect, useState } from "react";
import { LikeInactiveIcon } from "@/components/SvgIcons/LikeInactiveIcon";
import { LikeActiveIcon } from "@/components/SvgIcons/LikeActiveIcon";
import { TLikeState } from "@/shared/types/like-state.types";
import { IMeal } from "@/shared/interfaces/meal.interface";
import { useLikeMealsStore } from "@/shared/stores/like-meals-store";
import s from "./Like.module.scss";

interface ILikeProps {
  meal: IMeal;
}

const Like: FC<ILikeProps> = ({ meal }) => {
  const { idMeal: id } = meal;

  const [like, setLike] = useState<TLikeState>("inactive");

  const {
    meals: likeMeals,
    setMeals: setLikeMeal,
    deleteMeal: deleteLikeMeal,
  } = useLikeMealsStore((state) => state);

  const exist = likeMeals.some((el) => el.idMeal === id);

  const handleClick = () => {
    if (exist) {
      setLike("inactive");
      if (deleteLikeMeal) deleteLikeMeal(id);
    }
    if (!exist) {
      setLike("active");
      setLikeMeal([meal]);
    }
  };

  useEffect(() => {
    if (exist) {
      setLike("active");
    } else {
      setLike("inactive");
    }
  }, [exist]);

  return (
    <div className={s.likeWrapper} onClick={handleClick}>
      {like === "inactive" && <LikeInactiveIcon />}
      {like === "active" && <LikeActiveIcon />}
    </div>
  );
};

export { Like };
