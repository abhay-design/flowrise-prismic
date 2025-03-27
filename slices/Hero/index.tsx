import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

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
      {slice.primary.video?.html ? (
        <div
          className="video-embed-wrapper"
          dangerouslySetInnerHTML={{ __html: slice.primary.video.html }}
        />
      ) : (
        <div className="video-placeholder">
          {/* Optional: Add a fallback message or placeholder content */}
          <p>Video content not available</p>
        </div>
      )}
    </Bounded>
  );
};

export default Hero;
