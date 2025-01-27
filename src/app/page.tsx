"use client";

// import { Notification } from "@/components/UI/Notification";
import { RandomMealCarouselSection } from "@/components/RandomMealCarouselSection";
import { IngredientsCardSection } from "@/components/IngredientsCardSection";
import { Search } from "@/components/Search";
// import { useLikeMealsStore } from "@/shared/stores/like-meals-store";
import s from "./page.module.scss";

export default function Home() {
  // const [noticeMessage, setNoticeMessage] =
  //   useState<string>("");
  // const [isNotification, setNotification] =
  //   useState<boolean>(false);
  // const likeMeals = useLikeMealsStore(
  //   (state) => state.meals,
  // );

  // useEffect(() => {
  //   setNotification(true);
  //   setNoticeMessage("like");
  //   setTimeout(() => {
  //     setNotification(false);
  //   }, 3000);
  // }, [likeMeals]);

  return (
    <main className={s.main}>
      <div className={s.mainBackground}>
        <div className={s.mainContent}>
          <div className={s.text}>
            <span>
              Welcome to&nbsp;our meals website!
              <br />
              <br />
              We&nbsp;are glad to&nbsp;welcome you
              to&nbsp;the world of&nbsp;cooking, where
              everyone will find something to&nbsp;their
              liking. Whether you want to&nbsp;cook
              something simple for a&nbsp;casual dinner
              or&nbsp;surprise your guests with
              a&nbsp;delicious dish, we&nbsp;have meals for
              every occasion. Step&mdash;by-step
              instructions, useful tips and a&nbsp;variety
              of&nbsp;ingredients&nbsp;&mdash; everything
              to&nbsp;make the cooking process fun and easy.
              <br />
              <br />
              Explore our website, find inspiration and
              create in&nbsp;the kitchen with pleasure!
            </span>
          </div>
          <Search />
        </div>
      </div>
      {/* {isNotification && (
        <Notification message={noticeMessage} />
      )} */}
      <div className={s.section}>
        <h2 className={s.title}>Cook it right now</h2>
        <div className={s.randomMealCarousel}>
          <RandomMealCarouselSection />
        </div>
      </div>
      <div className={s.section}>
        <h2 className={s.title}>Ingredients & Recipes</h2>
        <IngredientsCardSection />
      </div>
      <h2 className={s.title}>Categories</h2>
    </main>
  );
}
