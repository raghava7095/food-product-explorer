// components/ProductCard.jsx
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 overflow-hidden">
      <Link to={`/product/${product.code}`} className="block p-4 flex-col gap-3">
        <img
          src={
            product.image_url ||
            "https://dummyimage.com/300x200/cccccc/ffffff&text=No+Image"
          }
          alt={product.product_name || "No name"}
          loading="lazy"
          className="w-full h-40 object-contain rounded-md bg-gray-50"
        />
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.product_name || "No name"}
        </h2>
        <p className="text-sm text-gray-500">
          Category: {product.categories_tags?.[0]?.split(":")[1] || "Unknown"}
        </p>
        <p className="text-sm">
          <span className="font-medium text-gray-700">Nutrition Grade:</span>{" "}
          <span className="inline-block px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
            {product.nutrition_grades?.toUpperCase() || "N/A"}
          </span>
        </p>
      </Link>
    </div>
  );
}

export default ProductCard;
