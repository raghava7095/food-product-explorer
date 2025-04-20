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
      className="w-full flex flex-col sm:flex-row items-center gap-3 text-gray-400 bg-white dark:bg-gray-900 shadow p-4 rounded-xl mb-6"
    >
      <div className="relative w-full sm:flex-1">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isBarcodeMode ? "Enter barcode..." : placeholder}
          className="w-full py-2 pl-10 pr-4 rounded-md bg-gray-100  text-gray-400 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {isBarcodeMode ? <Barcode size={18} /> : <Search size={18} />}
        </div>
      </div>

      <button
        type="button"
        onClick={toggleMode}
        className="px-4 py-2 border text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {isBarcodeMode ? "Search by Name" : "Search by Barcode"}
      </button>

      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
