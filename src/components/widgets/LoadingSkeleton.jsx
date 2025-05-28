import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingSkeleton({ count = 4, height, width }) {
  return (
    <div className="g-layout g-layout--auto-fit-columns g-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#23272f",
            borderRadius: "1.2rem",
            boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
            padding: "1rem",
            minWidth: 180,
            maxWidth: 320,
            margin: "0 auto",
          }}
        >
          <Skeleton
            height={height || 200}
            width={width || "100%"}
            style={{ borderRadius: "1rem", marginBottom: 12 }}
            baseColor="#1e293b"
            highlightColor="#334155"
          />
          <Skeleton
            height={22}
            width={"80%"}
            style={{ marginBottom: 8 }}
            baseColor="#1e293b"
            highlightColor="#334155"
          />
          <Skeleton
            height={16}
            width={"60%"}
            baseColor="#1e293b"
            highlightColor="#334155"
          />
        </div>
      ))}
    </div>
  );
}
