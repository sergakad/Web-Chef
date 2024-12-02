import { FC, ReactNode } from "react";
import s from './Badge.module.scss'

interface IBadgeProps {
  children?: ReactNode;
}

const Badge:FC<IBadgeProps> = ({children}) => {
    return <div className={s.badge}>{children}</div>;
}

export {Badge}