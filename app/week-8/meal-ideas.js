"use client"

import {useState, useEffect} from React;

const [meals, setMeals] = useState([]);

export default function MealIdeas(ingredient) {

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}");
            const data = await response.json();
            return data;
        } catch (error){
            console.error("Error:", error)
        }
    }

    async function loadMealIdeas(ingredient) {
        try{
            fetchMealIdeas(ingredient);
        } catch (error){
            console.error("Error:", error);
        }
    }

    useEffect(() => {
        (async () => {
            if (ingredient != null && ingredient.length > 0) {
                let mealIdeas = [];
                for (let i = 0 ; i < ingredient.length; i++) {
                    let thisMeal = loadMealIdeas(ingredient[i])
                    mealIdeas.push(thisMeal)
                }
            }
            setMeals(mealIdeas)
        })
    })
    

    return (
        <div>
            <h3>Meal Ideas:</h3>
            <ul>
            {
                meals.map((meal) => <li>{meal.strMeal}</li>)
            }
            </ul>
        </div>
    )
}
