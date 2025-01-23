import { FC } from "react";
import { DifficultyIcon } from "@/components/SvgIcons/DifficaltyIcon";
import s from "./Difficulty.module.scss";

interface IDifficultyProps {
  difficultyLevel: number;
}

const Difficulty: FC<IDifficultyProps> = ({
  difficultyLevel,
}) => {
  let count = difficultyLevel;
  const icons = [];
  for (let i = 0; i < 5; i += 1) {
    if (count > 0) {
      icons.push(
        <DifficultyIcon key={i} className={s.active} />,
      );
      count -= 1;
    } else
      icons.push(
        <DifficultyIcon key={i} className={s.inactive} />,
      );
  }
  return <div className={s.iconsWrapper}>{icons}</div>;
};

export { Difficulty };
