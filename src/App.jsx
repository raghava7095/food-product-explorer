import { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  // Used only for infinite scroll (page > 1 or category change)
  const fetchProducts = async (pageNum = 1, categoryParam = category) => {
    if (loading) return;
    setLoading(true);

    const searchTerm = categoryParam || "food"; // default term
    let url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1&page=${pageNum}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (pageNum === 1) {
        setProducts(data.products || []);
      } else {
        setProducts((prev) => [...prev, ...(data.products || [])]);
      }

      if (!data.products || data.products.length < 30) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Fetch failed:", error);
    }

    setLoading(false);
  };

  const handleSearch = async (type, value) => {
    setLoading(true);
    setProducts([]); // clear UI
    setHasMore(false);
    setPage(1); // reset page
    setCategory(null); // clear category selection

    try {
      let data;
      if (type === "name") {
        const res = await fetch(
          `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${value}&search_simple=1&action=process&json=1`
        );
        data = await res.json();
        await new Promise((resolve) => setTimeout(resolve, 300)); // allow spinner
        setProducts(data.products || []);
      } else if (type === "barcode") {
        const res = await fetch(
          `https://world.openfoodfacts.org/api/v0/product/${value}.json`
        );
        data = await res.json();
        await new Promise((resolve) => setTimeout(resolve, 300)); // allow spinner
        setProducts(data.product ? [data.product] : []);
      }
    } catch (err) {
      console.error("Search failed", err);
      setProducts([]);
    }

    setLoading(false);
  };

  const handleCategorySelect = async (categoryId) => {
    setLoading(true);
    setProducts([]);
    setCategory(categoryId);
    setPage(1);
    setHasMore(true);

    try {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${categoryId}&search_simple=1&action=process&json=1&page=1`;
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.products || []);
      if (!data.products || data.products.length < 30) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Category fetch failed:", error);
      setProducts([]);
    }

    setLoading(false);
  };

  // Initial + infinite scroll data fetch
  useEffect(() => {
    // Use "food" if no category selected and page is 1
    if (page === 1 && !category) {
      fetchProducts(1, "food");
    } else {
      fetchProducts(page, category);
    }
  }, [page, category]);

  // Infinite scroll logic
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight &&
      hasMore &&
      !loading
    ) {
      setPage((prev) => prev + 1);
    }
  }, [hasMore, loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleProductClick = (productCode) => {
    navigate(`/product/${productCode}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Food Product Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter onCategorySelect={handleCategorySelect} />

      {loading && products.length === 0 && (
        <div className="text-center text-lg font-semibold py-6 animate-pulse">
          🔄 Loading...
        </div>
      )}

      {products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              product={product}
              onClick={() => handleProductClick(product.code)}
            />
          ))}
        </div>
      )}

      {!loading && products.length === 0 && (
        <p className="text-center text-gray-600 mt-8">No products found.</p>
      )}

      {loading && products.length > 0 && (
        <p className="text-center mt-4">🔄 Loading more...</p>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:productCode" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
