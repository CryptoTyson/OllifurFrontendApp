import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ProcessSection } from "./sections/ProcessSection/ProcessSection";
import { TestimonialSection } from "./sections/TestimonialSection";

export const LandingPageDesktop = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", hasDropdown: false },
    { label: "Services", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "About us", hasDropdown: false },
  ];

  return (
    <div className="bg-[#fbfcfc] p-6 flex flex-row justify-center w-full">
      <div className="bg-gray-25 w-full  relative">
        <div className="w-full p-6 relative rounded-lg" style={{
          backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(/hero-section.png)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="flex justify-between items-start">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#faf4f2e6] rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  className="w-8 h-8 object-cover"
                  alt="Ollifur removebg"
                  src="/ollifur-removebg-preview-1.png"
                />
              </div>
              <div className="[font-family:'Kind_Sans-Bold',Helvetica] font-bold text-white text-4xl">
                Ollifur
              </div>
            </div>

            {/* Navigation */}
            <div className="w-[611px] h-12 bg-[#faf4f2e6] rounded-lg overflow-hidden flex items-center justify-between px-6">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-8">
                  {navItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <div className="flex items-center gap-2">
                        <span className="[font-family:'Kind_Sans-Semibold',Helvetica] font-normal text-gray-600 text-base leading-6">
                          {item.label}
                        </span>
                        {item.hasDropdown && (
                          <ChevronDownIcon className="w-5 h-5" />
                        )}
                      </div>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <Button
                className="bg-[#d77f33e6] border-[#d77f33] text-basewhite rounded-lg"
                size="sm"
              >
                Immediate need
              </Button>
            </div>
          </div>

          {/* Hero content */}
          <div className="mt-[300px] mb-[200px] ml-24 max-w-[753px]">
            <h1 className="[font-family:'Recoleta-SemiBold',Helvetica] font-semibold text-white text-[64px] leading-[normal] mb-12">
              Cherish the ones you love, we&apos;ll take care of the rest.
            </h1>
            <div className="flex gap-4">
              <Button
                className="bg-primary-50 border-[#ebbf99] text-primary-600 rounded-lg px-7 py-4 h-auto"
                variant="outline"
              >
                Memorials
              </Button>
              <Button className="bg-[#d77f33e6] border-[#d77f33] text-basewhite rounded-lg px-7 py-4 h-auto">
                Immediate need
              </Button>
            </div>
          </div>
        </div>

        {/* Main sections */}
        <FAQSection />
        <HeroSection />
        <TestimonialSection />
        <ProcessSection />
        <FooterSection />
      </div>
    </div>
  );
};
