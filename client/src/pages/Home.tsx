import { AboutUsSection } from "./sections/AboutUsSection";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection";
import { DiscountCallToActionSection } from "./sections/DiscountCallToActionSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HowToOrderSection } from "./sections/HowToOrderSection";
import { MenuItemsSection } from "./sections/MenuItemsSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#e6e6e6] w-full min-w-[1440px] relative">
      <HeroSection />
      <AboutUsSection />
      <MenuItemsSection />
      <HowToOrderSection />
      <FooterSection />
      <DiscountCallToActionSection />
      <CustomerTestimonialsSection />
    </div>
  );
};
