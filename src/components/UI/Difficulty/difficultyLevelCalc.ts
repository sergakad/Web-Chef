import { IMealRecipe } from "@/shared/interfaces/meal.interface";

const difficultyLevelCalc = (data: IMealRecipe) => {
    let count = 0;
    let level = 0;
    for (let i = 1; i <= 20; i += 1) {
      if (data[`strIngredient${i}`] !== "") count += 1;
    }
    if (count > 0) level = Math.floor((count - 1) / 4) + 1;
    return level;
  };

  export { difficultyLevelCalc };