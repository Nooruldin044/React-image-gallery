import React from "react";

function SearchBar({ search, setSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex justify-center">
      <div className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="🔍 Search images (e.g., animals, nature, sky)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow p-3 rounded-l-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
