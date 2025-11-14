import { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [favIds, setFavIds] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then(setProducts);

    setFavIds(JSON.parse(localStorage.fav || "[]"));
  }, []);

  const toggleFav = (id) => {
    let fav = JSON.parse(localStorage.fav || "[]");
    fav = fav.includes(id) ? fav.filter((x) => x !== id) : [...fav, id];

    localStorage.fav = JSON.stringify(fav);
    setFavIds(fav);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Fake Store</h1>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-xl shadow flex flex-col items-center"
          >
            <img src={p.image} className="w-24 h-24 object-contain" />

            <div className="text-center mt-2 font-medium text-sm">
              {p.title}
            </div>
            <div className="text-gray-600 text-sm">${p.price}</div>

            <button
              onClick={() => toggleFav(p.id)}
              className="mt-3 px-3 py-1 text-sm border rounded-full hover:bg-gray-100"
            >
              {favIds.includes(p.id) ? "⭐ Favorited" : "☆ Favorite"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
