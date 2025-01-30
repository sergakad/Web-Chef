import { FC } from "react";
import Link from "next/link";
import s from "./AdviceCard.module.scss";

interface IAdviceCardProps {
  id?: number;
  title?: string;
  href?: string;
  backgroundImage?: string;
}
const AdviceCard: FC<IAdviceCardProps> = ({
  id,
  title,
  href,
  backgroundImage,
}) => {
  return (
    <div
      className={s.adviceCard}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3>Useful advices:</h3>
      <h4>{title}</h4>
      <Link className={s.link} href={`${href}`}>
        Read more
      </Link>
    </div>
  );
};

export { AdviceCard };
