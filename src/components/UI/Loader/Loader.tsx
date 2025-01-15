import { FC } from "react";
import s from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={s.loader}>
      <svg viewBox="0 0 80 80">
        <circle id="test" cx="40" cy="40" r="32" />
      </svg>
    </div>
  );
};

export { Loader };
