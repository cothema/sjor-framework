'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React, {FC, ReactNode} from "react";

export type Recommendation = {
  text: string | ReactNode;
  name: string;
  role: string;
  image: string;
};

type RecommendationsSwiperProps = {
  recommendations: Recommendation[];
};

export const RecommendationsSwiper: FC<RecommendationsSwiperProps> = ({recommendations}) => {
  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {slidesPerView: 2},
          1280: {slidesPerView: 3},
        }}
        navigation
        pagination={false}
        className="mt-12 mb-20 max-w-7xl"
      >
        <div className="h-full">
          {recommendations.map((recommendation, index) => (
            <SwiperSlide key={index} className={"h-full"}>
              <div className="text-center text-xl 2xl:text-2xl shadow-lg bg-light rounded-xl h-full justify-center">
                <div className="px-6 py-8 flex-grow flex items-center justify-center">
                  <div>{recommendation.text}</div>
                </div>
                <div className="flex items-center p-6">
                  <Image
                    src={recommendation.image}
                    width={80}
                    height={80}
                    className="rounded-full object-cover h-20 w-20 shadow-md"
                    alt={recommendation.name}
                  />
                  <div className="ml-4 text-left">
                    <b>{recommendation.name}</b>
                    <br/>
                    {recommendation.role}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
