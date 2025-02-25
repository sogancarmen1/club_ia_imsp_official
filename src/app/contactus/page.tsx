// "use client";
import Contact from "@/components/contactus";
import HeaderSecond from "@/components/headerSeconde";
import DefaultLayout from "@/components/layouts/DefaultLayouts";

export default function ContactusPage() {
  return (
    <>
      <DefaultLayout>
        <HeaderSecond pageName="Contact Us" links=""/>
        <Contact/>
      </DefaultLayout>
    </>
  );
}
