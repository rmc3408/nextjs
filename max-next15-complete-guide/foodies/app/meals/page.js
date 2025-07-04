import Link from 'next/link'
import MealGrid from '@/components/meals/meal-grid'
import classes from './page.module.css'
import { getMeals } from '@/services/meal'
import { Suspense } from 'react'
import MealLoader from '@/components/loading/loader'

export default function MealsPage() {
  console.log('SSR Meals Grid Page')

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
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
