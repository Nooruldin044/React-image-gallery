import React from "react";

function Gallery({ images, loading }) {
  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.length > 0 ? (
        images.map((img) => (
          <div key={img.id} className="overflow-hidden rounded-lg shadow-md">
            <a href={img.largeImageURL} target="_blank" rel="noopener noreferrer">
              <img
                src={img.previewURL} // ✅ Pixabay uses previewURL for thumbnails
                alt={img.tags || "pixabay-img"}
                className="w-full h-60 object-cover hover:scale-105 duration-300"
              />
            </a>
            <p className="p-2 text-center bg-gray-100 text-gray-700 capitalize">
              {img.tags || "Image"}
            </p>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No images found</p>
      )}
    </div>
  );
}

export default Gallery;
