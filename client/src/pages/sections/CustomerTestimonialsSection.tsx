import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const quickLinks1 = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const quickLinks2 = [
  { label: "FAQ'S", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Support", href: "#" },
];

const socialLinks = [
  {
    icon: InstagramIcon,
    alt: "Instagram",
    src: "/figmaAssets/instagram-1.png",
  },
  { icon: FacebookIcon, alt: "Facebook", src: "/figmaAssets/facebook-1.png" },
  {
    icon: TwitterIcon,
    alt: "TwitterIcon x",
    src: "/figmaAssets/twitterx-1.png",
  },
  { icon: YoutubeIcon, alt: "You tube", src: "/figmaAssets/youtube-1.png" },
];

export const CustomerTestimonialsSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#211f21] py-[83px] px-[75px]">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr_1fr] gap-8 lg:gap-[72px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="[font-family:'Jockey_One',Helvetica] font-normal text-[64px] tracking-[0] leading-[normal]">
              <span className="text-white">MK</span>
              <span className="text-[#ff7324]">B</span>
            </div>
            <div className="flex gap-1">
              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[1.28px] leading-[normal]">
                MAKANAN KHAS
              </span>
              <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff7325] text-base tracking-[0] leading-[normal]">
                BLITAR
              </span>
            </div>
          </div>

          <p className="max-w-[457px] [font-family:'Karla',Helvetica] font-normal text-white text-lg tracking-[1.62px] leading-[normal]">
            Menawarkan beragam masakan yang mewakili cita rasa dan budaya
            kuliner Blitar, restoran ini merupakan destinasi kuliner yang
            menarik bagi pecinta masakan tradisional Indonesia.
          </p>

          <div className="flex items-center gap-[29px]">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-5 h-5 hover:opacity-80 transition-opacity"
              >
                <img className="w-5 h-5" alt={social.alt} src={social.src} />
              </a>
            ))}
          </div>
        </div>

        <nav className="flex flex-col gap-[15px]">
          <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[2.16px] leading-[normal] mb-[38px]">
            Quick Link
          </h3>
          {quickLinks1.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[1.80px] leading-[normal] hover:text-[#ff7325] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="flex flex-col gap-[15px]">
          <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[2.16px] leading-[normal] mb-[38px]">
            Quick Link
          </h3>
          {quickLinks2.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[1.80px] leading-[normal] hover:text-[#ff7325] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-[11px]">
          <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[2.16px] leading-[normal] mb-[42px]">
            Contact Us
          </h3>
          <address className="not-italic flex flex-col gap-[11px]">
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[1.80px] leading-[normal]">
              Jln. Jendral Sudirman Nomor 12 Plumpungrejo
            </p>
            <a
              href="tel:+6285785914859"
              className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[1.80px] leading-[normal] hover:text-[#ff7325] transition-colors"
            >
              +62-857-8591-4859
            </a>
            <a
              href="mailto:mkbblitar@gmail.com"
              className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[1.80px] leading-[normal] hover:text-[#ff7325] transition-colors"
            >
              mkbblitar@gmail.com
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
};
