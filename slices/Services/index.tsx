import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services: FC<ServicesProps> = ({ slice }) => {
  return (
    <>
      {slice.variation === "default" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="services"
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
            <div className="wrapper mt-[50px!important] flex flex-wrap">
              {slice.primary.cards.map((item, index) => (
                <div
                  className="card w-[calc(33.33%-20px)] mx-[10px!important]"
                  key={index}
                >
                  <div className="img-wrap max-w-full h-[225px]">
                    {item.img && (
                      <PrismicNextImage
                        field={item.img}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="content-wrap bg-[rgb(247,247,247)] p-[20px!important]">
                    {item.title && (
                      <PrismicRichText
                        field={item.title}
                        components={{
                          heading3: ({ children }) => (
                            <Heading
                              as="h3"
                              size="sm"
                              className="w-full text-black text-left mb-[17px]"
                            >
                              {children}
                            </Heading>
                          ),
                        }}
                      />
                    )}
                    {item.description && (
                      <PrismicRichText field={item.description} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Bounded>
      )}

      {slice.variation === "projects" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="services"
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
            <div className="wrapper mt-[20px!important] flex flex-wrap">
              {slice.primary.cards.map((item, index) => (
                <div
                  className="card w-[calc(50%-30px)] mx-[15px!important] mt-[30px!important]"
                  key={index}
                >
                  <div className="img-wrap max-w-full h-[455px]">
                    {item.img && (
                      <PrismicNextImage
                        field={item.img}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Bounded>
      )}
    </>
  );
};

export default Services;
