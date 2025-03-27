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
    >
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading1: ({ children }) => (
            <Heading
              as="h1"
              size="xl"
              className="md:mb-8 mb-4 mt-12 first-mt-0 last:mb-0"
            >
              {children}
            </Heading>
          ),
        }}
      />
      {slice.primary.img && (
        <div className="flex-1">
          <PrismicNextImage
            field={slice.primary.img}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}
    </Bounded>
  );
};

export default Hero;
