"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappBtn = () => {
  const baseUrl = process.env.NEXT_PUBLIC_WHATSAPP_LINK as string;
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER as string;

  const openWhatsappChat = () => {
    const whatsappUrl = `${baseUrl}${whatsappNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <button
      className="fixed bottom-20 right-5 bg-green-500 text-white text-2xl w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      aria-label="Theme Switch"
      onClick={openWhatsappChat}
    >
      <FaWhatsapp />
    </button>
  );
};

export default WhatsappBtn;
