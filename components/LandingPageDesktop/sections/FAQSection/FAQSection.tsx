import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FAQSectionMobile = (): JSX.Element => {
  const paragraphs = [
    "Ollifur began with a cat named Oliver, though everyone called him Ollie. He belonged to my best friend, and when Ollie passed away, I couldn't be there in person.",
    "All I could do was listen over the phone as my friend navigated the aftermath of losing a beloved pet. The confusion, the grief, the sudden decisions that needed to be made - it was overwhelming for someone already hurting.",
    "This site was created simply to help others find their way through similar moments with a little more ease than my friend had. Because sometimes, knowing where to turn makes all the difference.",
  ];

  return (
    <Card className="w-full mt-4 h-auto pt-8 px-6 bg-[#9d5113e6] rounded-lg overflow-hidden">
      <CardContent className="p-10 pb-0 mt-6 flex flex-col">
        <div className="font-[Recoleta] font-normal text-white text-3xl tracking-[0] leading-[normal] mb-6">
          The Why
        </div>

        <div className="flex flex-col mt-2">
          <div className="w-full flex flex-col items-start gap-4">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="self-stretch font-normal text-white text-sm tracking-[0] leading-[normal]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative max-w-[484px] ml-auto">
              <img
                className="relative w-[347px] h-[342px] left-28 object-cover"
                alt="Hi"
                src="/cat.png"
              />

              <div className="absolute top-[120px] right-0 font-[Recoleta] font-semibold text-white text-base tracking-[0] leading-[normal]">
                His majesty - Oliver
              </div>

              <Separator className="absolute w-[133px] h-px mt-[29px] right-1 bottom-32 bg-white" />

              <div className=" w-[171px] mt-[10px] absolute right-40 bottom-28 font-extralight text-white text-base tracking-[0] leading-[normal]">
                Permanently angry<br/> face. Not actually angry
              </div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const FAQSectionDesktop = (): JSX.Element => {
  const paragraphs = [
    "Ollifur began with a cat named Oliver, though everyone called him Ollie. He belonged to my best friend, and when Ollie passed away, I couldn't be there in person.",
    "All I could do was listen over the phone as my friend navigated the aftermath of losing a beloved pet. The confusion, the grief, the sudden decisions that needed to be made - it was overwhelming for someone already hurting.",
    "This site was created simply to help others find their way through similar moments with a little more ease than my friend had. Because sometimes, knowing where to turn makes all the difference.",
  ];

  return (
    <Card className="w-full mt-4  h-auto pt-[111px] px-24  bg-[#9d5113e6] rounded-lg overflow-hidden">
      <CardContent className="p-0 flex flex-row">
        <div className="font-[Recoleta]  ml-[9px] font-normal text-white text-4xl tracking-[0] leading-[normal]">
          The Why
        </div>

        <div className="flex-1 ml-[176px]">
          <div className="flex flex-col">
            <div className="w-full max-w-[593px] flex flex-col items-start gap-[18px]">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="self-stretch font-normal text-white text-base tracking-[0] leading-[normal]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="relative mt-[18px] max-w-[484px] ml-auto">
              <img
                className="relative w-[347px] h-[342px] left-25  object-cover"
                alt="Hi"
                src="/cat.png"
              />

              <div className="absolute top-[127px] right-0 font-[Recoleta] font-semibold text-white text-base tracking-[0] leading-[normal]">
                His majesty - Oliver
              </div>

              <Separator className="absolute w-[333px] h-px mt-[29px] right-16 bottom-32 bg-white" />

              <div className=" w-[171px] mt-[10px] absolute right-100 bottom-28 font-extralight text-white text-base tracking-[0] leading-[normal]">
                Permanently angry<br/> face. Not actually angry
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
