import { FC, ReactNode } from "react";
import Carousel from "react-multi-carousel";
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
}

const CarouselSection: FC<ICarouselSection> = ({
  children,
  desktopItemsPerView = 3,
  tabletItemsPerView = 2,
  desktopPartialVisible = 0,
  tabletPartialVisible = 0,
  autoplay = true,
  draggable = false,
  ...props
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: desktopItemsPerView,
      partialVisibilityGutter: desktopPartialVisible,
    },
    tablet: {
      breakpoint: { max: 1400, min: 1000 },
      items: tabletItemsPerView,
      partialVisibilityGutter: tabletPartialVisible,
    },
  };

  return (
    <Carousel
      itemClass={s.carouselItem}
      responsive={responsive}
      partialVisible
      draggable={draggable}
      autoPlay={autoplay}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </Carousel>
  );
};

export { CarouselSection };
