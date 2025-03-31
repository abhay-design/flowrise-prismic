import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials: FC<TestimonialsProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <div className="text-wrap w-full relative">
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading2: ({ children }) => (
                <Heading
                  as="h2"
                  size="lg"
                  className="w-full  text-black relative"
                >
                  {children}
                </Heading>
              ),
            }}
          />
        </div>
        <div className="wrapper mt-[50px!important]">
          {slice.primary.group.map((item, index) => (
            <PrismicNextLink key={index} field={item.testimonial}>
              {/* {item.testimonial} */}
            </PrismicNextLink>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Testimonials;
