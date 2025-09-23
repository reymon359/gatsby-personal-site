"use client"

import { usePathname } from "next/navigation";
import Stars from "./Stars";
// import { useStarColorStore } from "@/app/utils/starColorStore";


export default function StarRoot() {
    const pathname = usePathname();
    // const starColor = useStarColorStore((state) => state.starColor);

    return (
        <>
            {pathname !== '/' && (
                <Stars
                    normalVelocity={0.0001}
                    containerOpacity={0.3}
                    addEventListeners={false}
                    // starColor={starColor}
                />
            )}
        </>
    )
}