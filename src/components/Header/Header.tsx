"use client";

import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { THeaderVariant } from "@/shared/types/header-variant.types";
import { Navigation } from "@/components/UI/Navigation";
import { Search } from "@/components/Search";
import { navigationValue } from "@/shared/constants/navigation.constant";

import s from "./Header.module.scss";

const Header: FC = () => {
  const pathName = usePathname();
  const [variant, setVariant] =
    useState<THeaderVariant>("primary");

  useEffect(() => {
    if (pathName === "/") setVariant("primary");
    else setVariant("secondary");
  }, [pathName]);

  return (
    <div className={s.header}>
      <Navigation
        variant={variant}
        value={navigationValue}
      />
      {variant === 'primary' && (
        <div className={s.mainBackground}>
          <div className={s.mainContent}>
            <div className={s.text}>
              <span>
                Welcome to&nbsp;our recipe website!
                <br />
                <br />
                We&nbsp;are glad to&nbsp;welcome you
                to&nbsp;the world of&nbsp;cooking, where
                everyone will find something to&nbsp;their
                liking. Step-by-step instructions, useful
                tips, and a&nbsp;variety of&nbsp;ingredients
                are all there to&nbsp;make the cooking
                process fun and easy.
                <br />
                <br />
                Explore our website, find inspiration and
                create in&nbsp;the kitchen with pleasure!
              </span>
            </div>
            <Search />
          </div>
        </div>
      )}
    </div>
  );
};

export { Header };
