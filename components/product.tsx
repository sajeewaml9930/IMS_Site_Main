import { fjalla } from "@/app/font";
import CardList from "./card-list";
import { getProducts } from "@/sanity/sanity.utils";

const Product = async () => {
  const products = await getProducts();

  return (
    <section
      className="py-10 px-10 md:px-16 flex flex-col items-center justify-center gap-10 scroll-mt-20"
      id="product"
    >
      <h2
        className={`${fjalla.className} text-3xl md:text-5xl font-semibold text-[#95A5A6]`}
      >
        Our Products
      </h2>
      <CardList items={products} text={"product"} />
    </section>
  );
};

export default Product;
