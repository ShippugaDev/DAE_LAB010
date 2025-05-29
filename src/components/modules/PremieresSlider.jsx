import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LoadingSkeleton from "../widgets/LoadingSkeleton";

export default function PremieresSlider({ items, loading, onSelect }) {
  if (loading) {
    return <LoadingSkeleton count={4} height={230} />;
  }
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
      spaceBetween={24}
      style={{ padding: "1.5rem 0", minHeight: 320 }}
    >
      {items.map(movie => (
        <SwiperSlide key={movie.id}>
          <div
            tabIndex={0}
            className="p-relative"
            onClick={() => onSelect(movie)}
            onKeyDown={e => e.key === "Enter" && onSelect(movie)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              background: "none",
              boxShadow: "none",
              borderRadius: 0,
              padding: 0,
              minHeight: 0
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                height: 600, // imagen aún más larga tipo cartelera
                objectFit: "cover",
                borderRadius: "1.1rem",
                boxShadow: "0 2px 18px rgba(30,41,59,0.20)",
                marginBottom: 18,
                display: "block"
              }}
              loading="lazy"
            />
            <h3
              className="title title--2xs c-primary"
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: "1.08rem",
                textAlign: "center",
                letterSpacing: "0.5px",
                textShadow: "0 1px 0 #1e293b"
              }}
            >
              {movie.title}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
