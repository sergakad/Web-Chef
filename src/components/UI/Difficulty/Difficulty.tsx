import { FC } from "react";
import { DifficultyIcon } from "@/components/SvgIcons/DifficultyIcon";
import { IMeal } from "@/shared/interfaces/meal.interface";
import s from "./Difficulty.module.scss";

interface IDifficultyProps {
  meal: IMeal;
}

const Difficulty: FC<IDifficultyProps> = ({ meal }) => {
  const count = meal.strIngredient?.length || 0;
  let difficultyLevel = 0;
  const icons = [];

  if (count > 0)
    difficultyLevel = Math.floor((count - 1) / 4) + 1;

  for (let i = 0; i < 5; i += 1) {
    if (difficultyLevel > 0) {
      icons.push(
        <DifficultyIcon key={i} className={s.active} />,
      );
      difficultyLevel -= 1;
    } else
      icons.push(
        <DifficultyIcon key={i} className={s.inactive} />,
      );
  }

  return <div className={s.iconsWrapper}>{icons}</div>;
};

export { Difficulty };
