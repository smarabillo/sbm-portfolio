const Services = () => {
  return (
    <section className="lg:h-[300px] md:h-[300px] h-[200px] flex justify-center items-center md:p-20 px-0 bg-gradient-to-b from-[var(--color-primary)] via-blue-900 to-blue-950">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="slider w-full overflow-hidden relative h-[100px]">
          <div className="slide-track flex">
            {/* Original Items */}
            {["Development", "UI / UX", "Web Design"].map((text, index) => (
              <div
                key={index}
                className="slide w-[250px] h-[100px] flex items-center justify-center"
              >
                <h1 className="text-white text-2xl font-semibold text-center">
                  {text}
                </h1>
              </div>
            ))}

            {/* Duplicate Items for Seamless Scrolling */}
            {["Development", "UI / UX", "Web Design"].map((text, index) => (
              <div
                key={`dup-${index}`}
                className="slide w-[250px] h-[100px] flex items-center justify-center"
              >
                <h1 className="text-white text-2xl font-semibold text-center">
                  {text}
                </h1>
              </div>
            ))}

            {/* Second Duplicate Set for Perfect Loop */}
            {["Development", "UI / UX", "Web Design"].map((text, index) => (
              <div
                key={`dup2-${index}`}
                className="slide w-[250px] h-[100px] flex items-center justify-center"
              >
                <h1 className="text-white text-2xl font-semibold text-center">
                  {text}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
