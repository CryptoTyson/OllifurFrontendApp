import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FAQSection = (): JSX.Element => {
  const paragraphs = [
    "Ollifur began with a cat named Oliver, though everyone called him Ollie. He belonged to my best friend, and when Ollie passed away, I couldn't be there in person.",
    "All I could do was listen over the phone as my friend navigated the aftermath of losing a beloved pet. The confusion, the grief, the sudden decisions that needed to be made - it was overwhelming for someone already hurting.",
    "This site was created simply to help others find their way through similar moments with a little more ease than my friend had. Because sometimes, knowing where to turn makes all the difference.",
  ];

  return (
    <Card className="relative w-full mt-4  h-auto pt-[111px] px-6 mx-auto bg-[#9d5113e6] rounded-lg overflow-hidden">
      <CardContent className="p-0 flex flex-row">
        <div className="w-[211px] ml-[18px] [font-family:'Recoleta-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
          The Why
        </div>

        <div className="flex-1 ml-[190px]">
          <div className="flex flex-col">
            <div className="w-full max-w-[593px] flex flex-col items-start gap-[18px]">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="self-stretch [font-family:'Kind_Sans-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="relative mt-[18px] max-w-[484px] ml-auto">
              <img
                className="w-[347px] h-[342px] ml-auto object-cover"
                alt="Hi"
                src="/cat.png"
              />

              <div className="absolute w-[171px] top-[127px] right-[58px] [font-family:'Recoleta-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
                His majesty - Oliver
              </div>

              <Separator className="w-[333px] h-px mt-[29px] bg-white" />

              <div className="w-[171px] mt-[10px] ml-[136px] [font-family:'Kind_Sans-Light',Helvetica] font-light text-white text-base tracking-[0] leading-[normal]">
                Permanently angry face. Not actually angry
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
