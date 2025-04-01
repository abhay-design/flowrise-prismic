import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
export default async function Testimonials({ slice }: TestimonialsProps) {
  const client = createClient();

  const testimonials = await Promise.all(
    slice.primary.group.map(async (item) => {
      if (
        !item.testimonial ||
        item.testimonial.link_type !== "Document" ||
        !item.testimonial.uid
      ) {
        return null;
      }

      try {
        return await client.getByUID("testimonial", item.testimonial.uid, {
          fetchLinks: [], // Add any related documents you want to fetch
        });
      } catch (error) {
        console.error(
          `Error fetching testimonial ${item.testimonial.uid}:`,
          error
        );
        return null;
      }
    })
  );

  // Filter out any null values from failed fetches
  const validTestimonials = testimonials.filter(Boolean);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="testimonials"
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
                  className="w-full text-black relative"
                >
                  {children}
                </Heading>
              ),
            }}
          />
        </div>

        <div className="grid mt-[50px!important] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {validTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg flex flex-wrap shadow-md hover:shadow-lg transition-shadow p-[25px!important]"
            >
              <PrismicRichText
                field={testimonial?.data.quote}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-gray-600 text-left italic mb-[20px!important]">
                      {children}
                    </p>
                  ),
                }}
              />

              <div className="card-wrap flex flex-wrap">
                {testimonial?.data.avtar && (
                  <div className=" mr-[10px!important]">
                    <PrismicNextImage
                      field={testimonial.data.avtar}
                      className="rounded-full max-w-[56px] w-full h-[56px] object-cover mx-auto"
                    />
                  </div>
                )}

                <div className="content-wrap text-left">
                  <div className="font-semibold ">{testimonial?.data.name}</div>

                  {testimonial?.data.job_title && (
                    <div className="text-sm text-gray-500 ">
                      {testimonial.data.job_title}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
