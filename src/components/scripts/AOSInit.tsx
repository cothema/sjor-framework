"use client"

import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      offset: 100,
      once: false,
    });
  }, [])

  return null;
}
