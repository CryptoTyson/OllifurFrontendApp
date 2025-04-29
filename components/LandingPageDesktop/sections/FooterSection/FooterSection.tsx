import React from "react";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navigationLinks = [
    { name: "Home", href: "#" },
    { name: "Crematoriums", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Help", href: "#" },
    { name: "Privacy", href: "#" },
  ];

  // Footer links data
  const footerLinks = [
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Cookies", href: "#" },
  ];

  return (
    <footer className="w-full max-w-[1392px] h-80 mx-auto bg-[#252b37] rounded-lg overflow-hidden">
      <div className="w-full max-w-[1280px] h-[88px] mt-16 mx-auto px-20">
        <div className="relative w-full max-w-[1216px] h-[88px] mx-auto">
          {/* Logo */}
          <div className="flex items-start justify-center">
            <div className="relative w-[139px] h-8">
              <img
                className="absolute w-8 h-8 top-0 left-0"
                alt="Logomark"
                src="/logomark.svg"
              />
              <div className="absolute h-8 top-0 left-[42px]">
                <div className=" font-bold text-white text-2xl">
                  Ollifur
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center gap-6 mt-16">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="inline-flex items-center justify-center"
              >
                <span className="font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-white text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full max-w-[1280px] h-14 mt-[112px] mx-auto px-20">
        <div className="relative w-full max-w-[1216px] h-14 mx-auto border-t [border-top-style:solid] border-[#a3a7ae]">
          {/* Copyright */}
          <div className="absolute top-[31px] left-0 font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-white text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
            © 2023 Ollifur Inc. All rights reserved.
          </div>

          {/* Footer Links */}
          <div className="absolute top-8 right-0 flex items-start gap-4">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-white text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
