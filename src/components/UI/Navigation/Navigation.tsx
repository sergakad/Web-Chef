import Link from "next/link";
import { FC } from "react";
import { THeaderVariant } from "@/shared/types/header-variant.types";
import { Logo } from "@/components/UI/Logo";
import { useLikeMealsStore } from "@/shared/stores/like-meals-store";
import { LikeActiveIcon } from "@/components/SvgIcons/LikeActiveIcon";
import cn from "classnames";
import s from "./Navigation.module.scss";

interface IValue {
  key: string;
  name: string;
  href: string;
}

interface INavigationProps {
  value: IValue[];
  variant: THeaderVariant;
}

const Navigation: FC<INavigationProps> = ({
  value,
  variant = "primary",
}) => {
  const likeMeals = useLikeMealsStore(
    (state) => state.meals,
  );

  return (
    <div
      className={cn(
        s.navigation,
        s[`navigation_${variant}`],
      )}
    >
      {value.slice(0, value.length / 2).map((val) => (
        <div key={val.key} className={s.linkWrapper}>
          <Link className={s.link} href={val.href}>
            {val.name === "Likes" &&
              likeMeals.length > 0 && (
                <LikeActiveIcon className={s.like}>
                  <text
                    x="50%"
                    y="50%"
                    fontSize="10"
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontStyle="normal"
                  >
                    {likeMeals.length}
                  </text>
                </LikeActiveIcon>
              )}
            {val.name}
          </Link>
        </div>
      ))}
      <div className={s.logoWrapper}>
        <Logo />
      </div>
      {value
        .slice(value.length / 2, value.length)
        .map((val) => (
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
