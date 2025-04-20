# 🥫 Food Product Explorer

A responsive and dynamic React web application which allows users to search and explore food products using the OpenFoodFacts API. Users can search by name or barcode, filter by category, sort by nutritional values, view detailed product pages, and scroll infinitely to load more products.

---

## ✅ Features Implemented

- 🔍 **Search by Product Name** with real-time OpenFoodFacts API integration
- 📦 **Search by Barcode**
- 🧠 **Category Filter** to narrow down product results
- 📊 **Sorting** by product names and nutrient grades (ascending/descending)
- 🔁 **Infinite Scrolling** (Pagination via `load more` as user scrolls down)
- 📄 **Product Detail Page** with:
  - Product image
  - Ingredients
  - Nutrition facts
  - Labels (vegan, gluten-free, etc.)
- 🎨 **Responsive UI** with Tailwind CSS
- ⚡ Smooth transitions, animations, and interactive UX
- 🔗 External product link to OpenFoodFacts

---

## 🛠️ Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **React Router DOM**
- **OpenFoodFacts API**

---

## 🧠 Implementation Approach

1. **Setup & Structure**:
   - Bootstrapped with Vite + React + Tailwind CSS.
   - Organized components for clarity and reusability (`SearchBar`, `ProductCard`, `ProductDetail`, `CategoryFilter`).

2. **API Integration**:
   - Used [OpenFoodFacts API](https://world.openfoodfacts.org/) for product and category data.
   - Separate fetch logic for search by name and barcode.

3. **Search Functionality**:
   - Search input filters products by name.
   - Barcode input fetches details for a specific product.

4. **Sorting Mechanism**:
   - Users can sort by:
     - Nutrient Grades
     - Product Names
   - Options for ascending/descending.
   - Sorting applied on client-side after data fetch.

5. **Infinite Scrolling**:
   - Implemented using `IntersectionObserver`.
   - Products load dynamically as the user scrolls down.
   - State-based page offset used to fetch next batch of items via API pagination.

6. **Routing**:
   - Routing handled by `react-router-dom` for navigation between main and detail pages.

7. **UI/UX Enhancements**:
   - Tailwind CSS for sleek, mobile-first design.
   - Graceful handling of loading, no results, and API failures.

---

## ⏱️ Time Taken

Approx. **7–9 hours** total:
- Setup and planning – ~1 hr  
- Component development – ~2 hrs  
- API and logic – ~2.5 hrs  
- Styling – ~1.5 hrs  
- Infinite scrolling, testing & polishing – ~2 hrs  

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/raghava7095/food-product-explorer.git
cd food-product-explorer
npm install
npm run dev
