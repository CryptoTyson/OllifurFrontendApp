import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { HeroSection } from "./sections/HeroSection";
import { ProcessSection } from "./sections/ProcessSection/ProcessSection";
import { TestimonialSection } from "./sections/TestimonialSection";
import Footer from '../../components/Footer';

export const LandingPageDesktop = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", hasDropdown: false },
    { label: "Services", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "About us", hasDropdown: false },
  ];

  return (
    <div className="bg-[#fbfcfc] p-6 max-sm:p-0 flex flex-row justify-center w-full">
      <div className="bg-gray-25 w-full  relative">
        <div className="w-full p-6 relative rounded-lg" style={{
          backgroundImage: "url(/hero-section.png)",
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
                  src="/ollifur.png"
                />
              </div>
              <div className="font-bold text-white text-4xl">
                Ollifur
              </div>
            </div>

            {/* Navigation */}
            <div className="w-[611px] h-12 bg-[#faf4f2e6] rounded-lg overflow-hidden flex max-sm:flex-row items-center justify-between sm:p-4 sm:px-6">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-8">
                  {navItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-600 text-base leading-6">
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
                className="bg-[#d77f33e6] border-[#d77f33] text-white rounded-lg"
                size="sm"
              >
                Immediate need
              </Button>
            </div>
          </div>

          {/* Hero content */}
          <div className="sm:mt-[300px] max-sm:mt-[200px] sm:mb-[150px] max-sm:mb-[200px] mx-4 sm:ml-24 max-w-[753px]">
            <h1 className="font-[Recoleta] font-semibold text-white max-sm:text-[40px] sm:text-[64px] leading-[normal]">
              Cherish the ones you love, we&apos;ll take care of the rest.
            </h1>
            <div className="flex max-sm:flex-col md:flex-row gap-4 mt-8 sm:mt-12 max-sm:gap-6">
              <Button
                className="bg-[#f8eadd] border-[#ebbf99] text-[#d77f33] rounded-lg px-7 py-4 h-auto"
                variant="outline"
              >
                Memorials
              </Button>
              <Button className="bg-[#d77f33e6] border-[#d77f33] text-white rounded-lg px-7 py-4 h-auto">
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
        <Footer toggleDir={() => {}} />
      </div>
    </div>
  );
};
