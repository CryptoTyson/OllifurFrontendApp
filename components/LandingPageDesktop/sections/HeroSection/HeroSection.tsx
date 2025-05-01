import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ArrowRightIcon } from "lucide-react";

export const HeroSectionMobile = (): JSX.Element => {
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
    <section className="w-full px-12 py-26 mt-4 rounded-lg overflow-hidden bg-[#faf4f2]">
      <div className="w-full">
        <div className="flex flex-col">
          <div className="flex flex-col mb-8">
            {/* Heading */}
            <h2 className="text-4xl font-normal text-[#1d2838] font-[Recoleta] mb-6">
              Our simple 3 step<br/>process
            </h2>
          </div>

          {/* Crematorium cards */}
          <div className="flex flex-col gap-6">
            {crematoriumCards.map((card) => (
              <Card
                key={card.id}
                className="w-full border-none shadow-none bg-[#252B37]"
              >
                <CardContent className="p-2">
                  <div className="flex flex-col cursor-pointer hover:[&>div>h3]:text-[#d77f33]">
                    <div
                      className="w-full h-[200px] rounded bg-cover bg-center mb-2 hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${card.imageUrl})` }}
                    />
                    <div className="flex flex-col gap-2 p-6 pb-2">
                      <h3 className="text-lg font-bold text-white transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-sm font-normal text-[#D5D7DA]">
                        {card.description}
                      </p>
                      <p className="text-sm font-normal text-[#F79009] underline">
                        {'Browse now'}
                        <ArrowRightIcon className="inline-block ml-1" size={16} color="#F79009" />
                      </p>
                    </div>
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

export const HeroSectionDesktop = (): JSX.Element => {
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
    <section className="w-full pl-24 py-25 pr-10 bg-[#faf4f2] bg-[url(/shadow.png)] bg-center bg-cover bg-no-repeat mt-4 rounded-lg overflow-hidden">
      <div className="max-w-[1392px] ">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between content-center items-center mb-16">
              {/* Heading */}
            <h2 className="text-[64px] font-normal text-[#1d2838] font-[Recoleta] mb-10">
              Our simple 3 step<br/>process
            </h2>

            {/* Burial option callout */}
            <div className="flex justify-center">
              <div className="max-w-[252px]">
                <h3 className="text-xl font-bold text-gray-500  mb-2">
                  Looking for a burial?
                </h3>
                <p className="text-base font-normal text-[#475466] ">
                  <span className="font-bold text-[#d77f33] underline">
                    Contact us
                  </span>
                  , and our team will assist you with your choice of burial for
                  your companion.
                </p>
              </div>
            </div>
          </div>

          {/* Crematorium cards */}
          <div className="flex flex-wrap gap-8">
            {crematoriumCards.map((card) => (
              <Card
                key={card.id}
                className="w-[386px] border-none shadow-none bg-transparent"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col cursor-pointer hover:[&>div>h3]:text-[#d77f33]">
                    <div
                      className="w-[386px] h-[249px] rounded bg-cover bg-center mb-8 hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${card.imageUrl})` }}
                    />
                    <div className="flex flex-row gap-4">
                    <h3 className="text-xl font-bold text-[#475466] mb-2 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-base font-normal text-[#475466]  max-w-[243px]">
                      {card.description}
                    </p>
                    </div>
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
