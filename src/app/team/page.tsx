// "use client";
import Team from "@/components/team";
import DefaultLayout from "@/components/layouts/DefaultLayouts";
import HeaderSecond from "@/components/headerSeconde";

export default function TeamPage() {
  return (
    <>
      <DefaultLayout>
        <HeaderSecond pageName="Our Team" links=""/>
        <Team />
      </DefaultLayout>
    </>
  );
}
