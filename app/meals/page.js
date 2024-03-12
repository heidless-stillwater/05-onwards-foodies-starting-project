import { Suspense } from 'react'
import Link from 'next/link'
import MealsGrid from '@/components/meals/meals-grid'
import classes from './page.module.css'
import { getMeals } from '@/lib/meals'
import { getClientBuildManifest } from 'next/dist/client/route-loader'

async function Meals() {
  const meals = await getMeals()
  return <MealsGrid meals={meals} />
} 

export default function MealsPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created {' '}
          <span className={classes.highlight}>by You</span>
        </h1>
        <p>
          Choose your favorite receipt and cook it yourself. It is easy & fun...
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>
            Share your favorite Recipe
          </Link>
        </p>
      </header>
      
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}