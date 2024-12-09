import { FC } from "react";
import { Logo } from "@/components/UI/Logo";
import { Navigation } from "@/components/UI/Navigation";
import { navigationValue } from "@/shared/constants/navigation.constant";
import { LikeIcon } from "@/components/SvgIcons/LikeIcon";
import Link from "next/link";
import s from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={s.header}>
      <Logo/>
      <Navigation value={navigationValue} />
      <Link className={s.link} href="/">
        <div className={s.likeWrapper}>
          <div className={s.like}>
            <LikeIcon />
          </div>
        </div>
      </Link>
    </div>
  );
};

export { Header };
