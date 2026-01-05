export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full pt-4 pb-24 bg-[#e6e6e6]">
      <div className="container mx-auto px-6 lg:px-[69px]">
        <div className="flex flex-col items-center">
          <h2 className="font-extrabold text-black text-3xl lg:text-[32px] tracking-[2.88px] leading-normal mb-16 [font-family:'Inter',Helvetica]">
            ABOUT US
          </h2>

          <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">
            {/* Left side: Image and Button */}
            <div className="relative flex-shrink-0">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <button className="bg-[#211f21] text-white px-10 py-3 [font-family:'Inter',Helvetica] font-bold text-sm tracking-[1px] shadow-xl uppercase">
                  OUR DRINK
                </button>
              </div>
              <div className="w-[300px] lg:w-[450px] h-[300px] lg:h-[450px] relative">
                <img
                  className="w-full h-full object-contain relative z-10"
                  alt="Circular Food"
                  src="/figmaAssets/group-2.png"
                />
              </div>
            </div>

            {/* Right side: Text and Satay Image */}
            <div className="flex-1 relative">
              <div className="absolute -top-16 -right-10 hidden lg:block">
                <img
                  className="w-[150px] lg:w-[286px] h-auto object-cover opacity-80"
                  alt="Satay"
                  src="/figmaAssets/5ec8f37b-ef16-4b01-a0aa-8739d9d3d4d3-1.png"
                />
              </div>

              <div className="[font-family:'Inter',Helvetica] font-normal text-black text-lg lg:text-[22px] tracking-[0.5px] leading-relaxed text-justify opacity-90">
                Restoran Masakan Khas Blitar dengan penuh semangat dan dedikasi,
                kami menghadirkan kelezatan otentik dari dapur Blitar di lokasi
                kami yang terletak di Plumpungrejo. Dengan komitmen untuk
                mempersembahkan hidangan khas Blitar yang memikat lidah dan
                memanjakan selera, kami menyajikan ragam menu yang kaya akan
                rempah-rempah dan bumbu tradisional. Setiap hidangan yang kami
                sajikan tidak hanya mencerminkan warisan kuliner Blitar yang
                kaya, tetapi juga memberikan pengalaman kuliner yang autentik
                dan tak terlupakan bagi setiap pengunjung kami.
                <br />
                <br />
                Kami mengundang Anda untuk menikmati kelezatan masakan kami di
                suasana yang hangat dan ramah, di alamat kami di Jl. Jendral
                Sudirman No. 12.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
