import { AboutUsSection } from "./sections/AboutUsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { DiscountCallToActionSection } from "./sections/DiscountCallToActionSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HowToOrderSection } from "./sections/HowToOrderSection";
import { MenuItemsSection } from "./sections/MenuItemsSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#e6e6e6] w-full overflow-x-hidden">
      <HeroSection />
      <AboutUsSection />
      <MenuItemsSection />
      <HowToOrderSection />
      <TestimonialsSection />
      <DiscountCallToActionSection />
      <FooterSection />
    </div>
  );
};
