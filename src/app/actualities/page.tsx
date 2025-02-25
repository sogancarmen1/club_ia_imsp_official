// "use client";
import CaseArticles from "@/components/case/indexArticle";
import Faq from "@/components/faq";
import HeaderSecond from "@/components/headerSeconde";
import DefaultLayout from "@/components/layouts/DefaultLayouts";

export default function ProjectPage() {
  return (
    <>
      <DefaultLayout>
        <HeaderSecond
          pageName="Actualités"
          text="Actualités"
          links="/actualities"
        />
        <CaseArticles numberOfArticle={0} />
        <Faq />
      </DefaultLayout>
    </>
  );
}
