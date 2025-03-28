import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-[930px]"
    >
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading1: ({ children }) => (
            <Heading
              as="h1"
              size="xl"
              className="w-full mt-[80px!important] text-white"
            >
              {children}
            </Heading>
          ),
        }}
      />
      {slice.primary.img && (
        <div className="absolute left-0 top-0 w-full h-full z-[-2]">
          <PrismicNextImage
            field={slice.primary.img}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </Bounded>
  );
};

export default Hero;
