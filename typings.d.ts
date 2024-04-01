import { PortableTextBlock } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Common extends Base {
  title: string;
  summary: string;
  slug: string;
  url: string;
  image: string;
  content: PortableTextBlock[];
}

interface Product extends Common {}

interface Service extends Common {}

type Theme = "light" | "dark";
