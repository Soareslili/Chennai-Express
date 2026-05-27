import heroBanner from "../../assets/heroBanner.png";


    
    const Hero = () => {
        return (
    <section className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={heroBanner}
            alt="Authentic Indian cuisine"
            width={1920}
            height={800}
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-display text-6xl font-bold italic text-white drop-shadow-lg sm:text-7xl md:text-8xl">
            Chennai
            </h1>
          </div>
        </div>
      </section>

        );
    };

export default Hero;