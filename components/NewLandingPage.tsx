import React, { useState } from 'react';
import type { ReactElement } from 'react';

interface NavItem {
  name: string;
  hasDropdown: boolean;
}

interface StoryCard {
  id: number;
  title: string;
  year: string;
  bgColor: string;
  textColor: string;
  position: string;
  width: string;
  height: string;
  rotate?: string;
}

interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

export const StandaloneLandingPage = (): ReactElement => {
  // Navigation items
  const navItems: NavItem[] = [
    { name: 'Home', hasDropdown: false },
    { name: 'Services', hasDropdown: true },
    { name: 'Resources', hasDropdown: false },
    { name: 'About us', hasDropdown: false },
    { name: 'Contact', hasDropdown: false },
  ];

  // Story cards data
  const storyCards: StoryCard[] = [
    {
      id: 1,
      title: 'Anas x Ollie',
      year: '1997-2015',
      bgColor: 'bg-[#FFBC42]',
      textColor: 'text-[#252b37]',
      position: 'top-[200px] left-0',
      width: 'w-[865px]',
      height: 'h-[489px]',
    },
    {
      id: 2,
      title: 'Luna x Max',
      year: '2010-2023',
      bgColor: 'bg-[#D48A35]',
      textColor: 'text-white',
      position: 'top-[61px] left-14',
      width: 'w-[865px]',
      height: 'h-[511px]',
    },
    {
      id: 3,
      title: 'Bella x Charlie',
      year: '2005-2020',
      bgColor: 'bg-[#3A3335]',
      textColor: 'text-white',
      position: 'top-[45px] left-12',
      width: 'w-[865px]',
      height: 'h-[587px]',
      rotate: 'rotate-[-6.17deg]',
    },
  ];

  // Process steps
  const processSteps: ProcessStep[] = [
    {
      title: 'Find a crematorium',
      description:
        'Search our network of trusted pet crematoriums and select your preferred service type.',
      image: '/frame-32.png',
    },
    {
      title: 'Schedule the service',
      description:
        'Book a time that works for you with our simple online scheduling system.',
      image: '/frame-32.png',
    },
    {
      title: 'Receive your companion',
      description:
        "Get your pet's ashes returned in a beautiful urn with optional memorial keepsakes.",
      image: '/frame-32.png',
    },
  ];

  // FAQ items
  const faqItems: FaqItem[] = [
    {
      question: 'How much does pet cremation cost?',
      answer:
        'Prices start at $150 and vary based on pet size and service type. We offer transparent pricing with no hidden fees.',
    },
    {
      question: 'What cremation options are available?',
      answer:
        'Choose from private, communal, or witnessed cremation. All include a basic urn with options to upgrade.',
    },
    {
      question: 'How should I prepare my pet?',
      answer:
        'Simply bring your pet to the selected crematorium. Our caring staff will handle everything with dignity and respect.',
    },
  ];

  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      {/* Header/Navigation */}
      <div className="w-full max-w-[1440px] mx-auto relative">
        <div className="w-full max-w-[1392px] mx-6 relative">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#faf4f2] rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/images/ollifur.svg"
                  alt="Ollifur"
                  className="w-8 h-8"
                />
              </div>
              <div className="ml-4 [font-family:'Kind_Sans-Bold',Helvetica] font-bold text-[#252b37] text-[36px] leading-[42px]">
                Ollifur
              </div>
            </div>

            <div className="flex items-center">
              <nav className="flex gap-8 mr-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className="[font-family:'Kind_Sans-Semibold',Helvetica] font-semibold text-[#475467] text-base flex items-center gap-2 hover:text-[#252b37] transition-colors"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <img
                        src="/chevron-down.svg"
                        alt="dropdown"
                        className="w-4 h-4"
                      />
                    )}
                  </a>
                ))}
              </nav>
              <button className="bg-[#d77f33] text-white px-4 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#c06f2d] transition-colors">
                <span className="[font-family:'Kind_Sans-Semibold',Helvetica] font-semibold text-sm">
                  Immediate need
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative mt-8">
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] bg-cover bg-center opacity-50" />
          <div className="relative ml-24 pt-32 pb-48 w-[753px]">
            <h1 className="[font-family:'Recoleta-SemiBold',Helvetica] font-semibold text-[#252b37] text-[64px] leading-[87px]">
              Cherish the ones you love, we'll take care of the rest.
            </h1>
            <div className="flex gap-4 mt-8">
              <button className="bg-[#f8eadd] text-[#d77f33] px-7 py-4 rounded-lg shadow-lg hover:bg-[#f0dfd0] transition-colors">
                <span className="[font-family:'Kind_Sans-Semibold',Helvetica] font-semibold text-base leading-7">
                  Memorials
                </span>
              </button>
              <button className="bg-[#d77f33] text-white px-7 py-4 rounded-lg shadow-lg hover:bg-[#c06f2d] transition-colors">
                <span className="[font-family:'Kind_Sans-Semibold',Helvetica] font-semibold text-base leading-7">
                  Immediate need
                </span>
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-[640px] h-full bg-[url('/images/hero-image.jpg')] bg-cover bg-center rounded-bl-3xl" />
        </div>

        {/* Why Section */}
        <div className="w-full bg-[#9d5113] rounded-lg overflow-hidden mt-24">
          <div className="max-w-[1392px] mx-auto px-24 py-28">
            <div className="grid grid-cols-[211px_1fr] gap-24">
              <div>
                <h2 className="[font-family:'Recoleta-Regular',Helvetica] font-normal text-white text-4xl">
                  The Why
                </h2>
              </div>
              <div className="max-w-[593px]">
                <div className="space-y-4">
                  <p className="[font-family:'Kind_Sans-Regular',Helvetica] font-normal text-white text-base leading-relaxed">
                    Ollifur began with a cat named Oliver, though everyone
                    called him Ollie. He belonged to my best friend, and when
                    Ollie passed away, I couldn't be there in person.
                  </p>
                  <p className="[font-family:'Kind_Sans-Regular',Helvetica] font-normal text-white text-base leading-relaxed">
                    All I could do was listen over the phone as my friend
                    navigated the aftermath of losing a beloved pet. The
                    confusion, the grief, the sudden decisions that needed to be
                    made - it was overwhelming for someone already hurting.
                  </p>
                  <p className="[font-family:'Kind_Sans-Regular',Helvetica] font-normal text-white text-base leading-relaxed">
                    This site was created simply to help others find their way
                    through similar moments with a little more ease than my
                    friend had. Because sometimes, knowing where to turn makes
                    all the difference.
                  </p>
                </div>
                <div className="mt-12">
                  <img
                    src="/images/oliver.jpg"
                    alt="Oliver"
                    className="w-[347px] h-[342px] object-cover rounded-lg"
                  />
                  <h3 className="[font-family:'Recoleta-SemiBold',Helvetica] font-semibold text-white text-xl mt-4">
                    His majesty - Oliver
                  </h3>
                  <p className="[font-family:'Kind_Sans-Light',Helvetica] font-light text-white text-sm mt-1">
                    Permanently angry face. Not actually angry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stories Section */}
        <div className="relative w-full max-w-[1392px] mx-auto mt-24">
          <h2 className="text-center [font-family:'Recoleta-Regular',Helvetica] font-normal text-[#252b37] text-[64px] mb-16">
            Little stories of not so little love
          </h2>
          <div className="relative h-[720px] max-w-[953px] mx-auto">
            {storyCards.map((card) => (
              <div
                key={card.id}
                className={`absolute ${card.position} ${card.width} ${
                  card.height
                } ${card.bgColor} ${
                  card.rotate || ''
                } rounded-lg overflow-hidden p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer`}
              >
                <div className="flex justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <h3
                      className={`[font-family:'Recoleta-Regular',Helvetica] font-normal ${card.textColor} text-2xl`}
                    >
                      {card.title}
                    </h3>
                    <span
                      className={`[font-family:'Recoleta-Regular',Helvetica] font-normal ${card.textColor} text-xl opacity-80`}
                    >
                      {card.year}
                    </span>
                  </div>
                </div>
                <div className="mt-16">
                  <p
                    className={`[font-family:'Kind_Sans-Regular',Helvetica] font-normal ${card.textColor} text-xl leading-relaxed`}
                  >
                    Their story reminds us that love transcends time, and the
                    bonds we form with our companions leave lasting paw prints
                    on our hearts.
                  </p>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 transition-opacity duration-300 hover:opacity-100`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <section className="w-full max-w-[1392px] mx-auto py-24 px-24 bg-[#faf4f2] rounded-lg mt-24">
          <div className="flex justify-between items-start mb-16">
            <h2 className="text-[64px] font-normal text-[#1d2838] [font-family:'Recoleta-Regular',Helvetica] max-w-[589px] leading-[87px]">
              Our simple 3 step process
            </h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#667085] [font-family:'Kind_Sans-Bold',Helvetica]">
                Looking for a burial?
              </h3>
              <p className="text-base font-normal mt-2 max-w-[252px]">
                <button className="font-bold text-[#d77f33] underline [font-family:'Kind_Sans-Bold',Helvetica] hover:text-[#c06f2d] transition-colors">
                  Contact us
                </button>
                <span className="text-[#475466] [font-family:'Kind_Sans-Regular',Helvetica]">
                  , and our team will assist you with your choice of burial for
                  your companion.
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="group flex flex-col">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[249px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <h3 className="text-xl font-bold text-[#252b37] [font-family:'Kind_Sans-Bold',Helvetica] mb-3 group-hover:text-[#d77f33] transition-colors">
                  {step.title}
                </h3>
                <p className="text-base font-normal text-[#475466] [font-family:'Kind_Sans-Regular',Helvetica] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-[872px] mx-auto py-32">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Recoleta-Regular',Helvetica] font-normal text-[#252b37] text-[64px] leading-[87px] mb-4">
              FAQ's
            </h2>
            <p className="[font-family:'Kind_Sans-Regular',Helvetica] font-normal text-[#a3a7ae] text-xl">
              Last updated May 2025
            </p>
          </div>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border-b border-[#e5e7eb] py-6 transition-all duration-300 ${
                  openItem === `item-${index}`
                    ? 'bg-[#faf4f2] rounded-lg px-6 -mx-6'
                    : ''
                }`}
              >
                <button
                  className="w-full flex justify-between items-center text-left group"
                  onClick={() =>
                    setOpenItem(
                      openItem === `item-${index}` ? null : `item-${index}`,
                    )
                  }
                >
                  <span
                    className={`[font-family:'Kind_Sans-SemiBold',Helvetica] font-semibold text-xl transition-colors ${
                      openItem === `item-${index}`
                        ? 'text-[#d77f33]'
                        : 'text-[#252b37] group-hover:text-[#d77f33]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openItem === `item-${index}`
                        ? 'bg-[#d77f33] rotate-180'
                        : 'bg-[#f8eadd] group-hover:bg-[#d77f33]'
                    }`}
                  >
                    <img
                      src={
                        openItem === `item-${index}`
                          ? '/chevron-up-white.svg'
                          : '/chevron-down-orange.svg'
                      }
                      alt={openItem === `item-${index}` ? 'collapse' : 'expand'}
                      className="w-4 h-4"
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openItem === `item-${index}`
                      ? 'max-h-96 opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="[font-family:'Kind_Sans-Regular',Helvetica] font-normal text-[#414651] text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-20 px-24 bg-[#252b37] rounded-lg">
          <div className="max-w-[1392px] mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-16">
                <div className="w-8 h-8 bg-[#faf4f2] rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/ollifur.svg"
                    alt="Ollifur"
                    className="w-6 h-6"
                  />
                </div>
                <span className="ml-3 [font-family:'Kind_Sans-Bold',Helvetica] font-bold text-white text-2xl">
                  Ollifur
                </span>
              </div>
              <div className="flex items-center justify-center gap-8 mb-16">
                <a
                  href="#"
                  className="[font-family:'Kind_Sans-Regular',Helvetica] text-white hover:text-[#f8eadd] transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="[font-family:'Kind_Sans-Regular',Helvetica] text-white hover:text-[#f8eadd] transition-colors"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="[font-family:'Kind_Sans-Regular',Helvetica] text-white hover:text-[#f8eadd] transition-colors"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="[font-family:'Kind_Sans-Regular',Helvetica] text-white hover:text-[#f8eadd] transition-colors"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="[font-family:'Kind_Sans-Regular',Helvetica] text-white hover:text-[#f8eadd] transition-colors"
                >
                  Contact
                </a>
              </div>
              <div className="w-full pt-8 border-t border-[#414651]">
                <div className="flex justify-between items-center">
                  <div className="[font-family:'Kind_Sans-Regular',Helvetica] text-[#a3a7ae]">
                    © 2025 Ollifur Inc. All rights reserved.
                  </div>
                  <div className="flex items-center gap-6">
                    <a
                      href="#"
                      className="[font-family:'Kind_Sans-Regular',Helvetica] text-[#a3a7ae] hover:text-white transition-colors"
                    >
                      Terms
                    </a>
                    <a
                      href="#"
                      className="[font-family:'Kind_Sans-Regular',Helvetica] text-[#a3a7ae] hover:text-white transition-colors"
                    >
                      Privacy
                    </a>
                    <a
                      href="#"
                      className="[font-family:'Kind_Sans-Regular',Helvetica] text-[#a3a7ae] hover:text-white transition-colors"
                    >
                      Cookies
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
