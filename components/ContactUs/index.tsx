import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import Footer from '../../components/Footer';

// Contact information data for better organization and maintainability
const contactData = {
  customerInquiries: {
    title: "Customer inquiries",
    email: "support@ollifur.com",
    phone: "+1 604-782-5121",
  },
  vendorInquiries: {
    title: "Vendor inquiries",
    email: "vendors@ollifur.com",
    phone: "+1 604-782-5121",
  },
  mediaInquiries: {
    title: "Media/General inquiries",
    email: "support@ollifur.com",
    phone: "+1 604-782-5121",
  },
  address: {
    title: "Address",
    value: "1234 Powell St, Vancouver, BC, Canada",
  },
};

// Navigation items for header
const navItems = [
  { label: "Home", hasDropdown: false },
  { label: "Services", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "About us", hasDropdown: false },
];

// Footer navigation items
const footerNavItems = [
  "Home",
  "Crematoriums",
  "Pricing",
  "Careers",
  "Help",
  "Privacy",
];

// Footer legal links
const legalLinks = ["Terms", "Privacy", "Cookies"];

export const ContactUsPage = (): JSX.Element => {
  return (
    <div className="bg-[#faf4f2] flex flex-col items-center min-h-screen w-full">
      <div className="bg-[#faf4f2] w-full max-w-[1440px] flex flex-col p-8 gap-16">

        {/* Header */}
         <div className="flex justify-between items-start">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#FDEAE4] rounded-lg overflow-hidden flex items-center justify-center">
                        <img
                          className="w-8 h-8 object-cover"
                          alt="Ollifur removebg"
                          src="/ollifur.png"
                        />
                      </div>
                      <div className="font-bold text-[#252b37] text-4xl">
                        Ollifur
                      </div>
                    </div>
        
                    {/* Navigation */}
                    <div className="w-[611px] h-12 bg-[#FDEAE4] rounded-lg overflow-hidden flex max-sm:flex-row items-center justify-between sm:p-4 sm:px-6">
                      <NavigationMenu>
                        <NavigationMenuList className="flex gap-8">
                          {navItems.map((item, index) => (
                            <NavigationMenuItem key={index}>
                              <div className="flex items-center gap-2 cursor-pointer">
                                <span className="font-semibold text-gray-600 text-base leading-6" onClick={() => window.location.href = item.link}>
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

        {/* Main Content */}
        <div className="flex flex-row gap-40 mx-20 mt-10">
          {/* Title and description */}
          <div className="flex flex-col gap-2">
            <h1 className="font-[Recoleta] text-[64px] text-[#252b37]">Contact us</h1>
            <p className="text-xl text-[#535861]">
              Get in touch with us for any inquiries or questions.
            </p>
          </div>

          {/* Contact info grid */}
          <div className="grid grid-cols-2 gap-12">
            {/* Left column */}
            <div className="flex flex-col gap-16">
              {/* Customer inquiries */}
              <div>
                <h2 className="text-xl font-medium text-[#a3a7ae] pb-3">{contactData.customerInquiries.title}</h2>
                <p className="text-xl text-[#252b37]">{contactData.customerInquiries.email}</p>
                <p className="text-xl text-[#252b37]">{contactData.customerInquiries.phone}</p>
              </div>

              {/* Media inquiries */}
              <div>
                <h2 className="text-xl font-medium text-[#a3a7ae] pb-3">{contactData.mediaInquiries.title}</h2>
                <p className="text-xl text-[#252b37]">{contactData.mediaInquiries.email}</p>
                <p className="text-xl text-[#252b37]">{contactData.mediaInquiries.phone}</p>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-16">
              {/* Vendor inquiries */}
              <div>
                <h2 className="text-xl font-medium text-[#a3a7ae] pb-3">{contactData.vendorInquiries.title}</h2>
                <p className="text-xl text-[#252b37]">{contactData.vendorInquiries.email}</p>
                <p className="text-xl text-[#252b37]">{contactData.vendorInquiries.phone}</p>
              </div>

              {/* Address */}
              <div>
                <h2 className="text-xl font-medium text-[#a3a7ae] pb-3">{contactData.address.title}</h2>
                <p className="text-xl text-[#252b37]">{contactData.address.value}</p>
              </div>
            </div>
          </div>

        </div>
          {/* Map and phone availability */}
          <div className="flex flex-row gap-20 mt-8 mx-20 mb-10">
            <div className="text-base text-[#d48a35]">
              Our phone lines are available throughout the week, 8am–10pm PST.
            </div>
            <div className="w-[636px] h-[325px] bg-[url('/contact-us-pond.png')] bg-cover bg-center rounded-lg" />
          </div>
      </div>

      {/* Footer */}
      <div className="w-full">
      <Footer toggleDir={() => {}} />
      </div>
    </div>
  );
};

