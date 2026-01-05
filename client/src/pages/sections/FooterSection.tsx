import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    image: "/figmaAssets/rectangle-10.png",
    avatar: "/figmaAssets/ellipse-6.png",
    text: "Kuah kacangnya begitu lezat dan sayuran segarnya memberikan sentuhan yang sempurna.",
    rating: 5,
  },
  {
    image: "/figmaAssets/rectangle-10-1.png",
    avatar: "/figmaAssets/ellipse-6-1.png",
    text: "Daging sapinya sangat lembut dan bumbu marinadenya sungguh enak.",
    rating: 5,
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-black text-[32px] tracking-[2.88px] leading-[normal] text-center mb-[86px]">
          WHAT CUSTOMER SAY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1105px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full max-w-[538px]">
                <img
                  className="w-full h-[372px] object-cover rounded-lg"
                  alt="Food"
                  src={testimonial.image}
                />

                <Card className="absolute bottom-[-64px] left-1/2 -translate-x-1/2 w-[372px] bg-white rounded-[20px] shadow-[0px_4px_4px_#00000040] border-0">
                  <CardContent className="pt-[54px] pb-6 px-6">
                    <div className="flex justify-center mb-[22px]">
                      <div className="flex gap-2.5">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, starIndex) => (
                            <img
                              key={starIndex}
                              className="w-[16.17px] h-[15.38px]"
                              alt="Star"
                              src="/figmaAssets/star-11.svg"
                            />
                          ),
                        )}
                      </div>
                    </div>

                    <p className="[font-family:'Inter',Helvetica] font-medium text-black text-base text-center tracking-[1.44px] leading-[normal]">
                      {testimonial.text}
                    </p>
                  </CardContent>
                </Card>

                <div className="absolute top-[223px] left-1/2 -translate-x-1/2 w-[91px] h-[91px] bg-white rounded-[45.5px] flex items-center justify-center">
                  <img
                    className="w-[79px] h-[79px] rounded-full object-cover"
                    alt="Customer"
                    src={testimonial.avatar}
                  />
                </div>
              </div>

              <div className="h-[64px]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
