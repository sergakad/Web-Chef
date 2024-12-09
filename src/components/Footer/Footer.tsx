"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image"
import { Logo } from "@/components/UI/Logo";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerWrapper}>
        <div className={s.contentWrapper}>
          <div className={s.mainSection}>
            <div className={s.linksWrapper}>
              <div className={s.referenceWrapper}>
                <div className={s.title}>Reference</div>
                <Link className={s.link} href="/">
                  User Agreement
                </Link>
                <Link className={s.link} href="/">
                  Frequently asked questions
                </Link>
              </div>
              <div className={s.partnersWrapper}>
                <div className={s.title}>
                  To partners and organizers
                </div>
                <Link className={s.link} href="/">
                  For corporate clients
                </Link>
                <Link className={s.link} href="/">
                  Subscription
                </Link>
              </div>
            </div>
          </div>
          <div className={s.communicationSection}>
            <button
              className={s.logoContainer}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <Logo />
            </button>
            <div className={s.communicationWrapper}>
              <Link className={s.link} href="/">
                Feedback
              </Link>
              <Link className={s.link} href="/">
                Contacts
              </Link>
              <Link className={s.link} href="/">
                Editorial
              </Link>
            </div>
            <div className={s.socialNetworkWrapper}>
              <Link href="https://vk.com/">
                <Image
                  priority
                  src="/images/vk-logo.svg"
                  alt="VK"
                  width={28}
                  height={28}
                />
              </Link>
              <Link href="https://ok.ru/">
                <Image
                  priority
                  src="/images/ok-logo.svg"
                  alt="OK"
                  width={28}
                  height={28}
                />
              </Link>
              <Link href="https://web.telegram.org/">
                <Image
                  priority
                  src="/images/telegram-logo.svg"
                  alt="TG"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <span className={s.copyright}>
            © 2024 «Web-chef»
          </span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
