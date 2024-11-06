"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}"
      );
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function loadMealIdeas(ingredient) {
    try {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div>
      <h3 className="text-xl inline-block m-3 p-3">Meal Ideas:</h3>
      <div>
        {meals ? (
          <div>
            <p>meal ideas for {ingredient}:</p>
            <ul>
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="rounded-md max-w-72 p-2 m-2 bg-green-950 text-yellow-100"
                >
                  <p className="font-bold text-xl m-1">{meal.strMeal}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="rounded-md max-w-72 p-2 m-2 bg-green-950 text-yellow-100">
            <p className="font-bold text-xl m-1">No meals were found</p>
          </div>
        )}
      </div>
    </div>
  );
}
