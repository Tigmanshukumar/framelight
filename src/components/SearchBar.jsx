import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by photographer..."
        className="w-full px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 focus:outline-none focus:border-[#7c6cfc] transition-colors placeholder:text-white/30"
      />
    </div>
  );
};

export default SearchBar;
