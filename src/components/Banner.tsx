import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="bg-white px-4 py-4 sm:px-6 lg:px-8 lg:py-6"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Banner Content */}
        <div className="text-center lg:text-left">

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <span className="brand-gradient-text block">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 lg:mx-0">
            Explore frontend, backend, database and tooling options,
            compare them side by side and put together the stack that fits your
            new project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#technologies"
              className="brand-gradient rounded-full px-6 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerImage}
            alt="Developer technology stack"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;