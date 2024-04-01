import React from "react";
import Card from "./card";
import { Common, Product } from "@/typings";

type Props = {
  items: Common[];
  text: string;
};

const CardList = ({ items, text }: Props) => {
  return (
    <>
      {items?.length ? (
        <div className="mx-auto grid gap-20 grid-cols-1 md:grid-cols-3">
          {items?.map((item) => (
            <React.Fragment key={item._id}>
              <a href={`${text}/${item.slug}`}>
                <Card {...item} />
              </a>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          - No <span>{text}</span> by IMS -
        </p>
      )}
    </>
  );
};

export default CardList;
