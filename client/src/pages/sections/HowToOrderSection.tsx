import { Card, CardContent } from "@/components/ui/card";
import { AnimatedWave } from "@/components/AnimatedWave";

const steps = [
  {
    icon: "/figmaAssets/food.png",
    title: "Pilih Menu",
    description:
      "Telusuri menu kami yang beragam dan pilihlah hidangan favorit Anda dari daftar masakan khas Blitar yang kami sajikan.",
  },
  {
    icon: "/figmaAssets/task.png",
    title: "Tentukan Pilihan",
    description:
      "Setelah memilih menu, tentukan pilihan Anda sesuai dengan selera dan keinginan.",
  },
  {
    icon: "/figmaAssets/dollar-coin.png",
    title: "Lakukan Pemesanan",
    description:
      "Setelah menentukan pilihan, masukan ke keranjang dan lakukan pembayaran.",
  },
];

export const HowToOrderSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 bg-[#e6e6e6]">
      {/* Wave Background Effect */}
      <AnimatedWave />

      <div className="container mx-auto px-6 lg:px-[69px] relative z-10">
        <h2 className="text-center [font-family:'Inter',Helvetica] font-extrabold text-black text-3xl lg:text-[32px] tracking-[2.88px] leading-normal mb-16 lg:mb-[116px]">
          HOW TO ORDER
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-[100px]">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-xl rounded-none"
            >
              <CardContent className="p-0">
                <div className="pt-8 lg:pt-[33px] px-8 lg:px-[37px] pb-16 lg:pb-[95px]">
                  <img
                    className="w-10 h-10 lg:w-[50px] lg:h-[50px] mb-6 lg:mb-[34px]"
                    alt={step.title}
                    src={step.icon}
                  />
                  <h3 className="[font-family:'Inter',Helvetica] font-extrabold text-black text-lg lg:text-xl tracking-[1.80px] leading-normal mb-2 lg:mb-[7px]">
                    {step.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-black text-sm lg:text-base tracking-[1.44px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
