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
    <section className="relative w-full min-h-[970px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between">
        <img
          className="absolute top-[291px] left-0 w-[434px] h-[679px] object-cover"
          alt="Top view mix"
          src="/figmaAssets/top-view-mix-vegetables-cutting-board-bowl-with-copy-space-1.png"
        />

        <div className="absolute top-0 right-0 w-[591px] h-[701px]">
          <img
            className="w-full h-full object-cover"
            alt="Rectangle"
            src="/figmaAssets/rectangle-1.png"
          />
        </div>

        <div className="absolute top-[116px] right-[289px] w-[469px] h-[464px]">
          <img
            className="w-full h-full object-contain"
            alt="Ellipse"
            src="/figmaAssets/ellipse-1.png"
          />
        </div>

        <div className="absolute top-[135px] right-[308px] w-[430px] h-[430px]">
          <img
            className="w-full h-full object-contain"
            alt="Ellipse"
            src="/figmaAssets/ellipse-2.png"
          />
        </div>

        <div className="absolute top-[167px] right-[355px] w-[364px] h-[362px]">
          <img
            className="w-full h-full object-cover rounded-full"
            alt="Image"
            src="/figmaAssets/image-11.png"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col w-full">
        <header className="flex items-center justify-between px-[69px] pt-[13px] pb-[30px]">
          <div className="[font-family:'Jockey_One',Helvetica] font-normal text-[64px] tracking-[0] leading-[normal]">
            <span className="text-black">MK</span>
            <span className="text-[#ff7324]">B</span>
          </div>

          <nav className="flex items-center gap-[102px]">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="[font-family:'Inter',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal] hover:text-[#ff7324] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-[29px]">
            {socialMediaIcons.map((icon, index) => (
              <button
                key={index}
                className="hover:opacity-70 transition-opacity"
              >
                <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
              </button>
            ))}
          </div>
        </header>

        <div className="flex flex-col px-[69px] pt-[287px]">
          <div className="max-w-[648px]">
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-black text-[32px] text-justify tracking-[1.92px] leading-[normal]">
              MAKANAN KHAS
            </h2>

            <h1 className="[font-family:'Jersey_25',Helvetica] font-normal text-black text-8xl tracking-[8.64px] leading-[normal] mt-[21px]">
              BLITAR
            </h1>

            <p className="[font-family:'Karla',Helvetica] font-normal text-black text-lg tracking-[1.62px] leading-[normal] mt-[39px] max-w-[642px]">
              Selamat datang di Makanan Khas Blitar Kami menyajikan cita rasa
              khas Blitar dengan hidangan istimewa. Rasakan kelezatan autentik
              dari dapur Blitar hanya di sini!
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-[43px] right-[115px] w-[198px] h-[39px] bg-[#211f21] shadow-[0px_4px_4px_#00000040]" />
    </section>
  );
};
