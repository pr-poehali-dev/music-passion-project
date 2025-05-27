import React from "react";

const Index = () => {
  return (
    <div
      className="min-h-screen font-roboto text-white text-center"
      style={{
        background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
      }}
    >
      {/* Header */}
      <header
        className="py-16 px-5"
        style={{
          background: "linear-gradient(135deg, #121212, #1f1f1f)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
        }}
      >
        <h1
          className="text-5xl font-bold mb-3"
          style={{
            color: "#00ffff",
            textShadow: "0 0 8px rgba(0, 255, 255, 0.33)",
          }}
        >
          Beka Zhutakeev
        </h1>
        <p className="text-xl text-gray-300">Музыка — моя душа</p>
      </header>

      {/* Spotify Section */}
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold mb-5" style={{ color: "#00ffee" }}>
          Слушай мою песню
        </h2>
        <a
          href="https://open.spotify.com/track/5Z7HoDraUhnW4kGqscZs2F?si=mJy8els0QaOENYvg37nC4w"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 py-3 px-6 text-white font-medium rounded-full text-lg transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "#1DB954",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1ed760";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#1DB954";
          }}
        >
          Открыть в Spotify
        </a>
      </section>

      {/* Contacts Section */}
      <section className="py-10 px-5">
        <h2 className="text-3xl font-bold mb-5" style={{ color: "#00ffee" }}>
          Контакты
        </h2>
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          {[
            {
              label: "Gmail",
              value: "bekaxanxs@gmail.com",
              href: "mailto:bekaxanxs@gmail.com",
            },
            {
              label: "TikTok",
              value: "@_bekaxs_01",
              href: "https://tiktok.com/@_bekaxs_01",
            },
            {
              label: "Telegram",
              value: "@ttbekaxs",
              href: "https://t.me/ttbekaxs",
            },
            {
              label: "Instagram",
              value: "@bekaxs_n",
              href: "https://www.instagram.com/bekaxs_n?igsh=NWJieTk0OWNmdmpu",
            },
          ].map((contact, index) => (
            <div
              key={index}
              className="w-full p-4 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: "#222",
                boxShadow: "0 0 10px rgba(0, 255, 255, 0.13)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#333";
                e.target.style.boxShadow = "0 0 16px rgba(0, 255, 255, 0.27)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#222";
                e.target.style.boxShadow = "0 0 10px rgba(0, 255, 255, 0.13)";
              }}
            >
              <span className="text-gray-300">{contact.label}: </span>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-lg transition-all duration-300"
                style={{ color: "#00ffff" }}
                onMouseEnter={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-3 text-sm mt-10"
        style={{
          color: "#888",
          borderTop: "1px solid #333",
        }}
      >
        © 2025 Beka Zhutakeev (Bekaxs)
      </footer>
    </div>
  );
};

export default Index;
