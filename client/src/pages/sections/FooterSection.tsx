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

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#211f21] py-20 px-6 lg:px-[75px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-[72px]">
          {/* Logo and Description */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="[font-family:'Jockey_One',Helvetica] font-normal text-5xl lg:text-[64px] tracking-[0] leading-tight">
                <span className="text-white">MK</span>
                <span className="text-[#ff7324]">B</span>
              </div>
              <div className="flex gap-1">
                <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm lg:text-base tracking-[1.28px]">
                  MAKANAN KHAS
                </span>
                <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff7325] text-sm lg:text-base">
                  BLITAR
                </span>
              </div>
            </div>

            <p className="max-w-[457px] [font-family:'Karla',Helvetica] font-normal text-white/80 text-base lg:text-lg tracking-[1px] leading-relaxed">
              Menawarkan beragam masakan yang mewakili cita rasa dan budaya
              kuliner Blitar, restoran ini merupakan destinasi kuliner yang
              menarik bagi pecinta masakan tradisional Indonesia.
            </p>

            <div className="flex items-center gap-6 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-5 h-5 hover:opacity-80 transition-opacity"
                >
                  <img
                    className="w-5 h-5 invert"
                    alt={social.alt}
                    src={social.src}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links 1 */}
          <nav className="flex flex-col gap-4 lg:gap-[15px]">
            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl lg:text-2xl tracking-[2px] mb-6 lg:mb-[38px]">
              Quick Link
            </h3>
            {quickLinks1.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Inter',Helvetica] font-normal text-white/70 text-lg lg:text-xl tracking-[1.80px] hover:text-[#ff7325] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Links 2 */}
          <nav className="flex flex-col gap-4 lg:gap-[15px]">
            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl lg:text-2xl tracking-[2px] mb-6 lg:mb-[38px]">
              Quick Link
            </h3>
            {quickLinks2.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Inter',Helvetica] font-normal text-white/70 text-lg lg:text-xl tracking-[1.80px] hover:text-[#ff7325] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Us */}
          <div className="flex flex-col gap-4 lg:gap-[11px]">
            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl lg:text-2xl tracking-[2px] mb-6 lg:mb-[42px]">
              Contact Us
            </h3>
            <address className="not-italic flex flex-col gap-4 lg:gap-[11px]">
              <p className="[font-family:'Inter',Helvetica] font-normal text-white/70 text-lg lg:text-xl tracking-[1.80px]">
                Jln. Jendral Sudirman Nomor 12 Plumpungrejo
              </p>
              <a
                href="tel:+6285785914859"
                className="[font-family:'Inter',Helvetica] font-normal text-white/70 text-lg lg:text-xl tracking-[1.80px] hover:text-[#ff7325] transition-colors"
              >
                +62-857-8591-4859
              </a>
              <a
                href="mailto:mkbblitar@gmail.com"
                className="[font-family:'Inter',Helvetica] font-normal text-white/70 text-lg lg:text-xl tracking-[1.80px] hover:text-[#ff7325] transition-colors"
              >
                mkbblitar@gmail.com
              </a>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};
