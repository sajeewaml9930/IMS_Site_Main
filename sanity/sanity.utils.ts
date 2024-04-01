import { groq } from "next-sanity";
import { client } from "./sanity.client";
import { Product, Service } from "@/typings";

export const getProducts = async (): Promise<Product[]> => {
  return client.fetch(groq`*[_type == "products"]{
    _id,
    title,
    summary,
    "slug": slug.current,
    "image": image.asset->url,
  }`);
};

export const getServices = async (): Promise<Service[]> => {
  return client.fetch(groq`*[_type == "services"]{
    _id,
    title,
    summary,
    "slug": slug.current,
    "image": image.asset->url,
  }`);
};

export const getProduct = async (slug: string): Promise<Product> => {
  return client.fetch(
    groq`*[_type == "products" && slug.current == $slug][0]{
    _id,
    title,
    url,
    "image": image.asset->url,
    content
  }`,
    { slug }
  );
};

export const getService = async (slug: string): Promise<Service> => {
  return client.fetch(
    groq`*[_type == "services" && slug.current == $slug][0]{
    _id,
    title,
    url,
    "image": image.asset->url,
    content
  }`,
    { slug }
  );
};
