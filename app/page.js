"use client";
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import logo from  '../public/logo.webp';
import logo1 from  '../public/logo.webp';

const page = () => {
  return (
    <div>
      <Swiper
         spaceBetween={50}
         slidesPerView={1}
         pagination={{ clickable: true }}
         loop
         autoplay={{ delay: 3000, disableOnInteraction: false }}
         modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide><Image src={logo}></Image></SwiperSlide>
        <SwiperSlide><Image src={logo1}></Image></SwiperSlide>
        <SwiperSlide><Image src={logo}></Image></SwiperSlide>
        <SwiperSlide><Image src={logo}></Image></SwiperSlide>

      </Swiper>
      <Link href="/about">About</Link>

      <TypeAnimation
        sequence={[
          'Time In The Market, Beats Timing The Market.', // Types the string
          1000, // Waits 1s
          '', // Deletes everything
          1000, // Waits 1s before typing again
          'Time In The Market, Beats Timing The Market.', // Types the string again
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        className=' text-4xl font-mono font-semibold text-red-500 text-center'
      />


    </div>
  )
}

export default page