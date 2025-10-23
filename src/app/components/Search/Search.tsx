'use client'
import { useState } from 'react';

export default function Search({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState(``);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search fruits..."
        type="text"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}