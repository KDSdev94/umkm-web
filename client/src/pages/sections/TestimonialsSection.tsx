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

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 bg-[#e6e6e6]">
      <div className="container mx-auto px-6 lg:px-[69px]">
        <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-black text-3xl lg:text-[32px] tracking-[2.88px] leading-[normal] text-center mb-20 lg:mb-[86px]">
          WHAT CUSTOMER SAY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-12 max-w-[1105px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full max-w-[538px] aspect-[538/372]">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Food"
                  src={testimonial.image}
                />

                {/* Avatar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-20 h-20 lg:w-[91px] lg:h-[91px] bg-white rounded-full p-1 shadow-lg">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    alt="Customer"
                    src={testimonial.avatar}
                  />
                </div>
              </div>

              {/* Content Card */}
              <Card className="mt-12 lg:mt-16 w-full max-w-[372px] bg-white rounded-[20px] shadow-[0px_4px_20px_#00000020] border-0 relative z-10">
                <CardContent className="pt-12 lg:pt-[54px] pb-8 px-8">
                  <div className="flex justify-center mb-4">
                    <div className="flex gap-1.5">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, starIndex) => (
                          <img
                            key={starIndex}
                            className="w-4 h-4 lg:w-[16.17px] lg:h-[15.38px]"
                            alt="Star"
                            src="/figmaAssets/star-11.svg"
                          />
                        )
                      )}
                    </div>
                  </div>

                  <p className="[font-family:'Inter',Helvetica] font-medium text-black text-sm lg:text-base text-center tracking-[1px] leading-relaxed">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
