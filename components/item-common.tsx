import { Common } from "@/typings";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-2 list-disc space-y-1">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
};

const ItemCommon = ({ title, content, url, image }: Common) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-5 pt-5 md:px-10 gap-10 md:gap-[10rem]">
      <div className="md:w-1/2 px-10 flex flex-col items-center justify-center md:items-start gap-5 md:gap-10">
        <h1 className="text-3xl md:text-4xl font-semibold dark:text-white">
          {title}
        </h1>
        <div className="text-sm text-justify dark:text-white">
          <PortableText
            value={content}
            components={myPortableTextComponents}
          ></PortableText>
        </div>
        {url && (
          <Link
            href={url}
            target="_black"
            className="bg-blue-400 w-fit px-5 py-2 md:px-8 md:py-3 rounded-full text-white font-semibold opacity-80 hover:opacity-100"
          >
            Learn More
          </Link>
        )}
      </div>
      <div className="border-2 border-black rounded-xl">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          priority
          quality={98}
          className="w-auto h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ItemCommon;
