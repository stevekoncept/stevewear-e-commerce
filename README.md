# Stevewear React

React/Vite conversion of the supplied Stevewear HTML, CSS and JavaScript.

## Run

```bash
npm install
npm run dev
```

## Structure

- `src/components/` reusable UI components
- `src/pages/` Home, Shop and Checkout pages
- `src/context/CartContext.jsx` cart state + localStorage
- `src/data/products.js` product data
- `src/index.css` supplied stylesheet, retained with rem sizing

The project keeps `html { font-size: 62.5%; }`, so `1rem = 10px`.
