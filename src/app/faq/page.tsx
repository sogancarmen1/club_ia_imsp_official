// "use client";
import Faq from "@/components/faq";
import HeaderSecond from "@/components/headerSeconde";
import DefaultLayout from "@/components/layouts/DefaultLayouts";

export default function FaqPage() {
  return (
    <>
      <DefaultLayout>
        <HeaderSecond pageName="FAQs" links=""/>
        <Faq />
      </DefaultLayout>
    </>
  );
}
