// "use client";
import Header from "@/components/header";
import HeaderSecond from "@/components/headerSeconde";
import DefaultLayout from "@/components/layouts/DefaultLayouts";
import PostPage from "@/components/post";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <PostPage texts="Actualités" links="/actualities" />
      </DefaultLayout>
    </>
  );
}
