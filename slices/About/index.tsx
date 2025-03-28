import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="about"
    >
      <div className="bg-img absolute right-0 top-0 w-full h-full">
        <PrismicNextImage
          field={slice.primary.img}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container">
        <div className="text-wrap z-[2] relative max-w-[404px]">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <Heading
                  as="h2"
                  size="lg"
                  className="w-full  text-black relative mb-[50px!important] text-left"
                >
                  {children}
                </Heading>
              ),
            }}
          />
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </Bounded>
  );
};

export default About;
