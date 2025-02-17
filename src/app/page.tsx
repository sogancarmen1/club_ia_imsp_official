// "use client";
import About from "@/components/about";
import Service from "@/components/service";
import Feature from "@/components/feature";
import Case from "@/components/case";
import Faq from "@/components/faq";
import Team from "@/components/team";
import Testimonial from "@/components/testimonial";
import Header from "@/components/header";
import DefaultLayout from "@/components/layouts/DefaultLayouts";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Header />
        <About />
        <Service />
        <Feature />
        <Case />
        <Faq />
        <Team />
        <Testimonial />
      </DefaultLayout>
    </>
  );
}
