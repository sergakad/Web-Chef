import { ButtonHTMLAttributes, FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/SvgIcons/ArrowLeftIcon";
import cn from "classnames";
import s from "./Button.module.scss";

type TButtonVariant = "back" | "link";

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  href?: string;
}
const Button: FC<IButtonProps> = ({
  className,
  children,
  variant = "back",
  href = "/",
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <>
      {variant === "back" && (
        <button
          className={cn(s.button, className)}
          onClick={handleClick}
        >
          <ArrowLeftIcon />
          <span>Back</span>
        </button>
      )}
      {variant === "link" && (
        <Link
          className={cn(s.button, className)}
          href={href}
        >
          {children}
        </Link>
      )}
    </>
  );
};

export { Button };
