// "use client";
import CaseProjects from "@/components/case/indexProject";
import Faq from "@/components/faq";
import HeaderSecond from "@/components/headerSeconde";
import DefaultLayout from "@/components/layouts/DefaultLayouts";

export default function ProjectPage() {
  return (
    <>
      <DefaultLayout>
        <HeaderSecond pageName="Nos projets" text="Projets" links="/project" />
        <CaseProjects numberOfProject={0} />
        <Faq />
      </DefaultLayout>
    </>
  );
}
