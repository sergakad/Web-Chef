"use client";

import { FC } from "react";
import { Logo } from "@/components/UI/Logo";
import { Navigation } from "@/components/UI/Navigation";
import { navigationValue } from "@/shared/constants/navigation.constant";
import { LikeIcon } from "@/components/SvgIcons/LikeIcon";
import { useLikeMealsStore } from "@/shared/stores/like-meals-store";
import Link from "next/link";
import s from "./Header.module.scss";

const Header: FC = () => {
  const likeMeals = useLikeMealsStore(
    (state) => state.meals,
  );

  return (
    <div className={s.header}>
      <Logo />
      <Navigation value={navigationValue} />
      <Link className={s.link} href="/like">
        <div className={s.likeWrapper}>
          <div className={s.like}>
            <LikeIcon />
          </div>
          {likeMeals.length > 0 && (
            <div className={s.countLike}>
              {likeMeals.length}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export { Header };
