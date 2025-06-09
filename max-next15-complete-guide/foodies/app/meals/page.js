import MealGrid from "@/components/meals/meal-grid"
import classes from "./page.module.css"
import { getMeals } from "@/services/meal"
import { Suspense } from "react"
import MealLoader from "@/components/loading/loader"

export default function MealsPage() {
  console.log('SSR Meals Grid Page')
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created by <span className={classes.highlight}>You</span>
        </h1>
      </header>
      <main>
        <Suspense fallback={<MealLoader />}>
          <MealsGridWithData />
        </Suspense>
      </main>
    </>
  )
}

async function MealsGridWithData() {
  console.log('SSR Meals Grid Loaded with Data')
  const meals = await getMeals()
  //throw new Error('Failed to fetch meals')
  return <MealGrid meals={meals} />
}