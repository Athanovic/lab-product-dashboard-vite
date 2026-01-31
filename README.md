# Product Dashboard

A dynamic, responsive product dashboard built with React, Vite, Material UI, and CSS Modules. Features product filtering, conditional rendering, and comprehensive test coverage.

## 🚀 Project Overview

This project demonstrates key React concepts including:
- Dynamic rendering with iteration and mapping
- Conditional rendering for different UI states
- Component composition and props
- CSS Modules for scoped styling
- Material UI integration
- Comprehensive testing with Jest and React Testing Library

## 📋 Features

- **Dynamic Product Display**: Products are rendered dynamically from a data array
- **Filtering**: Toggle between all products and in-stock products only
- **Conditional Rendering**: Different styles for out-of-stock items
- **Responsive Design**: Mobile-friendly layout with Material UI Grid
- **Empty State Handling**: Displays appropriate message when no products are available
- **Professional Styling**: Custom CSS Modules combined with Material UI theming

## 🛠️ Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Material UI**: Component library for professional UI elements
- **CSS Modules**: Scoped styling to avoid conflicts
- **Jest**: Testing framework
- **React Testing Library**: Testing utilities for React components

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd product-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The dashboard should be running!

## 🧪 Running Tests

This project includes comprehensive automated tests to validate functionality.

### Run all tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm test:watch
```

### Test Coverage

The test suite covers:
- ✅ Product card rendering
- ✅ Conditional rendering for in-stock/out-of-stock states
- ✅ Product list iteration
- ✅ Empty state handling
- ✅ Filter functionality
- ✅ Component styling

## 📁 Project Structure

```
product-dashboard/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx     # Individual product card component
│   │   ├── ProductList.jsx     # List container component
│   │   └── __tests__/
│   │       ├── ProductCard.test.jsx
│   │       └── ProductList.test.jsx
│   ├── styles/
│   │   └── ProductCard.module.css  # CSS Module for product cards
│   ├── __tests__/
│   │   └── App.test.jsx        # App component tests
│   ├── App.js                  # Main app component
│   └── index.js                # Application entry point
├── babel.config.js             # Babel configuration
├── jest.config.js              # Jest configuration
├── jest.setup.js               # Jest setup file
├── vite.config.js              # Vite configuration
├── package.json
└── README.md
```

## 🎨 Key Components

### App Component
- Main application component
- Manages product data and filtering state
- Renders ProductList with filtered products

### ProductList Component
- Receives array of products as props
- Iterates over products using `.map()`
- Handles empty state with conditional rendering
- Uses React fragments to avoid unnecessary DOM nodes

### ProductCard Component
- Displays individual product information
- Conditional styling based on stock availability
- Uses CSS Modules for scoped styles
- Material UI components for professional appearance

## 🎯 Learning Objectives Achieved

### ✅ Rendering Conventions
- **Iteration**: Using `.map()` to render lists of components
- **Conditional Rendering**: Displaying different UI based on state
- **Fragments**: Using `<>` and `</>` to group elements without extra nodes

### ✅ Styling
- **CSS Modules**: Scoped styling with `.module.css` files
- **Material UI**: Professional components and theming
- **Responsive Design**: Grid layout that adapts to screen size

### ✅ Testing
- **Component Testing**: Individual component test suites
- **Integration Testing**: Testing component interactions
- **Edge Cases**: Empty lists, null/undefined props

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests once
- `npm test:watch` - Run tests in watch mode

## 🐛 Troubleshooting

### Tests failing?
1. Ensure all dependencies are installed: `npm install`
2. Check that component files match expected structure
3. Review test output for specific error messages
4. Verify CSS Module class names are being applied

### Development server not starting?
1. Check that port 3000 is available
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

## 📝 Code Quality

The codebase includes:
- Comprehensive JSDoc comments
- Descriptive variable and function names
- Proper component structure and organization
- Accessibility considerations
- Responsive design principles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is part of an educational lab assignment.

## 🙏 Acknowledgments

- React Documentation
- Material UI Documentation
- CSS Modules Documentation
- Jest and React Testing Library Documentation

---

**Built with ❤️ for learning React fundamentals**