"use client"

import React, {useEffect} from 'react'
import AOS from "aos";

export const AOSInit: React.FC = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      offset: 100,
      once: false,
    });
  }, [])

  return <></>;
}
