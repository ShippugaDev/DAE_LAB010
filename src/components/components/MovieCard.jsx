import { useState } from "react";
import Rating from "../widgets/Rating";
import Button from "../widgets/Button";

const MovieCard = ({ movie, isFavorite = false, onToggleFavorite }) => {
  const { title, rating, genre, duration, image, description, showTimes } = movie;
  const [animating, setAnimating] = useState(false);

  const handleFavoriteClick = () => {
    if (animating) return; // prevent spam clicks
    setAnimating(true);
    onToggleFavorite(movie.id);
    setTimeout(() => setAnimating(false), 500); // animation duration
  };

  return (
    <article
      className="card card--movie"
      style={{
        borderRadius: "1.2rem",
        boxShadow: "0 6px 32px rgba(0,0,0,0.32)",
        overflow: "hidden",
        background: "linear-gradient(135deg, #23272f 70%, #181b22 100%)",
        transition: "transform 0.22s cubic-bezier(.4,2,.3,1), box-shadow 0.22s",
        margin: "1.5rem 0",
        position: "relative",
        cursor: "pointer",
        maxWidth: 420,
        marginLeft: "auto",
        marginRight: "auto"
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <div className="card__header p-relative" style={{ position: "relative" }}>
        <img
          src={image}
          alt={`${title} poster`}
          className="card__image"
          loading="lazy"
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderTopLeftRadius: "1.2rem",
            borderTopRightRadius: "1.2rem",
            filter: "brightness(0.85) saturate(1.15)",
            transition: "filter 0.3s"
          }}
        />
        <span
          className="badge badge--primary p-absolute t-2 r-2"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "linear-gradient(90deg, #2563eb 60%, #1e40af 100%)",
            color: "#fff",
            borderRadius: "1rem",
            padding: "0.32rem 1rem",
            fontWeight: "bold",
            fontSize: "0.95rem",
            boxShadow: "0 2px 10px rgba(30,64,175,0.18)",
            letterSpacing: "0.5px"
          }}
        >
          {genre}
        </span>

        <button
          aria-label={isFavorite ? `Remove ${title} from favorites` : `Add ${title} to favorites`}
          onClick={handleFavoriteClick}
          className={`favorite-button p-absolute t-2 l-2 ${animating ? "animate" : ""}`}
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            background: "rgba(30,41,59,0.92)",
            border: "none",
            borderRadius: "50%",
            width: "2.4rem",
            height: "2.4rem",
            fontSize: "1.4rem",
            cursor: "pointer",
            boxShadow: animating
              ? "0 0 0 6px #334155, 0 2px 12px rgba(30,41,59,0.18)"
              : "0 2px 12px rgba(30,41,59,0.18)",
            transition: "box-shadow 0.3s, background 0.2s",
            outline: animating ? "2px solid #334155" : "none",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <span
            style={{
              display: "inline-block",
              transform: animating ? "scale(1.2) rotate(-10deg)" : "scale(1)",
              transition: "transform 0.25s cubic-bezier(.4,2,.3,1)"
            }}
          >
            {isFavorite ? "♥️" : "🤍"}
          </span>
        </button>
      </div>

      <div
        className="card__body d-flex f-direction-column g-2"
        style={{
          padding: "1.2rem 1.3rem 1rem 1.3rem",
          background: "linear-gradient(135deg, #23272f 80%, #181b22 100%)",
          borderBottomLeftRadius: "1.2rem",
          borderBottomRightRadius: "1.2rem",
          boxShadow: "0 2px 8px rgba(30,41,59,0.10)"
        }}
      >
        <h3
          className="card__title"
          style={{
            margin: 0,
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#e0e7ef",
            letterSpacing: "0.1px",
            textShadow: "0 1px 0 #1e293b"
          }}
        >
          {title}
        </h3>
        <div className="d-flex a-items-center g-2" style={{ gap: "0.7rem", margin: "0.5rem 0" }}>
          <Rating value={rating} />
          <span
            className="card__duration"
            style={{
              fontSize: "0.98rem",
              color: "#60a5fa",
              background: "#1e293b",
              borderRadius: "0.5rem",
              padding: "0.18rem 0.7rem",
              fontWeight: 600,
              letterSpacing: "0.1px"
            }}
          >
            {duration}
          </span>
        </div>
        <p
          className="card__description"
          style={{
            color: "#cbd5e1",
            fontSize: "0.99rem",
            margin: "0.4rem 0 0.8rem 0",
            minHeight: "44px",
            lineHeight: 1.5,
            letterSpacing: "0.01em"
          }}
        >
          {description.length > 150 ? description.slice(0, 147) + "..." : description}
        </p>

        <div className="card__showtimes" style={{ marginTop: "0.7rem" }}>
          <h4
            className="card__subtitle"
            style={{
              fontSize: "1.01rem",
              fontWeight: 700,
              marginBottom: "0.4rem",
              color: "#60a5fa",
              letterSpacing: "0.4px"
            }}
          >
            Today's Showtimes
          </h4>
          <div className="d-flex f-wrap g-2" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
            {showTimes.map((time, i) => (
              <Button
                key={i}
                text={time}
                variant="outline-primary"
                ariaLabel={`Showtime ${time} for ${title}`}
                style={{
                  borderRadius: "0.7rem",
                  padding: "0.35rem 1rem",
                  fontWeight: 600,
                  fontSize: "0.97rem",
                  border: "1.5px solid #2563eb",
                  color: "#e0e7ef",
                  background: "rgba(37,99,235,0.10)",
                  boxShadow: "0 1px 4px rgba(37,99,235,0.07)",
                  transition: "background 0.2s, color 0.2s, border 0.2s"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
