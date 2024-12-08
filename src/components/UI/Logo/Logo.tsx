import { FC } from "react";
import Link from "next/link";
import { ChefHatIcon } from "@/components/SvgIcons/ChefHatIcon";
import s from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <Link href="/" className={s.link}>
      <div className={s.logoWrapper}>
        <ChefHatIcon />
        <span className={s.logo}>Web-Chef</span>
      </div>
    </Link>
  );
};

export { Logo };
