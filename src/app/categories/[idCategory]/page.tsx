"use client";

import { useParams } from "next/navigation";
import css from "./page.module.scss";

export default function Category() {
  const { idCategory } = useParams();
  return (
    <div>
      <main className={css.main}>{idCategory}</main>
    </div>
  );
}
