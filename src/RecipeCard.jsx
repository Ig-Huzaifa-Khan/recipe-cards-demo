function RecipeCard({ name, cookingTime, difficulty, description, image, ingredients = [], dietaryTags = [] }) {
  return (
    <div className="recipe-card">
      {image ? (
        <img src={image} alt={name} className="recipe-image" />
      ) : (
        <div className="recipe-placeholder">Recipe Image</div>
      )}

      <div className="recipe-content">
        <div className="recipe-header">
          <h3 className="recipe-title">{name}</h3>
          <span className="recipe-time">{cookingTime} min</span>
        </div>

        <div className={`recipe-difficulty difficulty-${difficulty.toLowerCase()}`}>
          {difficulty}
        </div>

        <p className="recipe-description">{description}</p>

        {dietaryTags.length > 0 && (
          <div className="dietary-tags">
            {dietaryTags.map((tag, i) => (
              <span key={i} className={`dietary-tag ${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {ingredients.length > 0 && (
          <div className="ingredients">
            <h4>Ingredients</h4>
            <p className="ingredients-list">{ingredients.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;