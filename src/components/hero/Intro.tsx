import { Bebas_Neue } from "@next/font/google";
import Image from "next/image";
import React from "react";
import { Discord, Twitter } from "../Icons";

type Props = {};

function Intro({}: Props) {
  return (
    <div className=" w-screen text-slate-200 absolute top-[100vh] bg-[#15151a] py-8 ">
      <div className="mx-auto max-w-3xl px-[5%] sm:p-0 py-5 ">
        <h3 className="text-base text-center font-bebas opacity-70">
          Unlock the Magic of The Arcane:
          <br /> A Story-Driven NFT Project on Arbitrum Blockchain
        </h3>
        <h1 className="opacity-70 font-bebas text-6xl md:text-7xl text-center font-semibold pt-3 pb-4 md:pb-6 ">
          The Arcane Origin
        </h1>
        <p className="text-center text-base py-2 sm:py-3 font-bebas opacity-70">
          The Arcane is a collection of 7,777 enchanting NFTs on the Arbitrum
          blockchain. Join us on a journey through a magical world full of
          wonder and intrigue, as you help characters unlock secrets, discover
          treasures, and unravel the mystery of arcane powers. Only one rule
          stands in the way of ultimate power in The Arcane.
        </p>
        <div className="flex space-x-5 justify-center  py-2 sm:py-4">
          <Discord className="text-4xl sm:text-3xl fill-slate-200 opacity-50 hover:cursor-pointer hover:opacity-100  hover:duration-1000 duration-1000" />
          <Twitter className="text-4xl sm:text-3xl fill-slate-200 opacity-50 hover:cursor-pointer hover:opacity-100  hover:duration-1000 duration-1000" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
