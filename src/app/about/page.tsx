// "use client";
import About from "@/components/about";
import Feature from "@/components/feature";
import Team from "@/components/team";
import DefaultLayout from "@/components/layouts/DefaultLayouts";
import HeaderSecond from "@/components/headerSeconde";

export default function AboutPage() {
  return (
    <>
      <DefaultLayout>
        <HeaderSecond pageName="About Us" links=""/>
        <About />
        <Feature />
        <Team />
      </DefaultLayout>
    </>
  );
}
