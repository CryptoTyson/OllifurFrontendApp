import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Data for the crematorium cards
  const crematoriumCards = [
    {
      id: 1,
      imageUrl: "/frame-6.png",
      title: "Find a crematorium",
      description:
        "Browse crematoriums in your area. Choose between private, communal or witnessed cremations.",
    },
    {
      id: 2,
      imageUrl: "/frame-6.png",
      title: "Find a crematorium",
      description:
        "Browse crematoriums in your area. Choose between private, communal or witnessed cremations.",
    },
    {
      id: 3,
      imageUrl: "/frame-6.png",
      title: "Find a crematorium",
      description:
        "Browse crematoriums in your area. Choose between private, communal or witnessed cremations.",
    },
  ];

  return (
    <section className="w-full p-6 bg-[#faf4f2] mt-4 rounded-lg overflow-hidden">
      <div className="max-w-[1392px] mx-auto">
        <div className="flex flex-col">
          {/* Heading */}
          <h2 className="text-[64px] font-normal text-[#1d2838] [font-family:'Recoleta-Regular',Helvetica] mb-10">
            Our simple 3 step process
          </h2>

          {/* Burial option callout */}
          <div className="flex justify-end mb-16">
            <div className="max-w-[252px]">
              <h3 className="text-xl font-bold text-gray-500 [font-family:'Kind_Sans-Bold',Helvetica] mb-2">
                Looking for a burial?
              </h3>
              <p className="text-base font-normal text-[#475466] [font-family:'Kind_Sans-Regular',Helvetica]">
                <span className="font-bold text-[#d77f33] underline">
                  Contact us
                </span>
                , and our team will assist you with your choice of burial for
                your companion.
              </p>
            </div>
          </div>

          {/* Crematorium cards */}
          <div className="flex flex-wrap gap-8">
            {crematoriumCards.map((card) => (
              <Card
                key={card.id}
                className="border-none shadow-none bg-transparent"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    <div
                      className="w-[367px] h-[237px] rounded bg-cover bg-center mb-8"
                      style={{ backgroundImage: `url(${card.imageUrl})` }}
                    />
                    <h3 className="text-xl font-bold text-[#475466] [font-family:'Kind_Sans-Bold',Helvetica] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-base font-normal text-[#475466] [font-family:'Kind_Sans-Regular',Helvetica] max-w-[243px]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
