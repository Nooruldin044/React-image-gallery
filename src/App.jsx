import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState("nature");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const API_KEY = "34945228-af915dc9ca2f84301e20c719e"; 
  const API_URL = "https://pixabay.com/api/";

 const fetchImages = async (query) => {
  setLoading(true);
  try {
    const res = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: encodeURIComponent(query), // ✅ safe query
        per_page: 12,
        image_type: "photo",
        safesearch: true, // ✅ only safe images
      },
    });
    setImages(res.data.hits || []);
  } catch (error) {
    console.error("Error fetching images", error);
  }
  setLoading(false);
};

  useEffect(() => {
    fetchImages(search);
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🌄 Image Gallery</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <Gallery images={images} loading={loading} />
    </div>
  );
}

export default App;
