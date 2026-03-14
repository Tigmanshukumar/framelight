import React from 'react';
import PhotoCard from './PhotoCard';

const Gallery = ({ photos, favourites, onToggle, query }) => {
  if (photos.length === 0 && query.trim() !== '') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4 text-[#7c6cfc] opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-white/90">No photographers match your search</h3>
        <p className="text-white/40 mt-2">Try searching for a different name</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {photos.map((photo, index) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFav={favourites.some((p) => p.id === photo.id)}
          onToggle={onToggle}
          index={index}
        />
      ))}
    </div>
  );
};

export default Gallery;
