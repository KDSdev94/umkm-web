export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="font-extrabold text-black text-[32px] tracking-[2.88px] leading-normal mb-12 [font-family:'Inter',Helvetica]">
            ABOUT US
          </h2>

          <div className="relative w-full flex items-start justify-between gap-8">
            <img
              className="w-[388px] h-[408px] object-contain flex-shrink-0"
              alt="Group"
              src="/figmaAssets/group-2.png"
            />

            <div className="flex-1 [font-family:'Karla',Helvetica] font-normal text-black text-2xl tracking-[2.16px] leading-normal">
              Restoran Masakan Khas Blitar dengan penuh semangat dan dedikasi,
              kami menghadirkan kelezatan otentik dari dapur Blitar di lokasi
              kami yang terletak di Plumpungrejo. Dengan komitmen untuk
              mempersembahkan hidangan khas Blitar yang memikat lidah dan
              memanjakan selera, kami menyajikan ragam menu yang kaya akan
              rempah-rempah dan bumbu tradisional. Setiap hidangan yang kami
              sajikan tidak hanya mencerminkan warisan kuliner Blitar yang kaya,
              tetapi juga memberikan pengalaman kuliner yang autentik dan tak
              terlupakan bagi setiap pengunjung kami.
              <br />
              <br />
              Kami mengundang Anda untuk menikmati kelezatan masakan kami di
              suasana yang hangat dan ramah, di alamat kami di Jl. Jendral
              Sudirman No. 12.
            </div>

            <img
              className="w-[286px] h-[286px] object-cover flex-shrink-0"
              alt="Element"
              src="/figmaAssets/5ec8f37b-ef16-4b01-a0aa-8739d9d3d4d3-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
