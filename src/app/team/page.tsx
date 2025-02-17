// "use client";
import Team from "@/components/team";
import Header from "@/components/header";
import DefaultLayout from "@/components/layouts/DefaultLayouts";

export default function ServicePage() {
  return (
    <>
      <DefaultLayout>
        <Header />
        <Team />
      </DefaultLayout>
    </>
  );
}
