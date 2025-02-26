"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/UI/Logo";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  let currentYear = new Date().getFullYear();

  const handleClickLogo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={s.footer}>
      <button
        className={s.logoContainer}
        onClick={handleClickLogo}
      >
        <Logo />
      </button>

      <div className={s.links}>
        <Link className={s.link} href="/">
          Compatible brands
        </Link>
        <Link className={s.link} href="/">
          Knowledge base
        </Link>
        <Link className={s.link} href="/">
          Instructions
        </Link>
        <Link className={s.link} href="/">
          Vacancies
        </Link>
      </div>
      <div className={s.links}>
        <Link className={s.link} href="/">
          Support
        </Link>
        <Link className={s.link} href="/">
          Download
        </Link>
      </div>
      <div className={s.markets}>
        <Link href="https://play.google.com/store/apps?hl=ru">
          <Image
            priority
            src="/images/icon-android.svg"
            alt="VK"
            width={56}
            height={56}
          />
        </Link>
        <Link href="https://www.apple.com/app-store/">
          <Image
            priority
            src="/images/icon-ios.svg"
            alt="VK"
            width={56}
            height={56}
          />
        </Link>
      </div>
      <div className={s.copyright}>
        © {currentYear} «Web-chef»
        <br /> All rights reserved
      </div>
      <div className={s.copyright}> Privacy policy</div>
      <div className={s.copyright}> Public offer</div>
      <div className={s.copyright}> hello@webchef.io</div>
    </footer>
  );
};

export { Footer };
