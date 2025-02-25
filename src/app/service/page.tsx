// "use client";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";
import Header from "@/components/header";
import DefaultLayout from "@/components/layouts/DefaultLayouts";
import HeaderSecond from "@/components/headerSeconde";

export default function ServicePage() {
  return (
    <>
      <DefaultLayout>
        <HeaderSecond pageName="Our Services" links=""/>
        <Service />
        <Testimonial />
      </DefaultLayout>
    </>
  );
}
