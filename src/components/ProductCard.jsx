import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col gap-2">
      {/* Wrap the content with a Link to navigate to the product detail page */}
      <Link to={`/product/${product.code}`} className="flex flex-col gap-2">
        <img
           src={product.image_url || "https://dummyimage.com/150x150/cccccc/ffffff&text=No+Image"}
          alt={product.product_name}
           loading="lazy"
          className="w-full h-40 object-contain"
        />
        <h2 className="font-semibold text-lg">{product.product_name || "No name"}</h2>
        <p className="text-sm text-gray-600">Category: {product.categories_tags?.[0]?.split(':')[1] || "Unknown"}</p>
        <p className="text-sm">Nutrition Grade: {product.nutrition_grades || "N/A"}</p>
      </Link>
    </div>
  );
}

export default ProductCard;

