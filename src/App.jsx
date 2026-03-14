import React, { useState, useMemo, useCallback, useReducer, useEffect } from 'react';
import { useFetchPhotos } from './hooks/useFetchPhotos';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';

const saved = localStorage.getItem('favourites');
const initialState = { favourites: saved ? JSON.parse(saved) : [] };

function favouritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return { ...state, favourites: [...state.favourites, action.payload] };
    case 'REMOVE_FAVOURITE':
      return {
        ...state,
        favourites: state.favourites.filter(p => p.id !== action.payload.id),
      };
    case 'CLEAR_ALL':
      return { ...state, favourites: [] };
    default:
      return state;
  }
}

const SkeletonCard = () => (
  <div className="rounded-[16px] overflow-hidden border border-white/[0.06] bg-white/[0.02]">
    <div className="skeleton h-52 w-full" />
    <div className="p-3 bg-[rgba(10,10,15,0.9)]">
      <div className="skeleton h-3 w-2/3 rounded-full" />
    </div>
  </div>
);

const SkeletonGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[...Array(12)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

const ErrorState = ({ message }) => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <div className="text-6xl mb-4">⚠️</div>
    <h3 className="text-xl font-medium text-white/90">Failed to load photos</h3>
    <p className="text-white/40 mt-2 mb-6">{message || "Check your connection."}</p>
    <button 
      onClick={() => window.location.reload()}
      className="px-6 py-2 bg-[#7c6cfc] text-white rounded-full font-medium hover:bg-[#6b5ae0] transition-colors"
    >
      Retry
    </button>
  </div>
);

const Header = ({ query, onSearch, favouritesCount }) => (
  <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0f]/85 backdrop-blur-2xl border-b border-white/[0.05]">
    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#7c6cfc] tracking-tight">Framelight</h1>
        {favouritesCount > 0 && (
          <div className="bg-[#7c6cfc]/10 text-[#7c6cfc] px-3 py-1 rounded-full text-sm font-medium border border-[#7c6cfc]/20 animate-[pulse-ring_2s_infinite]">
            ♥ {favouritesCount} saved
          </div>
        )}
      </div>
      <SearchBar value={query} onChange={onSearch} />
    </div>
  </header>
);

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [state, dispatch] = useReducer(favouritesReducer, initialState);
  const [query, setQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(state.favourites));
  }, [state.favourites]);

  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const handleToggle = (photo) => {
    const isFav = state.favourites.some(p => p.id === photo.id);
    dispatch(isFav 
      ? { type: 'REMOVE_FAVOURITE', payload: photo } 
      : { type: 'ADD_FAVOURITE',    payload: photo } 
    );
  };

  const filteredPhotos = useMemo(() => {
    if (!query.trim()) return photos;
    return photos.filter(p => 
      p.author.toLowerCase().includes(query.toLowerCase()) 
    );
  }, [photos, query]);

  return (
    <div className="bg-[#0a0a0f] min-h-screen text-[#f0f0f5]">
      <Header 
        query={query} 
        onSearch={handleSearch} 
        favouritesCount={state.favourites.length} 
      />
      
      <main className="pt-40 pb-16 px-4 max-w-7xl mx-auto">
        {loading && <SkeletonGrid />}
        
        {error && <ErrorState message={error} />}
        
        {!loading && !error && (
          <Gallery 
            photos={filteredPhotos} 
            favourites={state.favourites} 
            onToggle={handleToggle}
            query={query}
          />
        )}
      </main>
    </div>
  );
}

export default App;
