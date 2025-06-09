import MealItem from "./meal-item";
import classes from './meal-grid.module.css';


export default function MealGrid({meals}) {
  return <ul className={classes.meals}>
    {meals.map(meal => (
      <li key={meal.slug}>
        <MealItem {...meal} />
      </li>
    ))}
  </ul>
}
