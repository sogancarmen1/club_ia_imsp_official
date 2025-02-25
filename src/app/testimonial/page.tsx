// "use client";
import Testimonial from "@/components/testimonial";
import DefaultLayout from "@/components/layouts/DefaultLayouts";
import HeaderSecond from "@/components/headerSeconde";

export default function TestimonialPage() {
  return (
    <>
      <DefaultLayout>
        <HeaderSecond pageName="Testimonial" links=""/>
        <Testimonial />
      </DefaultLayout>
    </>
  );
}
