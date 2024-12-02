import { FC } from "react";
import { ChefHatIcon } from "@/components/SvgIcons/ChefHatIcon";
import { Navigation } from "@/components/UI/Navigation";
import { navigationValue } from "@/shared/constants/navigation.constant";
import Link from "next/link";
import s from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={s.header}>
      <Link href="/" className={s.link}>
        <div className={s.logoWrapper}>
          <ChefHatIcon />
          <span className={s.logo}>Web-Chef</span>
        </div>
      </Link>
      <Navigation value={navigationValue} />
    </div>
  );
};

export { Header };
