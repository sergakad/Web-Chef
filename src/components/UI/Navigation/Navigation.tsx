import Link from "next/link";
import { FC } from "react";
import s from "./Navigation.module.scss";

interface IValue {
  key: string;
  name: string;
  href: string;
}

interface INavigationProps {
  value: IValue[];
}

const Navigation: FC<INavigationProps> = ({ value }) => {
  return (
    <div className={s.navigation}>
      {value.map((val) => (
        <div key={val.key} className={s.linkWrapper}>
          <Link className={s.link} href={val.href}>
            {val.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export { Navigation };
