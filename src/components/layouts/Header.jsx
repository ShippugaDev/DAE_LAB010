const Header = () => {
  return (
    <header
      className="header"
      style={{
        background: "rgba(24,27,34,0.92)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
        borderBottom: "1px solid #23272f",
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 20,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transition: "background 0.3s, box-shadow 0.3s"
      }}
    >
      <nav
        className="nav nav--scroll"
        style={{
          padding: "0.25rem 0"
        }}
      >
        <div
          className="container d-flex a-items-center g-4"
          style={{
            minHeight: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <a
            href="#"
            className="link f-1 d-flex a-items-center g-2"
            style={{
              textDecoration: "none",
              alignItems: "center",
              gap: "0.7rem"
            }}
          >
            <img
              src="/logo.svg"
              alt="Sin E Spoiler"
              width="36"
              height="36"
              style={{
                borderRadius: "50%",
                boxShadow: "0 2px 8px rgba(96,165,250,0.10)"
              }}
            />
            <h2
              className="interactive interactive--lg c-primary"
              style={{
                fontWeight: 800,
                fontSize: "1.3rem",
                color: "#60a5fa",
                letterSpacing: "1px",
                margin: 0
              }}
            >
              Sin E Spoiler
            </h2>
          </a>
          {/* Menú horizontal en desktop, off-canvas en mobile */}
          <ul
            className="list f-2 list flexbox flexbox--center flexbox--responsive g-8"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2.2rem",
              margin: 0,
              padding: 0,
              alignItems: "center"
            }}
          >
            <li>
              <a href="#movies" className="link interactive" style={{ color: "#e0e7ef", fontWeight: 600 }}>
                🎬 Movies
              </a>
            </li>
            <li>
              <a href="#cinemas" className="link interactive" style={{ color: "#e0e7ef", fontWeight: 600 }}>
                🍿 Cinemas
              </a>
            </li>
            <li>
              <a href="#promotions" className="link interactive" style={{ color: "#e0e7ef", fontWeight: 600 }}>
                💸 Promotions
              </a>
            </li>
            <li>
              <a href="#tickets" className="link interactive" style={{ color: "#e0e7ef", fontWeight: 600 }}>
                🎟️ My Tickets
              </a>
            </li>
            <li>
              <a href="#ar" className="link interactive" style={{ color: "#e0e7ef", fontWeight: 600 }}>
                🖼️ AR Posters
              </a>
            </li>
          </ul>
          {/* Botones de la derecha */}
          <div
            className="f-1 d-flex a-items-center j-content-end g-2"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem"
            }}
          >
            <a
              href="#signin"
              className="button button--primary interactive"
              style={{
                background: "linear-gradient(90deg, #2563eb 60%, #60a5fa 100%)",
                color: "#fff",
                fontWeight: 700,
                borderRadius: "2rem",
                padding: "0.4rem 1.2rem",
                boxShadow: "0 2px 8px rgba(96,165,250,0.10)",
                letterSpacing: "0.5px",
                fontSize: "1rem"
              }}
            >
              💕 Sign In
            </a>
            <a
              href="#menu"
              className="link interactive interactive--2xl md:d-none"
              style={{
                fontSize: "1.7rem",
                color: "#60a5fa",
                background: "#23272f",
                borderRadius: "50%",
                width: "2.3rem",
                height: "2.3rem",
                display: "none", // Oculto en desktop, visible en mobile con media query
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(96,165,250,0.08)",
                transition: "background 0.2s"
              }}
              aria-label="Open menu"
            >
              ☰
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
