import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const menuCategories = [
  { label: "food", active: false },
  { label: "drink", active: false },
];

const menuItems = [
  {
    name: "Nasi Pecel",
    price: "Rp 15.000",
    time: "10 Mnts",
    image: "/figmaAssets/rectangle-5.png",
    rating: 5,
  },
  {
    name: "Rawon Sapi",
    price: "Rp 15.000",
    time: "10 Mnts",
    image: "/figmaAssets/rectangle-5-1.png",
    rating: 5,
  },
  {
    name: "Es Pleret",
    price: "Rp 15.000",
    time: "10 Mnts",
    image: "/figmaAssets/rectangle-5-2.png",
    rating: 5,
  },
  {
    name: "Ikan Uceng",
    price: "Rp 15.000",
    time: "10 Mnts",
    image: "/figmaAssets/rectangle-5-3.png",
    rating: 5,
  },
  {
    name: "Wajik Kletik",
    price: "Rp 15.000",
    time: "10 Mnts",
    image: "/figmaAssets/rectangle-5-4.png",
    rating: 5,
  },
  {
    name: "Tahu Campur",
    price: "Rp 15.000",
    time: "10 Mnts",
    image: "/figmaAssets/rectangle-5-5.png",
    rating: 5,
  },
  {
    name: "Rujak CIngur",
    price: "Rp 15.000",
    time: "10 Mnts",
    image: "/figmaAssets/rectangle-5-6.png",
    rating: 5,
  },
  {
    name: "Es Cendol",
    price: "Rp 15.000",
    time: "10 Mnts",
    image: "/figmaAssets/rectangle-5-7.png",
    rating: 5,
  },
];

export const MenuItemsSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col py-8">
      <div className="flex items-center gap-[59px] mb-[53px]">
        <h2 className="[font-family:'Leckerli_One',Helvetica] font-normal text-black text-[45px] tracking-[4.05px] leading-[normal]">
          Menu
        </h2>

        {menuCategories.map((category, index) => (
          <button
            key={index}
            className="[font-family:'Leckerli_One',Helvetica] font-normal text-[#444444] text-[32px] tracking-[2.88px] leading-[normal] hover:text-black transition-colors"
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-x-5 gap-y-[26px]">
        {menuItems.map((item, index) => (
          <Card
            key={index}
            className="w-[305px] h-96 bg-white shadow-[0px_4px_34.3px_-20px_#00000040] border-0 overflow-hidden"
          >
            <CardContent className="p-0 relative h-full">
              <img
                className="w-full h-[278px] rounded-[0px_0px_25px_25px] object-cover"
                alt={item.name}
                src={item.image}
              />

              <div className="px-[21px] pt-[23px]">
                <div className="flex items-start justify-between mb-[7px]">
                  <h3 className="[font-family:'Inter',Helvetica] font-semibold text-black text-2xl tracking-[2.16px] leading-[normal]">
                    {item.name}
                  </h3>

                  <div className="flex items-start gap-px">
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <img
                        key={starIndex}
                        className="w-[15.22px] h-[14.47px]"
                        alt="Star"
                        src="/figmaAssets/star-3.svg"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-[5px] mb-[16px]">
                  <img
                    className="w-[19px] h-[19px]"
                    alt="Delivery time"
                    src="/figmaAssets/delivery-time-7.png"
                  />
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-[#999999] text-[10px] tracking-[0.90px] leading-[normal]">
                    {item.time}
                  </span>
                </div>

                <div className="[font-family:'Inter',Helvetica] font-semibold text-black text-base tracking-[1.44px] leading-[normal] mb-[5px]">
                  {item.price}
                </div>

                <Button
                  variant="ghost"
                  className="h-auto p-0 [font-family:'Inter',Helvetica] font-bold text-[#e8881d] text-lg tracking-[1.62px] leading-[normal] hover:bg-transparent hover:text-[#e8881d]/80"
                >
                  ORDER NOW
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
