import React, { useEffect, useState } from "react";

export const ProcessSectionMobile = (): JSX.Element => {
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

  // Card configurations with different styles for mobile
  const cards = [
    {
      width: "350px",
      height: "400px",
      top: "140px",
      left: "-15px",
      background: "rgba(255,188,66,1)",
      textColor: "#252b37",
      rotate: "-10deg",
      zIndex: 1,
    },
    {
      width: "350px",
      height: "420px",
      top: "40px",
      left: "-15px",
      background: "rgba(212,138,53,1)",
      textColor: "white",
      rotate: "12deg",
      zIndex: 2,
    },
    {
      width: "350px",
      height: "480px",
      top: "30px",
      left: "-15px",
      background: "rgba(58,51,53,1)",
      textColor: "white",
      rotate: "-6.17deg",
      zIndex: 3,
    },
    {
      width: "320px",
      height: "480px",
      top: "0",
      left: "-15px",
      background: "rgba(137,176,174,1)",
      textColor: "#252b37",
      rotate: "16deg",
      zIndex: 4,
    },
    {
      width: "350px",
      height: "400px",
      top: "60px",
      left: "-15px",
      background: "rgba(244,243,238,1)",
      textColor: "#252b37",
      rotate: "-2.51deg",
      zIndex: 5,
    },
    {
      width: "320px",
      height: "480px",
      top: "10px",
      left: "-15px",
      background: "rgba(58,79,65,1)",
      textColor: "white",
      rotate: "2deg",
      zIndex: 6,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const section = document.querySelector('.process-section-mobile');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      className="relative w-full py-8 rounded-lg overflow-hidden mb-4 process-section-mobile"
      style={{
        backgroundImage: "url(/story.png)",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="mx-auto py-4 text-center font-[Recoleta] font-normal text-white text-3xl leading-normal">
          Little stories of not so little love
        </h2>

        <div className="relative h-[600px] mx-auto max-w-[320px] my-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="absolute"
              onClick={() => setSelectedCard(selectedCard === index ? null : index)}
              style={{
                width: card.width,
                height: card.height,
                top: card.top,
                left: card.left,
                transform: `
                  rotate(${card.rotate})
                  translateY(${isVisible ? '0' : '20px'})
                  scale(${selectedCard === index ? 1.02 : 1})
                `,
                zIndex: selectedCard === index ? 100 : card.zIndex,
                background: card.background,
                backgroundImage: "url(..//frame-32.png)",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                opacity: isVisible ? 1 : 0,
                cursor: "pointer",
                transition: `
                  transform 700ms cubic-bezier(0.4, 0, 0.2, 1),
                  opacity 700ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms,
                  box-shadow 700ms cubic-bezier(0.4, 0, 0.2, 1)
                `,
                boxShadow: selectedCard === index
                  ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  : 'none',
              }}
            >
              <div className="flex justify-between px-4 pt-4">
                <div
                  className={`font-[Recoleta] font-normal text-lg leading-normal ${
                    card.textColor === "white" ? "text-white" : "text-[#252b37]"
                  }`}
                >
                  {storyData.title}
                </div>
                <div
                  className={`font-[Recoleta] font-normal text-lg leading-normal ${
                    card.textColor === "white" ? "text-[#e9e9eb]" : "text-[#252b37]"
                  }`}
                >
                  {storyData.date}
                </div>
              </div>

              <div className="px-4 pt-6 pb-8">
                <div className="flex flex-col gap-4">
                  {storyData.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className={`font-normal text-sm leading-5 ${
                        card.textColor === "white" ? "text-white" : "text-[#252b37]"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div
                className={`absolute bottom-4 right-4 font-[Recoleta] font-normal text-lg leading-normal ${
                  card.textColor === "white" ? "text-white" : "text-[#252b37]"
                }`}
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

export const ProcessSectionDesktop = (): JSX.Element => {
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

  const [isVisible, setIsVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const section = document.querySelector('.process-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      className="relative w-full py-24 rounded-lg overflow-hidden mb-4 process-section"
      style={{
        backgroundImage: "url(/story.png)",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="container mx-auto">
        <h2 className="mx-auto py-4 text-center font-[Recoleta] font-normal text-white text-[64px] leading-normal max-w-[880px]">
          Little stories of not so little love
        </h2>

        <div className="relative h-[719px] mx-auto max-w-[953px] my-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="absolute"
              onClick={() => setSelectedCard(selectedCard === index ? null : index)}
              style={{
                width: card.width,
                height: card.height,
                top: card.top,
                left: card.left,
                transform: `
                  rotate(${card.rotate})
                  translateY(${isVisible ? '0' : '50px'})
                  scale(${selectedCard === index ? 1.02 : 1})
                `,
                zIndex: selectedCard === index ? 100 : card.zIndex,
                background: card.background,
                backgroundImage: "url(..//frame-32.png)",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                opacity: isVisible ? 1 : 0,
                cursor: "pointer",
                transition: `
                  transform 700ms cubic-bezier(0.4, 0, 0.2, 1),
                  opacity 700ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 200}ms,
                  box-shadow 700ms cubic-bezier(0.4, 0, 0.2, 1)
                `,
                boxShadow: selectedCard === index
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  : 'none',
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
