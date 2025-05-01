import { ChevronDownIcon, LucideGlobe2, MessageSquareMore, Store, UsersIcon } from "lucide-react";
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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "../Header/DropList";

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
  { label: "Home", hasDropdown: false, link: "/" },
  { label: "Services", hasDropdown: true, link: "/services" },
  { label: "Resources", hasDropdown: true, link: "/resources" },
  { label: "About us", hasDropdown: false, link: "/contact-us" },
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

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className="bg-[#faf4f2] flex flex-col items-center min-h-screen w-full">
      <Header onToggleDark={() => {}} onToggleDir={() => {}} navColor={"bg-[#FDEAE4]"}/>
      
      {isDesktop ? (
<div className="bg-[#faf4f2] w-full max-w-[1440px] flex flex-col p-8 gap-16">

        {/* Main Content */}
        <div className="flex flex-row gap-40 mx-20 mt-40">
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
      ) : (
        <div className="bg-[#faf4f2] w-full max-w-[1440px] flex flex-col p-8 gap-12">
          {/* Title and description */}
          <div className="flex flex-col gap-2 mt-35">
            <h1 className="font-[Recoleta] text-[36px] font-bold text-[#252b37]">Contact us</h1>
            <p className="text-[16px] text-[#535861]">
              Get in touch with us for any inquiries or questions.
            </p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
                  <div className="w-full h-[321px] bg-[#FDFDFD] rounded-lg flex flex-col gap-4 border-1 border-[#FFE3DA] p-7">
                    <div className="rounded-lg flex flex-col">
                      <div className="flex items-center gap-2 bg-[#252B37] w-10 h-10 p-2 rounded-[4px] mb-12">
                        <UsersIcon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-base font-normal text-[#85888E] ">
                        {'Customer inquiries'}
                      </p>
                      <p className="text-base font-normal text-[#252B37] max-w-[243px] ">
                        {'support@ollifur.com'}
                      </p>
                      <p className="text-base font-normal text-[#252B37] max-w-[243px]">
                        {'+1 604-782-5121'}
                      </p>
                      <p className="text-base font-normal text-[#D48A35] mt-4">
                        {'Our phone lines are available throughout the week, 8am–10pm PST.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 py-3">
                    <div className="w-full h-[233px] bg-[#FDFDFD] rounded-lg flex flex-col gap-4 border-1 border-[#FFE3DA] p-7">
                    <div className="rounded-lg flex flex-col">
                        <div className="flex items-center gap-2 bg-[#252B37] w-10 h-10 p-2 rounded-[4px] mb-12">
                          <Store className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-base font-normal text-[#85888E] ">
                          {'Vendor inquiries'}
                        </p>
                        <p className="text-base font-normal text-[#252B37] max-w-[243px] ">
                          {'vendors@ollifur.com'}
                        </p>
                        <p className="text-base font-normal text-[#252B37] max-w-[243px]">
                          {'+1 604-782-5121'}
                        </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 py-3">
                    <div className="w-full h-[233px] bg-[#FDFDFD] rounded-lg flex flex-col gap-4 border-1 border-[#FFE3DA] p-7">
                    <div className="rounded-lg flex flex-col">
                        <div className="flex items-center gap-2 bg-[#252B37] w-10 h-10 p-2 rounded-[4px] mb-12">
                          <MessageSquareMore className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-base font-normal text-[#85888E] ">
                          {'Media/General inquiries'}
                        </p>
                        <p className="text-base font-normal text-[#252B37] max-w-[243px] ">
                          {'support@ollifur.com'}
                        </p>
                        <p className="text-base font-normal text-[#252B37] max-w-[243px]">
                          {'+1 604-782-5121'}
                        </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 py-3">
                    <div className="w-full h-[233px] bg-[#FDFDFD] rounded-lg flex flex-col gap-4 border-1 border-[#FFE3DA] p-7">
                    <div className="rounded-lg flex flex-col">
                        <div className="flex items-center gap-2 bg-[#252B37] w-10 h-10 p-2 rounded-[4px] mb-12">
                          <LucideGlobe2 className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-base font-normal text-[#85888E] ">
                          {'Address'}
                        </p>
                        <p className="text-base font-normal text-[#252B37] max-w-[243px] ">
                          {'450 Southwest Marine Drive Vancouver, BC, Canada'}
                        </p>
                    </div>
                  </div>
                </div>
                </div>
        </div>
      )}
      

      {/* Footer */}
      <div className="w-full">
      <Footer toggleDir={() => {}} />
      </div>
    </div>
  );
};

