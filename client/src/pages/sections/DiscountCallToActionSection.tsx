import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const DiscountCallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[400px] lg:h-[446px] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Thai food noodles"
        src="/figmaAssets/thai-food-noodles-with-pork-meatball-vegetable-1.png"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center">
        <h2 className="max-w-[886px] [font-family:'Kavoon',Helvetica] font-normal text-white text-3xl lg:text-5xl text-center tracking-[2px] lg:tracking-[4.32px] leading-tight mb-12">
          Join Us To Get Amazing Discount On Your Next Order
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-0 max-w-[865px] w-full bg-white rounded-lg overflow-hidden shadow-2xl">
          <Input
            type="email"
            placeholder="Your Email Here"
            className="flex-1 h-16 lg:h-[95px] border-0 rounded-none [font-family:'Inter',Helvetica] font-medium text-[#9d9595] text-lg lg:text-xl tracking-[1px] px-8 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button className="w-full sm:w-auto h-16 lg:h-[95px] rounded-none bg-[#211f21] hover:bg-black px-12 [font-family:'Inter',Helvetica] font-bold text-lg lg:text-xl tracking-[2px] text-white transition-all">
            SUBMIT
          </Button>
        </div>
      </div>
    </section>
  );
};
