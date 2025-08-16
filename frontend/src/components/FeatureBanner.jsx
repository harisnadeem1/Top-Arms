import React from "react";

export default function HeroSection({
  backgroundImage = "/Home/features-section.jpeg",
  headlineSmall = "TOP GUNS",
  headlineMain = "YOUR TRUSTED DISTRIBUTOR OF QUALITY FIREARMS AND AMMUNITION IN THE REGION",
  scrollText = "Built for the bold ~ Trusted by the elite ~",
}) {
  return (
    <section
      className="relative w-full h-[85vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        fontFamily: "'Kanit', sans-serif",
        fontStyle: "italic",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12">
        {/* Small Heading */}
        <h4 className="text-white text-3xl sm:text-4xl font-extrabold mb-4">
          <span className="relative inline-block">
            {headlineSmall}
            <span
              className="absolute bottom-0 left-0 w-full h-1.5"
              style={{ backgroundColor: "#ec5f00" }}
            ></span>
          </span>
        </h4>

        {/* Main Heading */}
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
          {headlineMain.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="/about"
            className="text-white font-semibold px-6 py-3 transition"
            style={{
              backgroundColor: "#ec5f00",
              borderRadius: "5px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#d65200")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ec5f00")
            }
          >
            READ MORE ABOUT US
          </a>
          <a
            href="/contact"
            className="font-semibold px-6 py-3 transition"
            style={{
              border: "2px solid #ec5f00",
              color: "#ec5f00",
              borderRadius: "5px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ec5f00";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#ec5f00";
            }}
          >
            SPEAK TO US
          </a>
        </div>
      </div>

      {/* Scrolling Outlined Text */}
      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap py-8">
        <div
          className="inline-block"
          style={{
            animation: "scrollText 10s linear infinite",
          }}
        >
          {[...Array(2)].map((_, idx) => (
            <span
              key={idx}
              className="mx-6 text-transparent text-7xl sm:text-9xl font-extrabold tracking-wider uppercase"
              style={{
                WebkitTextStroke: "3px #ec5f00",
                color: "transparent",
              }}
            >
              {scrollText}
            </span>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes scrollText {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
