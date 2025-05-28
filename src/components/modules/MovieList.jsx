import MovieCard from "../components/MovieCard";

const MovieList = ({ movies, favorites = [], onToggleFavorite }) => {
  return (
    <section className="section section--movies">
      <div className="container">
        <div
          className="movie-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2.5rem",
            justifyItems: "center"
          }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.some(f => f.id === movie.id)}
              onToggleFavorite={() => onToggleFavorite(movie)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
