import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import LoadingSkeleton from "../widgets/LoadingSkeleton";

export default function PremieresSlider({ items, loading, onSelect }) {
  if (loading) {
    return <LoadingSkeleton count={4} height={200} />;
  }
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
      keyboard={{ enabled: true }}
      spaceBetween={24}
      style={{ padding: "1.5rem 0", minHeight: 400 }} // altura mínima mayor
    >
      {items.map(movie => (
        <SwiperSlide key={movie.id}>
          <div
            tabIndex={0}
            className="p-relative"
            onClick={() => onSelect(movie)}
            onKeyDown={e => e.key === "Enter" && onSelect(movie)}
            style={{
              background: "linear-gradient(135deg, #23272f 80%, #181b22 100%)",
              borderRadius: "1.2rem",
              boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
              padding: "1rem 1rem 1.2rem 1rem", // más padding abajo
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              minHeight: 350, // más alto
              transition: "transform 0.18s, box-shadow 0.18s",
              position: "relative"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="card__image"
              loading="lazy"
              style={{
                width: "100%",
                height: 230, // imagen más alta
                objectFit: "cover",
                borderRadius: "0.9rem",
                marginBottom: 18,
                boxShadow: "0 2px 10px rgba(30,41,59,0.13)",
                filter: "brightness(0.93) saturate(1.12)",
                transition: "filter 0.2s"
              }}
            />
            <h3
              className="title title--2xs c-primary"
              style={{
                margin: "0.7rem 0 0.2rem 0",
                fontWeight: 700,
                fontSize: "1.08rem",
                textAlign: "center",
                letterSpacing: "0.5px",
                textShadow: "0 1px 0 #1e293b"
              }}
            >
              {movie.title}
            </h3>
            <span
              style={{
                color: "#60a5fa",
                fontSize: "0.97rem",
                fontWeight: 600,
                marginBottom: 6,
                background: "#1e293b",
                borderRadius: "0.5rem",
                padding: "0.13rem 0.7rem"
              }}
            >
              {movie.genre}
            </span>
            <span
              style={{
                color: "#cbd5e1",
                fontSize: "0.99rem",
                margin: "0.3rem 0 0.5rem 0",
                textAlign: "center",
                minHeight: 48, // más espacio para descripción
                display: "block"
              }}
            >
              {movie.description.length > 90 ? movie.description.slice(0, 87) + "..." : movie.description}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
