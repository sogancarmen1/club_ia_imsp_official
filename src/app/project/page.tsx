// "use client";
import Case from "@/components/case";
import Faq from "@/components/faq";
import Header from "@/components/header";
import DefaultLayout from "@/components/layouts/DefaultLayouts";

export default function ServicePage() {
  return (
    <>
      <DefaultLayout>
        <Header />
        <Case />
        <Faq />
      </DefaultLayout>
    </>
  );
}
