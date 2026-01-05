import { Card, CardContent } from "@/components/ui/card";

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
    <section className="w-full py-12 px-4">
      <div className="max-w-[1282px] mx-auto">
        <h2 className="text-center [font-family:'Inter',Helvetica] font-extrabold text-black text-[32px] tracking-[2.88px] leading-normal mb-[116px]">
          HOW TO ORDER
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[100px]">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white border-0 shadow-none">
              <CardContent className="p-0">
                <div className="pt-[33px] px-[37px] pb-[95px]">
                  <img
                    className="w-[50px] h-[50px] mb-[34px]"
                    alt={step.title}
                    src={step.icon}
                  />
                  <h3 className="[font-family:'Inter',Helvetica] font-extrabold text-black text-xl tracking-[1.80px] leading-normal mb-[7px]">
                    {step.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[1.44px] leading-normal">
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
