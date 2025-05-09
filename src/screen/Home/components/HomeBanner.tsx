import { banner_1 } from "@/images";
import Title from "@/src/common/elements/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="bg-shop_light_pink py-16 md:py-0 rounded-lg px-10 lg:px-24 flex items-center justify-between">
      {/* for text */}
      <div className="space-y-5">
        <Title>
          Grab Upto 50% off on <br /> Selected headphone
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect"
        >
          Buy Now
        </Link>
      </div>
      {/*  for image */}
      <div>
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
