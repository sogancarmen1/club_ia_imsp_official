// "use client";
import Faq from "@/components/faq";
import Header from "@/components/header";
import DefaultLayout from "@/components/layouts/DefaultLayouts";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Header />
        <Faq />
      </DefaultLayout>
    </>
  );
}
