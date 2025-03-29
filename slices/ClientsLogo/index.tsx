import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ClientsLogo`.
 */
export type ClientsLogoProps = SliceComponentProps<Content.ClientsLogoSlice>;

/**
 * Component for "ClientsLogo" Slices.
 */
const ClientsLogo: FC<ClientsLogoProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="clients-logo bg-[rgb(247,247,247)]"
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
        <div className="wrapper mt-[40px!important] flex flex-wrap ml-[-25px!important] w-[calc(100%+50px)]">
          {slice.primary.logos.map((item, index) => (
            <div
              className="logo-wrap relative w-[calc(20%-50px)] mx-[25px!important] h-[147px]"
              key={index}
            >
              <PrismicNextImage
                field={item.icon}
                className="w-full h-full object-contain object-left"
              />
              <div className="hover-icon absolute inset-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                <PrismicNextImage
                  field={item.hover_icon}
                  className="w-full h-full object-contain object-left"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default ClientsLogo;
