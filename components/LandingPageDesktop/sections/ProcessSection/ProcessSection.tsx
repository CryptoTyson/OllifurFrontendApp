import React from "react";

export const ProcessSection = (): JSX.Element => {
  // Story data that will be reused across all cards
  const storyData = {
    title: "Anas x Ollie",
    date: "1997-2015",
    content: [
      'Demacia! Noxus! Voidborn et Piltover in viam runarum. Rift ignis, baron draconis, et nexus ultimus. "This\'ll be a blast!" ait Ziggs, dum Teemo in umbris latet. Lux ultimum lucem emittit, sed Zed umbras evocat. Poros saltant in Freljord, dum Kindred fatum suum persequitur.',
      'Elo hell? Non est verum, tantum teammates mali. "You belong in a museum!" exclamat Ezreal, dum Blitzcrank manum extensam habet. "Mundo goes where he pleases!" et summoner\'s rift tumultuat.',
      'Baron Nashor respawn in tribus minutis, ward jungla, et ne obliviscaris: omnia sunt "calculated."',
    ],
  };

  // Card configurations with different styles and positions
  const cards = [
    {
      width: "865px",
      height: "489px",
      top: "200px",
      left: "0",
      background: "rgba(255,188,66,1)",
      textColor: "#252b37",
      rotate: "0deg",
      zIndex: 1,
    },
    {
      width: "865px",
      height: "511px",
      top: "61px",
      left: "14px",
      background: "rgba(212,138,53,1)",
      textColor: "white",
      rotate: "0deg",
      zIndex: 2,
    },
    {
      width: "865px",
      height: "587px",
      top: "45px",
      left: "12px",
      background: "rgba(58,51,53,1)",
      textColor: "white",
      rotate: "-6.17deg",
      zIndex: 3,
    },
    {
      width: "562px",
      height: "709px",
      top: "0",
      left: "191px",
      background: "rgba(137,176,174,1)",
      textColor: "#252b37",
      rotate: "0deg",
      zIndex: 4,
    },
    {
      width: "865px",
      height: "489px",
      top: "98px",
      left: "77px",
      background: "rgba(244,243,238,1)",
      textColor: "#252b37",
      rotate: "2.51deg",
      zIndex: 5,
    },
    {
      width: "562px",
      height: "663px",
      top: "14px",
      left: "238px",
      background: "rgba(58,79,65,1)",
      textColor: "white",
      rotate: "0deg",
      zIndex: 6,
    },
  ];

  return (
    <section
      className="relative w-full py-24 rounded-lg overflow-hidden mb-4"
      style={{
        backgroundImage: "url(/story.png)",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="container mx-auto">
        <h2 className="mx-auto text-center font-[Recoleta] font-normal text-white text-[64px] leading-normal max-w-[880px]">
          Little stories of not so little love
        </h2>

        <div className="relative h-[719px] mx-auto max-w-[953px] my-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                width: card.width,
                height: card.height,
                top: card.top,
                left: card.left,
                transform: `rotate(${card.rotate})`,
                zIndex: card.zIndex,
                background: card.background,
                backgroundImage: "url(..//frame-32.png)",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            >
              <div className="flex justify-between px-8 pt-8">
                <div
                  className={`font-[Recoleta] font-normal text-2xl leading-normal ${card.textColor === "white" ? "text-white" : "text-[#252b37]"}`}
                >
                  {storyData.title}
                </div>
                <div
                  className={`font-[Recoleta] font-normal text-2xl leading-normal ${card.textColor === "white" ? "text-[#e9e9eb]" : "text-[#252b37]"}`}
                >
                  {storyData.date}
                </div>
              </div>

              <div className="px-8 pt-[73px]">
                <div className="flex flex-col gap-[18px]">
                  {storyData.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className={` font-normal text-xl leading-6 ${card.textColor === "white" ? "text-white" : "text-[#252b37]"}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div
                className={`absolute ${index < 3 ? "top-[347px]" : "top-[444px]"} ${index < 3 ? "left-[425px]" : "left-[273px]"} font-[Recoleta] font-normal text-2xl leading-normal ${card.textColor === "white" ? "text-white" : "text-[#252b37]"}`}
              >
                ~
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
