import { FC } from "react";
import { Navigation } from "@/components/UI/Navigation";
import { navigationValue } from "@/shared/constants/navigation.constant";


import s from "./Header.module.scss";

const Header: FC = () => {


  return (
    <div className={s.header}>
      <Navigation value={navigationValue} />
    </div>
  );
};

export { Header };
