import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const DiscountCallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[446px]">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Thai food noodles"
        src="/figmaAssets/thai-food-noodles-with-pork-meatball-vegetable-1.png"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative flex flex-col items-center justify-center h-full px-4">
        <h2 className="max-w-[886px] [font-family:'Kavoon',Helvetica] font-normal text-white text-5xl text-center tracking-[4.32px] leading-normal mb-12">
          Join Us To Get Amazing Discount On Your Next Order
        </h2>

        <div className="flex items-center gap-0 max-w-[865px] w-full bg-white h-[95px]">
          <Input
            type="email"
            placeholder="Your Email Here"
            className="flex-1 h-full border-0 rounded-none [font-family:'Inter',Helvetica] font-medium text-[#9d9595] text-xl tracking-[1.80px] px-6 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button className="h-full rounded-none bg-primary hover:bg-primary/90 px-8 [font-family:'Inter',Helvetica] font-medium text-lg">
            SUBMIT
          </Button>
        </div>
      </div>
    </section>
  );
};
