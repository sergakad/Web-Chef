import { useRouter } from "next/navigation";
import { FC } from "react";
import { ArrowLeftIcon } from "@/components/SvgIcons/ArrowLeftIcon";
import s from "./Back.module.scss";

const Back: FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div>
      <button className={s.button} onClick={handleClick}>
        <ArrowLeftIcon className={s.arrow} />
      </button>
    </div>
  );
};

export { Back };
