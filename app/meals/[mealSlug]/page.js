export default function MealDetails({ params }) {
  return (
    <>
      <h1>Meal Details</h1>
      <h2>Details for: {params.mealSlug}</h2>
    </>
  )
}