import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { productCode } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  // Hook for navigation

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://world.openfoodfacts.org/api/v0/product/${productCode}.json`
        );
        const data = await res.json();
        setProduct(data.product || null);
      } catch (error) {
        console.error("Error fetching product detail", error);
      }
      setLoading(false);
    };

    fetchProductDetail();
  }, [productCode]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-600">Product not found</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}  // Navigate to the previous page
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6"
      >
        Go Back
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="md:w-1/3">
          <img
            src={product.image_url || 'https://via.placeholder.com/300'}
            alt={product.product_name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-2/3 flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">{product.product_name || "No name"}</h1>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Brand:</span> {product.brands || "Unknown"}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Category:</span> {product.categories_tags?.[0]?.split(':')[1] || "Unknown"}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Nutrition Grade:</span> {product.nutrition_grades || "N/A"}
          </p>

          {/* Product Description */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className="text-gray-700">{product.ingredients_text || "No description available."}</p>
          </div>

          {/* Nutritional Information */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Nutritional Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="font-semibold">Calories:</span>
                <p>{product.nutriments?.energy_kcal || "N/A"} kcal</p>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Fat:</span>
                <p>{product.nutriments?.fat || "N/A"} g</p>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Carbohydrates:</span>
                <p>{product.nutriments?.carbohydrates || "N/A"} g</p>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Sugar:</span>
                <p>{product.nutriments?.sugars || "N/A"} g</p>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Links</h2>
            {product.url ? (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Product on Open Food Facts
              </a>
            ) : (
              <p className="text-gray-600">No links available for this product.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
