import { FC, useEffect, useState } from "react";
import { Loader } from "@/components/UI/Loader";
import { CarouselSection } from "@/components/UI/CarouselSection/";
import { IAdvice } from "@/shared/interfaces/advice.interface";
import { AdviceCard } from "./AdviceCard";

const AdviceCardCarouselSection: FC = () => {
  const [advices, setAdvices] = useState<IAdvice[]>([]);
  const [isLoadingAdvices, setLoadingAdvices] =
    useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("/data/advices.json");
      const data = await response.json();
      if (Array.isArray(data.advices))
        setAdvices(data.advices);
      setLoadingAdvices(false);
    })();
  }, []);

  return (
    <div>
      {isLoadingAdvices ? (
        <Loader />
      ) : (
        <CarouselSection
          desktopItemsPerView={1}
          tabletItemsPerView={1}
          autoplay={false}
          showDots
          showArrows={false}
          draggable
        >
          {advices.map((advice) => (
            <AdviceCard
              key={advice.id}
              title={advice.title}
              href={advice.href}
              backgroundImage={advice.backgroundImage}
            />
          ))}
        </CarouselSection>
      )}
    </div>
  );
};

export { AdviceCardCarouselSection };
