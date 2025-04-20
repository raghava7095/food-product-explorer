# 🥫 Food Product Explorer

This is a responsive and dynamic React web application which allows users to search and explore food products using the OpenFoodFacts API. Users can filter by category, sort by nutritional values, view detailed product pages, and more.

---

## ✅ Features Implemented

- 🔍 **Search** functionality with real-time OpenFoodFacts API integration
- 🧾 **Product Detail Page** with nutrition facts, images, and ingredients
- 🧠 **Category Filter** to narrow down product results
- 📊 **Sorting** by calories, fat, sugar, and carbs (ascending/descending)
- 🎨 Responsive UI with modern styling using Tailwind CSS
- ⚡ Smooth transitions, loading animations, and interactive UX
- 🔗 External product link to OpenFoodFacts

---

## 🛠️ Technologies Used

- **React**
- **Tailwind CSS**
- **React Router DOM**
- **OpenFoodFacts API**

---

## 🧠 Methodology

1. **Planning & Setup**:
   - Bootstrapped with Vite + React + Tailwind CSS.
   - Created reusable components: `SearchBar`, `ProductCard`, `ProductDetail`, `CategoryFilter`.

2. **API Integration**:
   - Used the [OpenFoodFacts API](https://world.openfoodfacts.org/) to fetch food product data based on search query and filters.
   - Implemented fallback for missing product fields and handled API edge cases.

3. **Sorting Mechanism**:
   - Added dropdown to sort products based on:
     - Product Names(Alphabetic Order)
     - Nutrients Grades
   - Implemented both **ascending and descending** order options.
   - Sorting handled on the client side after fetching results.

4. **State Management**:
   - `useState` and `useEffect` used extensively for managing UI state and API requests.
   - Conditional rendering for loader and empty results.

5. **Routing**:
   - Used `react-router-dom` to enable deep linking between product lists and individual product pages.

6. **UI/UX Enhancements**:
   - Tailwind CSS for sleek UI with responsive layout
   - Smooth effects for hover, button transitions, and layout changes

---

## ⏱️ Time Taken

- Approx. **7–9 hours** in total.
- Includes:
  - Project setup & API planning (~1 hr)
  - Building components (~2 hrs)
  - Sorting, filtering, routing logic (~2.5 hrs)
  - Styling & effects (~1.5 hrs)
  - Bug fixing, optimization, and polish (~2 hrs)

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/raghava7095/food-product-explorer.git
cd food-product-explorer
npm install
npm run dev
