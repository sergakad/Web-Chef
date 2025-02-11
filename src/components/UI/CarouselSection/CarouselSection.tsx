import { FC, ReactNode } from "react";
import Carousel from "react-multi-carousel";
import { CustomDot } from "./CustomDot";
import "react-multi-carousel/lib/styles.css";
import s from "./CarouselSection.module.scss";

export interface ICarouselSection {
  desktopItemsPerView?: number;
  tabletItemsPerView?: number;
  desktopPartialVisible?: number;
  tabletPartialVisible?: number;
  children?: ReactNode;
  autoplay?: boolean;
  draggable?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
}

const CarouselSection: FC<ICarouselSection> = ({
  children,
  desktopItemsPerView = 3,
  tabletItemsPerView = 3,
  desktopPartialVisible = 0,
  tabletPartialVisible = 0,
  autoplay = true,
  draggable = false,
  showDots = false,
  showArrows = true,
  ...props
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1910 },
      items: desktopItemsPerView,
      partialVisibilityGutter: desktopPartialVisible,
    },
    tablet: {
      breakpoint: { max: 1910, min: 1000 },
      items: tabletItemsPerView,
      partialVisibilityGutter: tabletPartialVisible,
    },
  };

  return (
    <Carousel
      showDots={showDots}
      itemClass={s.carouselItem}
      responsive={responsive}
      partialVisible
      draggable={draggable}
      autoPlay={autoplay}
      arrows={showArrows}
      infinite
      customDot={<CustomDot onClick={() => {}} />}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </Carousel>
  );
};

export { CarouselSection };
