const navigationItems = [
  { label: "HOME" },
  { label: "MENU" },
  { label: "ABOUT" },
];

const socialMediaIcons = [
  { alt: "Instagram", src: "/figmaAssets/instagram-1.png" },
  { alt: "Facebook", src: "/figmaAssets/facebook-1.png" },
  { alt: "Twitter x", src: "/figmaAssets/twitterx-1.png" },
  { alt: "You tube", src: "/figmaAssets/youtube-1.png" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[850px] bg-[#e6e6e6] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          className="absolute top-[291px] left-0 w-[434px] h-auto object-cover opacity-50 lg:opacity-100"
          alt="Top view mix"
          src="/figmaAssets/top-view-mix-vegetables-cutting-board-bowl-with-copy-space-1.png"
        />

        <div className="absolute top-0 right-0 w-[40%] lg:w-[591px] h-[701px]">
          <img
            className="w-full h-full object-cover"
            alt="Rectangle"
            src="/figmaAssets/rectangle-1.png"
          />
        </div>

        <div className="absolute top-[116px] right-[10%] lg:right-[289px] w-[300px] lg:w-[469px] h-auto aspect-square">
          <img
            className="w-full h-full object-contain"
            alt="Ellipse"
            src="/figmaAssets/ellipse-1.png"
          />
        </div>

        <div className="absolute top-[135px] right-[12%] lg:right-[308px] w-[270px] lg:w-[430px] h-auto aspect-square">
          <img
            className="w-full h-full object-contain"
            alt="Ellipse"
            src="/figmaAssets/ellipse-2.png"
          />
        </div>

        <div className="absolute top-[167px] right-[15%] lg:right-[355px] w-[230px] lg:w-[364px] h-auto aspect-square">
          <div className="w-full h-full rounded-full border-[15px] border-black overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover"
              alt="Image"
              src="/figmaAssets/image-11.png"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col w-full max-w-7xl mx-auto px-6 lg:px-[69px]">
        {/* Header */}
        <header className="flex items-center justify-between py-6 lg:pt-[13px] lg:pb-[30px]">
          <div className="[font-family:'Jockey_One',Helvetica] font-normal text-4xl lg:text-[64px] tracking-[0] leading-[normal]">
            <span className="text-black">MK</span>
            <span className="text-[#ff7324]">B</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 lg:gap-[102px]">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="[font-family:'Inter',Helvetica] font-bold text-black text-lg lg:text-2xl tracking-[0] leading-[normal] hover:text-[#ff7324] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4 lg:gap-[29px]">
            <div className="hidden lg:flex items-center gap-[29px] mr-4">
              {socialMediaIcons.map((icon, index) => (
                <button
                  key={index}
                  className="hover:opacity-70 transition-opacity"
                >
                  <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
                </button>
              ))}
            </div>
            <div className="w-[150px] lg:w-[198px] h-[35px] lg:h-[39px] bg-[#211f21] rounded-sm shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
              <div className="flex gap-3">
                {socialMediaIcons.map((icon, index) => (
                  <img
                    key={index}
                    className="w-3 h-3 invert"
                    alt={icon.alt}
                    src={icon.src}
                  />
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="flex flex-col pt-20 lg:pt-[180px]">
          <div className="max-w-[648px]">
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-black text-xl lg:text-[28px] tracking-[2px] leading-tight opacity-80">
              MAKANAN KHAS
            </h2>

            <h1 className="[font-family:'Jersey_25',Helvetica] font-normal text-black text-6xl lg:text-[120px] tracking-[2px] lg:tracking-[5px] leading-[0.8] mt-1 lg:mt-2">
              BLITAR
            </h1>

            <p className="[font-family:'Inter',Helvetica] font-normal text-black text-base lg:text-lg tracking-[0.2px] leading-relaxed mt-6 lg:mt-8 max-w-[480px] opacity-90">
              Selamat datang di Makanan Khas Blitar Kami menyajikan cita rasa
              khas Blitar dengan hidangan istimewa. Rasakan kelezatan autentik
              dari dapur Blitar hanya di sini!
            </p>

            <button className="mt-8 lg:mt-10 bg-[#df8931] text-white px-8 lg:px-12 py-3 lg:py-4 rounded-md [font-family:'Inter',Helvetica] font-bold text-sm lg:text-base tracking-[1px] hover:bg-[#c77a2b] transition-all shadow-lg uppercase">
              OUR FOOD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
