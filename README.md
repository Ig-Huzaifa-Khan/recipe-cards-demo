# 🍽️ Recipe Cards Demo

A modern, responsive React component showcasing beautiful recipe cards built with Vite. Features clean design, conditional rendering, and smooth animations.

![Recipe Cards Demo](https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop)

## ✨ Features

- 🎨 **Modern Design** - Beautiful gradient titles, elegant cards with hover effects
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile devices  
- 🔧 **Reusable Component** - Flexible prop-based recipe card component
- 🖼️ **Smart Image Handling** - Graceful fallbacks for missing images
- 🏷️ **Dietary Tags** - Color-coded tags for Vegan, Vegetarian, Gluten-Free
- ⚡ **Fast Performance** - Optimized with Vite and minimal bundle size
- 🎯 **TypeScript Ready** - Easy to convert to TypeScript

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/recipe-cards-demo.git
cd recipe-cards-demo

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🏗️ Component Usage

```jsx
<RecipeCard
  name="Spaghetti Carbonara"
  cookingTime={20}
  difficulty="Easy"
  description="Creamy pasta with eggs and bacon"
  image="https://example.com/image.jpg"
  ingredients={["Pasta", "Eggs", "Bacon", "Parmesan"]}
  dietaryTags={["Vegetarian"]}
/>
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | ✅ | Recipe name |
| `cookingTime` | number | ✅ | Cooking time in minutes |
| `difficulty` | string | ✅ | "Easy", "Medium", or "Hard" |
| `description` | string | ✅ | Short recipe description |
| `image` | string | ❌ | Recipe image URL |
| `ingredients` | array | ❌ | List of ingredients |
| `dietaryTags` | array | ❌ | Diet labels |

## 🎨 Design Features

- **Gradient Header** - Eye-catching title with modern gradient effect
- **Card Hover Effects** - Smooth lift animation with enhanced shadows
- **Color-coded Difficulty** - Green (Easy), Orange (Medium), Red (Hard)
- **Professional Typography** - Clean Segoe UI font family
- **Responsive Grid** - Auto-fitting layout for any screen size

## 📦 Bundle Size

- **CSS**: 2.56 kB (gzipped: 1.02 kB)
- **JavaScript**: 189.74 kB (gzipped: 59.75 kB)
- **Total Source Code**: 309 lines

## 🛠️ Built With

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling
- [Unsplash](https://unsplash.com/) - Demo images

## 📁 Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Application styles
├── RecipeCard.jsx   # Reusable recipe card component  
├── recipeData.js    # Sample recipe data
├── index.css        # Global styles
└── main.jsx         # Application entry point
```

## 🌟 Demo Recipes

The demo includes 5 carefully crafted recipe examples:

1. **Spaghetti Carbonara** - Easy recipe with full data
2. **Quinoa Salad** - Medium difficulty, shows placeholder image
3. **Chocolate Cake** - Hard recipe with rich ingredients
4. **Buddha Bowl** - Healthy vegan option with multiple tags
5. **Pancakes** - Simple example with minimal data

## 🚀 Deployment

This project is deployment-ready for:

- **Netlify** - Drag & drop the `dist` folder
- **Vercel** - Connect your GitHub repository
- **GitHub Pages** - Use the built files in `dist/`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern recipe websites
- Images provided by [Unsplash](https://unsplash.com/)
- Built with ❤️ using React and Vite

---

⭐ **Star this repo if you found it helpful!**
