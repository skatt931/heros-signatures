import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { useTranslation } from "react-i18next";

type CardProps = {
  id: number;
  name: string;
  x: string;
  y: string;
  description: string;
};

const HoverCardDemo = ({ name, description }: CardProps) => {
  const { t } = useTranslation();
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <div className="h-5 w-5 animate-pulse rounded-full bg-black" />
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
          sideOffset={5}
        >
          <div className="flex flex-col gap-[7px]">
            <img
              className="block size-[60px] rounded-full"
              src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
              alt="Radix UI"
            />
            <div className="flex flex-col gap-[15px]">
              <div>
                <div className="text-mauve12 m-0 text-[15px] font-medium">
                  {t(name)}
                </div>
              </div>
              <div className="text-mauve12 m-0 text-[15px]">
                {t(description)}
              </div>
              {/* <div className="flex gap-[15px]">
                <div className="flex gap-[5px]">
                  <div className="text-mauve12 m-0 text-[15px] font-medium">
                    0
                  </div>{" "}
                  <div className="text-mauve10 m-0 text-[15px]">Following</div>
                </div>
                <div className="flex gap-[5px]">
                  <div className="text-mauve12 m-0 text-[15px] font-medium">
                    2,900
                  </div>{" "}
                  <div className="text-mauve10 m-0 text-[15px]">Followers</div>
                </div>
              </div> */}
            </div>
          </div>

          <HoverCard.Arrow className="fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default HoverCardDemo;
