import { useState } from "react";
import { Search, Barcode } from "lucide-react";

const SearchBar = ({ onSearch, placeholder = "Search products..." }) => {
  const [query, setQuery] = useState("");
  const [isBarcodeMode, setIsBarcodeMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(isBarcodeMode ? "barcode" : "name", query.trim());
    }
  };

  const toggleMode = () => {
    setIsBarcodeMode((prev) => !prev);
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col sm:flex-row items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 shadow-md p-4 rounded-2xl mb-6 transition-all duration-500 ease-in-out animate-fade-in"
    >
      <div className="relative w-full sm:flex-1 transition-all duration-300">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isBarcodeMode ? "Enter barcode..." : placeholder}
          className="w-full py-2.5 pl-11 pr-4 rounded-xl bg-gray-100 dark:bg-gray-800 text-sm sm:text-base placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-300">
          {isBarcodeMode ? <Barcode size={20} /> : <Search size={20} />}
        </div>
      </div>

      <button
        type="button"
        onClick={toggleMode}
        className="px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out hover:scale-105"
      >
        {isBarcodeMode ? "Search by Name" : "Search by Barcode"}
      </button>

      <button
        type="submit"
        className="px-5 py-2 text-sm sm:text-base font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out hover:scale-105"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
