import { FC, useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SearchMeal } from "@/api/MealHttp";
import { SearchIcon } from "@/components/SvgIcons/SearchIcon";
import { useSearchMealsStore } from "@/shared/stores/search-meals-store";
import Link from "next/link";
import cn from "classnames";
import { SearchMealCardMini } from "./SearchMealCardMini";
import s from "./Search.module.scss";

type TSearchState = "active" | "inactive";

const Search: FC = () => {
  const pathName = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const setSearchMealsName = useSearchMealsStore(
    (state) => state.setSearchMealsName,
  );
  const searchMealsName = useSearchMealsStore(
    (state) => state.searchMealsName,
  );
  const searchMeals = useSearchMealsStore(
    (state) => state.meals,
  );
  const setSearchMeals = useSearchMealsStore(
    (state) => state.setMeals,
  );

  const [searchState, setSearchState] =
    useState<TSearchState>("inactive");
  let searchFocusState: boolean = false;

  const clickSearchHandler = () => {
    if (searchState === "inactive")
      setSearchState("active");
  };

  const focusSearchHandler = () => {
    searchFocusState = true;
  };

  const blurSearchHandler = () => {
    searchFocusState = false;
    if (searchInputRef.current?.value === "")
      setSearchState("inactive");
  };

  const mouseLeaveSearchHandler = () => {
    if (searchState === "active" && !searchFocusState)
      if (searchInputRef.current?.value === "")
        setSearchState("inactive");
  };
  const handleClick = () => {
    setSearchMealsName("");
    setSearchState("inactive");
  };

  useEffect(() => {
    if (searchState === "active") {
      searchInputRef.current?.focus();
    }
  }, [searchState]);

  useEffect(() => {
    setSearchMeals([]);
    if (searchMealsName) {
      (async () => {
        const data = await SearchMeal(searchMealsName);
        if (Array.isArray(data)) {
          setSearchMeals(data);
        }
      })();
    }
  }, [searchMealsName]);

  return (
    <div>
      {searchState === "inactive" && (
        <button
          className={cn(
            s.content,
            s[`search_${searchState}`],
          )}
          onClick={clickSearchHandler}
        >
          <SearchIcon />
        </button>
      )}
      {searchState === "active" && (
        <>
          <button
            className={cn(s.content, s.search_active)}
            onMouseLeave={mouseLeaveSearchHandler}
          >
            <SearchIcon onClick={clickSearchHandler} />
            <input
              className={s.inputSearch}
              id="inputSearch"
              type="text"
              ref={searchInputRef}
              onFocus={focusSearchHandler}
              onBlur={blurSearchHandler}
              value={searchMealsName}
              onChange={(event) => {
                setSearchMealsName(event.target.value);
              }}
            />
          </button>
          {searchMealsName && pathName !== "/search" && (
            <div className={s.contentPopup}>
              {searchMeals.length > 0 ? (
                searchMeals.slice(0, 5).map((meal) => {
                  return (
                    <SearchMealCardMini
                      key={meal.idMeal}
                      id={meal.idMeal}
                      image={meal.strMealThumb}
                      name={meal.strMeal}
                      onClick={handleClick}
                    />
                  );
                })
              ) : (
                <div>Nothing was found</div>
              )}
              <Link href="/search">All result</Link>
            </div>
          )}
          <div
            className={s.overlayPopup}
            onClick={handleClick}
          />
        </>
      )}
    </div>
  );
};

export { Search };
