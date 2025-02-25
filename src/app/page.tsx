// "use client";
import About from "@/components/about";
import Service from "@/components/service";
import Feature from "@/components/feature";
import CaseProjects from "@/components/case/indexProject";
import Faq from "@/components/faq";
import Team from "@/components/team";
import Testimonial from "@/components/testimonial";
import Header from "@/components/header";
import DefaultLayout from "@/components/layouts/DefaultLayouts";
import CaseArticles from "@/components/case/indexArticle";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Header />
        <About />
        <Service />
        <Feature />
        <CaseProjects numberOfProject={3} />
        <CaseArticles numberOfArticle={3} />
        <Faq />
        <Team />
        {/* <Testimonial /> */}
      </DefaultLayout>
    </>
  );
}
