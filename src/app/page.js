import CategoryMenu from "@/components/category/CategoryMenu";
import Header from "./../components/Header";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <>
      <Header />
      <CategoryMenu />

      {/* ONLY SHOW ON MOBILE DEVICE */}
      <BottomNav />
    </>
  );
}
