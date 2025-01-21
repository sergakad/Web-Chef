import { FC, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SearchMeal } from "@/api/MealHttp";
import { SearchIcon } from "@/components/SvgIcons/SearchIcon";
import { useSearchMealsStore } from "@/shared/stores/search-meals-store";
import Link from "next/link";
import { SearchMealCardMini } from "./SearchMealCardMini";
import s from "./Search.module.scss";

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


  const handleClick = () => {
    setSearchMealsName("");
  };

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
      <div className={s.searchWrapper}>
        <input
          className={s.inputSearch}
          id="inputSearch"
          type="text"
          placeholder="Search for..."
          ref={searchInputRef}
          value={searchMealsName}
          onChange={(event) => {
            setSearchMealsName(event.target.value);
          }}
        />
        <SearchIcon />
      </div>
      {searchMealsName && pathName !== "/search" && (
        <>
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
