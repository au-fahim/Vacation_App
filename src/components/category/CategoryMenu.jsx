import { categories } from "@/db/categories";
import CategoryBtn from "./CategoryBtn";

const categoryList = categories.map((category, index) => {
  return (
    <CategoryBtn
      key={index}
      id={index}
      ctgName={category.name}
      ctgImg={category.icon}
    />
  );
});

export default function CategoryMenu() {
  return (
    <div className="border-b">
      <div className="main_inner">
        <section className="flex flex-row gap-4 pt-2 lg:pt-4">
          {categoryList}
        </section>
      </div>
    </div>
  );
}
