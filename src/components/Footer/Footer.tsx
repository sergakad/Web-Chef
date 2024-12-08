"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
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
                <div className={s.title}>Справка</div>
                <Link className={s.link} href="/">
                  Пользовательское соглашение
                </Link>
                <Link className={s.link} href="/">
                  Часто задаваемые вопросы
                </Link>
                <Link className={s.link} href="/">
                  Как работает создание ивента
                </Link>
              </div>
              <div className={s.partnersWrapper}>
                <div className={s.title}>
                  Партнерам и организаторам
                </div>
                <Link className={s.link} href="/">
                  Корпоративным клиентам
                </Link>
                <Link className={s.link} href="/">
                  Подписка
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
            <Logo/>
            </button>
            <div className={s.communicationWrapper}>
              <Link className={s.link} href="/">
                Обратная связь
              </Link>
              <Link className={s.link} href="/">
                Контакты
              </Link>
              <Link className={s.link} href="/">
                Редакция
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
            © 2024 ООО «Веб-Шеф»
          </span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
