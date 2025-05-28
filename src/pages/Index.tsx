import React from "react";

const Index = () => {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* Header */}
      <header className="py-8 px-5 text-center">
        <h1 className="text-5xl font-bold mb-3" style={{ color: "#00ffee" }}>
          Beka Zhutakeev (Bekaxs)
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Я начинающий артист и автор песен. Музыка — это мой способ выражать чувства и мечты.
          Моя первая песня называется <strong>"Снова один"</strong>, и я сам её написал и исполнил.
        </p>
      </section>

      {/* Spotify Section */}
      <section className="py-10 px-5 text-center">
        <h2 className="text-3xl font-bold mb-5" style={{ color: "#00ffee" }}>
          Моя музыка
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Слушайте мои треки на Spotify
        </p>
        <a
          href="https://open.spotify.com/artist/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
          style={{
            background: "#1db954",
            color: "white",
            boxShadow: "0 0 20px rgba(29, 185, 84, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 30px rgba(29, 185, 84, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = "0 0 20px rgba(29, 185, 84, 0.3)";
          }}
        >
          Открыть в Spotify
        </a>
      </section>

      {/* Contacts Section */}
      <section className="py-10 px-5">
        <h2
          className="text-3xl font-bold mb-5 text-center"
          style={{ color: "#00ffee" }}
        >
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
                e.currentTarget.style.background = "#333";
                e.currentTarget.style.boxShadow =
                  "0 0 16px rgba(0, 255, 255, 0.27)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#222";
                e.currentTarget.style.boxShadow =
                  "0 0 10px rgba(0, 255, 255, 0.13)";
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
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
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
        className="py-8 px-3 text-sm mt-10 text-center"
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
