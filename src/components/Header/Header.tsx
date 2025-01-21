"use client";

import { FC, } from "react";
// import { Logo } from "@/components/UI/Logo";
import { Navigation } from "@/components/UI/Navigation";
// import { Search } from "@/components/Search";
import { navigationValue } from "@/shared/constants/navigation.constant";
// import { LikeIcon } from "@/components/SvgIcons/LikeIcon";
// import { useLikeMealsStore } from "@/shared/stores/like-meals-store";

// import Link from "next/link";

import s from "./Header.module.scss";

const Header: FC = () => {
  // const likeMeals = useLikeMealsStore(
  //   (state) => state.meals,
  // );

  return (
    <div className={s.header}>
      <Navigation value={navigationValue} />

      <div className={s.contentWrapper}>
        {/* <Search />

        <Link
          className={s.link}
          href="/like"
        >
          <div className={s.content}>
            <LikeIcon />
            {likeMeals.length > 0 && (
              <div className={s.countLike}>
                {likeMeals.length}
              </div>
            )}
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export { Header };
