import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `Counter`.
 */
export type CounterProps = SliceComponentProps<Content.CounterSlice>;

/**
 * Component for "Counter" Slices.
 */
const Counter: FC<CounterProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[rgb(237,205,31)]"
    >
      <div className="container">
        <div className="wrapper">
          {slice.primary.group.map((item, index) => (
            <div
              className="col-four w-[calc(25%-50px)] mx-[25px!important]"
              key={index}
            >
              <PrismicRichText
                field={item.title}
                components={{
                  heading4: ({ children }) => (
                    <Heading
                      as="h4"
                      size="md"
                      className="w-full text-black text-left mb-[17px]"
                    >
                      {children}
                    </Heading>
                  ),
                }}
              />
              <PrismicRichText
                field={item.description}
                components={{
                  heading4: ({ children }) => (
                    <Heading
                      as="h4"
                      size="md"
                      className="w-full text-black text-left mb-[17px]"
                    >
                      {children}
                    </Heading>
                  ),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Counter;
