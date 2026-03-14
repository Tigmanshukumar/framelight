import React from 'react';

const PhotoCard = ({ photo, isFav, onToggle, index }) => {
  const animationDelay = `${index * 0.05}s`;

  return (
    <div
      className="card-enter relative rounded-[16px] overflow-hidden group border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] bg-white/[0.04]"
      style={{ animationDelay }}
    >
      {/* Image */}
      <img
        src={`https://picsum.photos/id/${photo.id}/400/300`}
        alt={photo.author}
        loading="lazy"
        className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Bottom info bar */}
      <div className="p-3 flex items-center justify-between bg-[rgba(10,10,15,0.9)]">
        <span className="text-sm text-white/70 truncate">{photo.author}</span>

        {/* Heart button */}
        <button
          className={`heart-btn text-xl ${isFav ? 'active' : 'text-white/30'}`}
          onClick={() => onToggle(photo)}
          aria-label={isFav ? 'Remove from favourites' : 'Add to favourites'}
        >
          {isFav ? '♥' : '♡'}
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
