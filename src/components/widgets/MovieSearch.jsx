import { useState, useEffect } from "react";

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    onSearch(debouncedQuery.toLowerCase());
  }, [debouncedQuery, onSearch]);

  return (
    <div
      className="movie-search-bar"
      style={{
        display: "flex",
        alignItems: "center",
        background: "#fff",
        borderRadius: "2rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        padding: "0.5rem 1rem",
        maxWidth: 400,
        margin: "1rem auto"
      }}
    >
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        style={{ marginRight: "0.75rem", color: "#888" }}
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="search"
        value={query}
        placeholder="Search movies..."
        className="form__input"
        aria-label="Search movies"
        autoComplete="off"
        onChange={(e) => setQuery(e.target.value)}
        style={{
          border: "none",
          outline: "none",
          fontSize: "1rem",
          background: "transparent",
          width: "100%",
          color: "#222" // Cambia el color del texto a negro
        }}
      />
    </div>
  );
};

export default MovieSearch;
