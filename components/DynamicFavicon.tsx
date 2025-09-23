"use client";
import { useEffect } from "react";
import { getRandomFruit } from "@/app/utils";

export default function DynamicFavicon() {
  useEffect(() => {
    const fruit = getRandomFruit();
    const fruitFaviconMap: Record<string, string> = {
      kiwi: "/images/favicon/kiwi.png",
      coconut: "/images/favicon/coconut.png",
      grapes: "/images/favicon/grapes.png",
      melon: "/images/favicon/melon.png",
      watermelon: "/images/favicon/watermelon.png",
      orange: "/images/favicon/orange.png",
      lemon: "/images/favicon/lemon.png",
      banana: "/images/favicon/banana.png",
      pineapple: "/images/favicon/pineapple.png",
      red_apple: "/images/favicon/red_apple.png",
      green_apple: "/images/favicon/green_apple.png",
      pear: "/images/favicon/pear.png",
      peach: "/images/favicon/peach.png",
      cherries: "/images/favicon/cherries.png",
      strawberry: "/images/favicon/strawberry.png",
    };
    const favicon = fruitFaviconMap[fruit] || "/favicon.ico";

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = favicon;

    const head = document.querySelector("head");
    const existingFavicon = head?.querySelector("link[rel='icon']");
    if (existingFavicon) {
      head?.removeChild(existingFavicon);
    }
    head?.appendChild(link);
  }, []);

  return null;
}
