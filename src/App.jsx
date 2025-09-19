import './App.css'
import RecipeCard from './RecipeCard'
import { sampleRecipes } from './recipeData'

function App() {
  return (
    <div className="app">
      <h1>Recipe Cards Demo</h1>
      <div className="recipe-grid">
        {sampleRecipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            name={recipe.name}
            cookingTime={recipe.cookingTime}
            difficulty={recipe.difficulty}
            description={recipe.description}
            image={recipe.image}
            ingredients={recipe.ingredients}
            dietaryTags={recipe.dietaryTags}
          />
        ))}
      </div>
    </div>
  )
}

export default App
