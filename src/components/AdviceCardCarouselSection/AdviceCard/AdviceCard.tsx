import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/UI/Button/Button";
import s from "./AdviceCard.module.scss";

interface IAdviceCardProps {
  title?: string;
  href?: string;
  backgroundImage?: string;
}
const AdviceCard: FC<IAdviceCardProps> = ({
  title,
  href,
  backgroundImage,
}) => {
  return (
    <div
      className={s.adviceCard}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={s.content}>
        <h3>Useful advices:</h3>
        <h4 className={s.adviceText}>{title}</h4>
        <Button variant="link" href={href}>Read more</Button>
      </div>
    </div>
  );
};

export { AdviceCard };
