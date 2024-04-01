import { fjalla } from "@/app/font";
import CardList from "./card-list";
import { getServices } from "@/sanity/sanity.utils";

const Service = async () => {
  const services = await getServices();

  return (
    <section
      className="py-10 px-10 md:px-16 flex flex-col items-center justify-center gap-10 scroll-mt-20"
      id="service"
    >
      <h2
        className={`${fjalla.className} text-3xl md:text-5xl font-semibold text-[#95A5A6]`}
      >
        Our Services
      </h2>
      <CardList items={services} text="service" />
    </section>
  );
};

export default Service;
