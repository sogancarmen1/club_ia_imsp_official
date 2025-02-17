// "use client";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";
import Header from "@/components/header";
import DefaultLayout from "@/components/layouts/DefaultLayouts";

export default function ServicePage() {
  return (
    <>
      <DefaultLayout>
        <Header />
        <Service />
        <Testimonial />
      </DefaultLayout>
    </>
  );
}
