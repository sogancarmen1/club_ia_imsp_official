// "use client";
import About from "@/components/about";
import Feature from "@/components/feature";
import Team from "@/components/team";
import Header from "@/components/header";
import DefaultLayout from "@/components/layouts/DefaultLayouts";

export default function AboutPage() {
  return (
    <>
      <DefaultLayout>
        <Header />
        <About />
        <Feature />
        <Team />
      </DefaultLayout>
    </>
  );
}
