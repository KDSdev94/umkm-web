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
    <section className="w-full py-16 bg-[#e6e6e6]">
      <div className="container mx-auto px-6 lg:px-[69px]">
        <div className="flex items-center gap-10 lg:gap-[59px] mb-12 lg:mb-[53px]">
          <h2 className="[font-family:'Leckerli_One',Helvetica] font-normal text-black text-4xl lg:text-[45px] tracking-[4.05px] leading-[normal]">
            Menu
          </h2>

          <div className="flex items-center gap-8">
            {menuCategories.map((category, index) => (
              <button
                key={index}
                className="[font-family:'Leckerli_One',Helvetica] font-normal text-[#444444] text-2xl lg:text-[32px] tracking-[2.88px] leading-[normal] hover:text-black transition-colors"
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-5 lg:gap-y-[26px]">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="w-full max-w-[305px] mx-auto h-auto bg-white shadow-[0px_4px_34.3px_-20px_#00000040] border-0 overflow-hidden rounded-xl"
            >
              <CardContent className="p-0 relative flex flex-col h-full">
                <div className="w-full h-[278px] overflow-hidden rounded-b-[25px]">
                  <img
                    className="w-full h-full object-cover"
                    alt={item.name}
                    src={item.image}
                  />
                </div>

                <div className="px-5 pt-6 pb-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-black text-xl lg:text-2xl tracking-[1px] leading-tight">
                      {item.name}
                    </h3>

                    <div className="flex items-center gap-0.5 mt-1">
                      {Array.from({ length: item.rating }).map(
                        (_, starIndex) => (
                          <img
                            key={starIndex}
                            className="w-3 h-3 lg:w-[15.22px] lg:h-[14.47px]"
                            alt="Star"
                            src="/figmaAssets/star-3.svg"
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mb-4">
                    <img
                      className="w-4 h-4 lg:w-[19px] lg:h-[19px]"
                      alt="Delivery time"
                      src="/figmaAssets/delivery-time-7.png"
                    />
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-[#999999] text-[10px] tracking-[0.90px]">
                      {item.time}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="[font-family:'Inter',Helvetica] font-semibold text-black text-base tracking-[1.44px] mb-2">
                      {item.price}
                    </div>

                    <Button
                      variant="ghost"
                      className="h-auto p-0 [font-family:'Inter',Helvetica] font-bold text-[#e8881d] text-lg tracking-[1.62px] hover:bg-transparent hover:text-[#e8881d]/80"
                    >
                      ORDER NOW
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
