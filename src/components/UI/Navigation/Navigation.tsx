import Link from "next/link";
import { FC, useState } from "react";
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
  const [isLikeHovered, setLikeHovered] =
    useState<boolean>(false);

  const handleLikeMouseEnter = () => {
    if (!isLikeHovered) setLikeHovered(true);
  };
  const handleLikeMouseLeave = () => {
    if (isLikeHovered) setLikeHovered(false);
  };

  const likeMeals = useLikeMealsStore(
    (state) => state.meals,
  );

  const leftPart = value.slice(0, value.length / 2);
  const rightPart = value.slice(
    value.length / 2,
    value.length,
  );

  return (
    <div
      className={cn(
        s.navigation,
        s[`navigation_${variant}`],
      )}
    >
      {leftPart.map((val) => (
        <div key={val.key} className={s.linkWrapper}>
          {val.name === "Likes" && !!likeMeals.length && (
            <Link
              className={s.link}
              href={val.href}
              onMouseEnter={handleLikeMouseEnter}
              onMouseLeave={handleLikeMouseLeave}
            >
              <LikeActiveIcon
                className={cn(
                  s.like,
                  s[`likeHovered_${isLikeHovered}`],
                )}
              >
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

              {val.name}
            </Link>
          )}
          {val.name !== "Likes" && !!likeMeals.length && (
            <Link className={s.link} href={val.href}>
              {val.name}
            </Link>
          )}
        </div>
      ))}
      <div className={s.logoWrapper}>
        <Logo />
      </div>
      {rightPart.map((val) => (
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
