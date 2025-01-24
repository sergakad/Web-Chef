import { FC } from "react";
import { IngredientsCard } from "./IngredientsCard/IngredientsCard";
import s from "./IngredientsCardSection.module.scss";

const IngredientsCardSection: FC = () => {
  return (
    <div>
      <IngredientsCard />
    </div>
  );
};

export { IngredientsCardSection };
