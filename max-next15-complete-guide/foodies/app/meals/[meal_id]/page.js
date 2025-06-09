import Image from "next/image"
import classes from './page.module.css'
import { getMeal } from "@/services/meal"

export default async function BlogPage(props) {
  console.log('SSR Blog id Page')

  const { meal_id } = await props.params
  const meal = await getMeal(meal_id) || null

  if (!meal) {
    notFound()
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br />')


  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  )
}


// 'use client'
// import { use } from "react"

// export default function SlugMealPage(props) {
//   console.log('Client Blog id Page')
//   const { id } = use(props.params)

//   return <main><h1>Meal page {id}</h1></main>
// }
