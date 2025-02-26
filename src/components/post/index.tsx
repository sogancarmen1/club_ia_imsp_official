"use client";
import { useDashboard } from "@/app/context/dataContext";
import HeaderSecond from "../headerSeconde";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import DOMPurify from "dompurify";

interface TitleProps {
  texts: string;
  links: string;
}

const PostPage: React.FC<TitleProps> = ({ texts, links }) => {
  const { projects, articles, articleFound, setArticleFound } = useDashboard();
  const path = usePathname()?.split("/")[1];
  const searchParams = useSearchParams();
  const lector = searchParams?.get("lire")?.slice(0, 2);

  useEffect(() => {
    if (path == "project") {
      const projectOrArticleFoundById = projects?.find(
        (project: any) => project.id == Number(lector)
      );
      setArticleFound(projectOrArticleFoundById);
    } else if (path == "actualities") {
      const projectOrArticleFoundById = articles?.find(
        (article: any) => article.id == lector
      );
      setArticleFound(projectOrArticleFoundById);
    }
  }, [articles, projects, searchParams]);

  return (
    <>
      <HeaderSecond pageName={articleFound?.title} text={texts} links={links} />
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="px-2">
                <img
                  className="py-5"
                  style={{ maxWidth: "100%", height: "auto", display: "block" }}
                  src={articleFound?.files[0]?.url}
                  alt="image du projet/actualité"
                />
              </div>
              <span>Publié le {articleFound?.date_publication}</span>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(articleFound?.contain),
                }}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default PostPage;
