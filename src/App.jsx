import './App.css'
import RecipeCard from './RecipeCard'
import { sampleRecipes } from './recipeData'

function App() {
  return (
    <div className="app">
      <div className="background-effects">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      
      <header className="app-header">
        <h1 className="main-title">Recipe Cards Demo</h1>
        <p className="subtitle">Discover amazing recipes with beautiful designs</p>
      </header>
      
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
      
      <footer className="app-footer">
        <div className="footer-content">
          <div className="made-by">
            <span className="made-by-text">Made with ❤️ by</span>
            <span className="author-name">Huzaifa Khan</span>
          </div>
          <div className="footer-links">
            <a href="https://github.com/Ig-Huzaifa-Khan" target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
            <span className="separator">•</span>
            <a href="https://github.com/Ig-Huzaifa-Khan/recipe-cards-demo" target="_blank" rel="noopener noreferrer" className="footer-link">
              Source Code
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
