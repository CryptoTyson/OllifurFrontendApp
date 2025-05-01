import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { FAQSectionDesktop, FAQSectionMobile } from "./sections/FAQSection/FAQSection";
import { HeroSectionDesktop, HeroSectionMobile } from "./sections/HeroSection/HeroSection";
import { ProcessSectionDesktop, ProcessSectionMobile } from "./sections/ProcessSection/ProcessSection";
import { TestimonialSectionDesktop, TestimonialSectionMobile } from "./sections/TestimonialSection/TestimonialSection";
import Footer from '../../components/Footer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "../Header/DropList";

export const LandingPageDesktop = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", hasDropdown: false, link: "/" },
    { label: "Services", hasDropdown: true, link: "/services" },
    { label: "Resources", hasDropdown: true, link: "/resources" },
    { label: "About us", hasDropdown: false, link: "/contact-us" },
  ];

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className="bg-[#fbfcfc] p-6 max-sm:p-0 flex flex-row justify-center w-full">
      <div className="bg-gray-25 w-full  relative">
        <Header onToggleDark={() => {}} onToggleDir={() => {}}/>
        <div className="w-full p-6 relative rounded-lg" style={{
          backgroundImage: "url(/hero-section.png)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>

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
        { isDesktop ? <FAQSectionDesktop /> : <FAQSectionMobile /> }
        { isDesktop ? <HeroSectionDesktop /> : <HeroSectionMobile /> }
        { isDesktop ? <TestimonialSectionDesktop /> : <TestimonialSectionMobile /> }
        { isDesktop ? <ProcessSectionDesktop /> : <ProcessSectionMobile /> }
        <Footer toggleDir={() => {}} />
      </div>
    </div>
  );
};
