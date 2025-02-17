import Footbar from "../footer";
import NavBar from "../navbar";
import Newletters from "../newletters";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Newletters />
      <Footbar />
    </>
  );
}
