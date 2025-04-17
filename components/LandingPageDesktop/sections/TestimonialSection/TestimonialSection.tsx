import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const TestimonialSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "How much does a pet cremation cost?",
      answer: [
        'Demacia! Noxus! Voidborn et Piltover in viam runarum. Rift ignis, baron draconis, et nexus ultimus. "This\'ll be a blast!" ait Ziggs, dum Teemo in umbris latet. Lux ultimum lucem emittit, sed Zed umbras evocat. Poros saltant in Freljord, dum Kindred fatum suum persequitur.',
        'Elo hell? Non est verum, tantum teammates mali. "You belong in a museum!" exclamat Ezreal, dum Blitzcrank manum extensam habet. "Mundo goes where he pleases!" et summoner\'s rift tumultuat.',
        'Baron Nashor respawn in tribus minutis, ward jungla, et ne obliviscaris: omnia sunt "calculated."',
      ],
    },
    {
      question: "Hello and welcome to the league of legends",
      answer: [],
    },
    {
      question:
        "and our team will assist you with your choice of burial for your companion.",
      answer: [],
    },
    {
      question: "Hello and welcome to the league of legends",
      answer: [],
    },
    {
      question: "Hello and welcome to the league of legends",
      answer: [],
    },
    {
      question: "Hello and welcome to the league of legends",
      answer: [],
    },
  ];

  return (
    <section className="relative w-full max-w-[1392px] mx-auto p-6 bg-neutral-50 rounded-lg">
      <div className="mb-16">
        <h2 className="text-[64px] [font-family:'Recoleta-Regular',Helvetica] font-normal text-[#252b37] mb-4">
          FAQ&apos;s
        </h2>
        <p className="text-xl [font-family:'Kind_Sans-Regular',Helvetica] font-normal text-[#a3a7ae]">
          Last updated May 2025
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-5"
        className="w-full max-w-[872px]"
      >
        {faqItems.map((item, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className="border-b border-[#e5e5e5] py-4"
          >
            <AccordionTrigger className="flex justify-between items-center w-full">
              <div className="flex items-center gap-10">
                <div className="w-6 h-6 flex items-center justify-center">
                  {index === 5 ? (
                    <MinusIcon className="h-6 w-6" />
                  ) : (
                    <PlusIcon className="h-6 w-6" />
                  )}
                </div>
                <span className="text-xl [font-family:'Kind_Sans-Medium',Helvetica] font-medium text-[#252b37] text-left">
                  {item.question}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ml-16">
              <div className="flex flex-col gap-[18px] py-4">
                {item.answer.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-base [font-family:'Kind_Sans-Regular',Helvetica] font-normal text-[#414651]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
