import { MinusIcon, PlusIcon, Users, UsersIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const TestimonialSectionMobile = (): JSX.Element => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  // FAQ data for mapping
  const faqItems = [
    {
      question: "How much does a pet cremation cost?",
      answer: [
        "Costs for a pet cremation can vary depending on the size of your pet, the type of cremation you choose (communal, private, or witnessed), and any additional services offered by the crematorium.",
        "As a general guide, most cremations fall within the following ranges:",
        "<ul class='list-none pl-0 space-y-2'><li>Small pets (under 20 lbs) : $100 – $200 CAD</li><li>Medium pets (20–50 lbs) : $200 – $350 CAD</li><li>Large pets (50+ lbs ): $350 – $600+ CAD</li></ul>",
        "You may also choose extras like urns, memorial keepsakes, or home pickup, which may affect the total cost. Ollifur is designed to make this process clearer — you'll see upfront pricing from each crematorium before making any decisions.",
      ],
    },
    {
      question: "What's the timeline for the cremation process?",
      answer: [
        "In most cases, the cremation itself is completed within a day. Depending on the crematorium's schedule and the type of service chosen, it may take a little longer for the ashes to be prepared and returned.",
        "Expected timelines are shared in advance, so you'll always have a clear sense of what to expect.",
      ],
    },
    {
      question: "What should I do if my pet just passed away?",
      answer: [
        "If you're at home, here are a few steps you can take:",
        "<ul class='list-decimal pl-6 space-y-2'><li>Move your companion to a peaceful spot : Place them inside their carrier and choose a quiet area indoors, away from heat or sunlight, and lay them on a towel or blanket.</li><li>Keep them cool : If you need some time to make arrangements, place a cool pack or bag of ice wrapped in a cloth beneath their body — especially around the belly area.</li><li>Contact a crematorium or aftercare provider : They can guide you through pickup options, timelines, and next steps for cremation or burial.</li></ul>",
        "We've written a <span class='underline'>short guide</span> that walks through these steps in more detail.",
      ],
    },
    {
      question: "Are there any specific requirements or preparations before bringing my pet for cremation?",
      answer: [
        "There's usually nothing complicated required, but a few small steps can help:",
        "<ul class='list-disc pl-6 space-y-2'><li>Place your companion in their carrier and lay them on a clean towel or blanket for transport.</li><li>Remove any items you'd like to keep, like collars or tags. If there's something you want cremated with your pet, that's usually okay too.</li><li>No need to remove medical implants — metal parts like plates or microchips are separated and handled after the cremation.</li><li>If possible, secure the carrier in your vehicle to prevent any movement during the journey.</li></ul>",
        "We've written a <span class='underline'>short guide</span> with more details on preparing your companion for cremation.",
      ],
    },
    {
      question: "Is there any documentation/paperwork that is required before the cremation?",
      answer: [
        "Most of the time, no. You usually won't need to provide any documents to move forward with cremation.",
        "<ul class='list-disc pl-6 space-y-2'><li>In some cases, you might be asked to confirm ownership – this could mean sharing something like adoption records, registration details, or microchip information. It's just to make sure everything is handled properly.</li></ul>",
        "If anything is needed, it will be clearly noted ahead of time so there are no surprises.",
      ],
    },
  ];

  return (
    <section className="flex justify-center my-10 p-14 bg-neutral-50 rounded-lg">
      <div className="w-full">
        <div className="mb-8">
          <h2 className="text-4xl font-[Recoleta] font-normal text-[#252b37] mb-3">
            FAQ&apos;s
          </h2>
          <p className="text-base font-normal text-[#a3a7ae]">
            Last updated May 2025
          </p>
        </div>

        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
          className="w-full"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className="border-b-2 border-[#e5e5e5] py-4"
            >
              <AccordionTrigger className="flex justify-between items-center w-full [&>svg]:hidden cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 relative text-[#d77f33]">
                    <MinusIcon
                      className={`h-5 w-5 absolute transition-all duration-300 ${
                        openItems.includes(`item-${index}`)
                          ? "opacity-100 transform rotate-0"
                          : "opacity-0 transform rotate-90"
                      }`}
                    />
                    <PlusIcon
                      className={`h-5 w-5 absolute transition-all duration-300 ${
                        openItems.includes(`item-${index}`)
                          ? "opacity-0 transform rotate-90"
                          : "opacity-100 transform rotate-0"
                      }`}
                    />
                  </div>
                  <span className="text-base font-medium text-[#252b37] text-left">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-9">
                <div className="flex flex-col gap-3 py-3">
                  {item.answer.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-sm font-normal text-[#414651] [&_ul]:mb-3"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem
              key={`item-${-1}`}
              value={`item-${-1}`}
              className="border-b-2 border-[#e5e5e5] py-4"
            >
              <AccordionTrigger className="flex justify-between items-center w-full [&>svg]:hidden cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 relative text-[#d77f33]">
                    <MinusIcon
                      className={`h-5 w-5 absolute transition-all duration-300 ${
                        openItems.includes(`item-${-1}`)
                          ? "opacity-100 transform rotate-0"
                          : "opacity-0 transform rotate-90"
                      }`}
                    />
                    <PlusIcon
                      className={`h-5 w-5 absolute transition-all duration-300 ${
                        openItems.includes(`item-${-1}`)
                          ? "opacity-0 transform rotate-90"
                          : "opacity-100 transform rotate-0"
                      }`}
                    />
                  </div>
                  <div className="flex flex-row justify-between gap-16 w-full items-center">
                    <span className="text-base font-medium text-[#252b37] text-left">
                      {'Any more questions?'}
                    </span>
                    <span className="text-sm font-normal text-[#F79009]">
                      {'Contact us'}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-9">
                <div className="flex flex-col gap-3 py-3">
                  <div className="w-full h-[233px] bg-[#FDFDFD] rounded-lg flex flex-col gap-4 border-1 border-[#FFE3DA] p-7">
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
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export const TestimonialSectionDesktop = (): JSX.Element => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  // FAQ data for mapping
  const faqItems = [
    {
      question: "How much does a pet cremation cost?",
      answer: [
        "Costs for a pet cremation can vary depending on the size of your pet, the type of cremation you choose (communal, private, or witnessed), and any additional services offered by the crematorium.",
        "As a general guide, most cremations fall within the following ranges:",
        "<ul class='list-none pl-0 space-y-2'><li>Small pets (under 20 lbs) : $100 – $200 CAD</li><li>Medium pets (20–50 lbs) : $200 – $350 CAD</li><li>Large pets (50+ lbs ): $350 – $600+ CAD</li></ul>",
        "You may also choose extras like urns, memorial keepsakes, or home pickup, which may affect the total cost. Ollifur is designed to make this process clearer — you'll see upfront pricing from each crematorium before making any decisions.",
      ],
    },
    {
      question: "What's the timeline for the cremation process?",
      answer: [
        "In most cases, the cremation itself is completed within a day. Depending on the crematorium's schedule and the type of service chosen, it may take a little longer for the ashes to be prepared and returned.",
        "Expected timelines are shared in advance, so you'll always have a clear sense of what to expect.",
      ],
    },
    {
      question: "What should I do if my pet just passed away?",
      answer: [
        "If you're at home, here are a few steps you can take:",
        "<ul class='list-decimal pl-6 space-y-2'><li>Move your companion to a peaceful spot : Place them inside their carrier and choose a quiet area indoors, away from heat or sunlight, and lay them on a towel or blanket.</li><li>Keep them cool : If you need some time to make arrangements, place a cool pack or bag of ice wrapped in a cloth beneath their body — especially around the belly area.</li><li>Contact a crematorium or aftercare provider : They can guide you through pickup options, timelines, and next steps for cremation or burial.</li></ul>",
        "We've written a <span class='underline'>short guide</span> that walks through these steps in more detail.",
      ],
    },
    {
      question: "Are there any specific requirements or preparations before bringing my pet for cremation?",
      answer: [
        "There's usually nothing complicated required, but a few small steps can help:",
        "<ul class='list-disc pl-6 space-y-2'><li>Place your companion in their carrier and lay them on a clean towel or blanket for transport.</li><li>Remove any items you'd like to keep, like collars or tags. If there's something you want cremated with your pet, that's usually okay too.</li><li>No need to remove medical implants — metal parts like plates or microchips are separated and handled after the cremation.</li><li>If possible, secure the carrier in your vehicle to prevent any movement during the journey.</li></ul>",
        "We've written a <span class='underline'>short guide</span> with more details on preparing your companion for cremation.",
      ],
    },
    {
      question: "Is there any documentation/paperwork that is required before the cremation?",
      answer: [
        "Most of the time, no. You usually won't need to provide any documents to move forward with cremation.",
        "<ul class='list-disc pl-6 space-y-2'><li>In some cases, you might be asked to confirm ownership – this could mean sharing something like adoption records, registration details, or microchip information. It's just to make sure everything is handled properly.</li></ul>",
        "If anything is needed, it will be clearly noted ahead of time so there are no surprises.",
      ],
    },
  ];

  return (
    <section className="flex justify-center my-4 p-25 bg-neutral-50 rounded-lg">
      <div className="w-[1024px]">
        <div className="mb-16">
          <h2 className="text-[64px] font-[Recoleta] font-normal text-[#252b37] mb-4">
            FAQ&apos;s
          </h2>
          <p className="text-xl  font-normal text-[#a3a7ae]">
            Last updated May 2025
          </p>
        </div>

        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
          className="w-full max-w-[872px]"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className="border-b-2 border-[#e5e5e5] py-5"
            >
              <AccordionTrigger className="flex justify-between items-center w-full [&>svg]:hidden cursor-pointer">
                <div className="flex items-center gap-10">
                  <div className="w-6 h-6 relative text-[#d77f33]">
                    <MinusIcon
                      className={`h-6 w-6 absolute transition-all duration-300 ${
                        openItems.includes(`item-${index}`)
                          ? "opacity-100 transform rotate-0"
                          : "opacity-0 transform rotate-90"
                      }`}
                    />
                    <PlusIcon
                      className={`h-6 w-6 absolute transition-all duration-300 ${
                        openItems.includes(`item-${index}`)
                          ? "opacity-0 transform rotate-90"
                          : "opacity-100 transform rotate-0"
                      }`}
                    />
                  </div>
                  <span className="text-xl font-medium text-[#252b37] text-left">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-16">
                <div className="flex flex-col gap-4 py-4">
                  {item.answer.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-base font-normal text-[#414651] [&_ul]:mb-4"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
