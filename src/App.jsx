import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePremieres } from "./hooks/usePremieres";
import Header from "./components/layouts/Header";
import Hero from "./components/modules/Hero";
import PremieresSlider from "./components/modules/PremieresSlider";
import MovieList from "./components/modules/MovieList";
import Footer from "./components/layouts/Footer";
import { getMovies } from "./utils/movie.utils";
import useLocalStorage from "./hooks/useLocalStorage";
import { useDebounce } from "./hooks/useDebounce";
import LoadingSkeleton from "./components/widgets/LoadingSkeleton";
import MovieSearch from "./components/components/MovieSearch";
import { notifyFavorite } from "./utils/notifyFavorite";

const FAVORITE_KEY = "sin-e-favorites";

function App() {
  const [movies] = useState(getMovies());
  // Usa useLocalStorage para persistencia de favoritos
  const [favorites, setFavorites] = useLocalStorage(FAVORITE_KEY, []);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedQuery = useDebounce(searchTerm, 300);

  const { premieres, loading: loadingPremieres } = usePremieres();

  // Permite agregar y quitar favoritos (array de películas)
  const handleToggleFavorite = (movie) => {
    const exists = favorites.some((f) => f.id === movie.id);
    const updated = exists
      ? favorites.filter((f) => f.id !== movie.id)
      : [...favorites, movie];
    setFavorites(updated);
    notifyFavorite(movie, !exists);
  };

  // Filtra películas por búsqueda
  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="main d-flex f-direction-column g-8">
        <Hero handleEvent={setSearchTerm} />
        {/* Sección de estrenos */}
        <section className="section section--premieres">
          <h2 className="title c-primary t-align-center">Estrenos</h2>
          {loadingPremieres ? (
            <LoadingSkeleton count={4} height={230} />
          ) : (
            <PremieresSlider
              items={premieres}
              loading={false}
              onSelect={() => {}}
            />
          )}
        </section>
        {/* Barra de búsqueda */}
        <MovieSearch onSearch={setSearchTerm} />
        <MovieList
          id="now-showing"
          title="Now Showing 🎬"
          movies={filteredMovies}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
        {favorites.length > 0 && (
          <>
            <h2 className="title c-primary t-align-center m-top-8">
              Mis favoritos ❤️
            </h2>
            <MovieList
              id="favorites"
              title=""
              movies={favorites}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          </>
        )}
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
