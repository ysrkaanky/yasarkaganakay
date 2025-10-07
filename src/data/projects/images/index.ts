import { StaticImageData } from "next/image"
import muratulkerDesktop from "./mrt_ulker_desktop.png"
import muratulkerMobile from "./mrt_ulker_mobile.png"

import neseliDislerDesktop from "./neseli_disler_dekstop.png"
import neseliDislerMobile from "./neseli_disler_mobile.png"

import rentalDesktop from "./rental_dekstop.png"
import rentalMobile from "./rental_mobile.png"

import sabirTeknikDesktop from "./sabirteknik_desktop.png"
import sabirTeknikMobile from "./sabirteknik_mobile.png"

import wordCounterDesktop from "./word_counter_desktop.png"
import wordCounterMobile from "./word_counter_mobile.png"

import iksorDesktop from "./iksor_desktop.webp"
import iksorMobile from "./iksor_mobile.webp"
interface ProjectImages {
  desktopImage: StaticImageData
  mobileImage: StaticImageData
}

export const projectImages = {
  murat_ulker: {
    desktopImage: muratulkerDesktop,
    mobileImage: muratulkerMobile,
  },
  rental_contract: {
    desktopImage: rentalDesktop,
    mobileImage: rentalMobile,
  },
  sabirteknik: {
    desktopImage: sabirTeknikDesktop,
    mobileImage: sabirTeknikMobile,
  },
  word_counter: {
    desktopImage: wordCounterDesktop,
    mobileImage: wordCounterMobile,
  },
  neseli_disler: {
    desktopImage: neseliDislerDesktop,
    mobileImage: neseliDislerMobile,
  },
  iksor: {
    desktopImage: iksorDesktop,
    mobileImage: iksorMobile,
  },
} satisfies {
  [key: string]: ProjectImages
}
