// Real client quotes only, supplied and approved by the firm quoted.
// The section stays off the page while this list is empty — never add
// placeholder or invented quotes here.
export type Testimonial = {
  quote: string;
  quoteLang: "fr" | "ar" | "en";
  name: string;
  role: string;
  firm: string;
};

export const testimonials: Testimonial[] = [];
