import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicRichText } from "@prismicio/react";
import Heading from "@/components/Heading";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact: FC<ContactProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <div className="text-wrap">
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
        <div className="wrapper w-full relative">
          {slice.primary.iframe?.html ? (
            <div
              dangerouslySetInnerHTML={{
                __html: slice.primary.iframe.html,
              }}
            />
          ) : (
            <p className="text-red-500">Contact form iframe missing</p>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default Contact;
