"use client";

import { useEffect, useRef } from "react";
import * as THREE from 'three';
import GLOBE from "vanta/dist/vanta.globe.min.js";
import { VantaEffect } from "@/lib/definitions";

export default function VantaBackground() {

    const vantaRef = useRef<HTMLDivElement>(null);// -> current property holds an instance of the div element
    const vantaEffect = useRef<VantaEffect | null>(null);

    useEffect(() => {

        if (!vantaRef.current) {
            return;
        }

        vantaEffect.current = GLOBE(
            {
                el: vantaRef.current, //  this is the <div /> element
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,

                minHeight: 200,
                minWidth: 200,

                scale: 1,
                scaleMobile: 1,

                size:1.5,

                color: 0x3f79ff,
                color2: 0x489fff,
                backgroundColor: 0xf5f8ff,
            }
        );

        return () => {
            vantaEffect.current?.destroy();
            vantaEffect.current = null;
        };


    },[]);

    return (
        <div 
            ref={vantaRef}
            className="h-full w-full [mask-image:radial-gradient(circle,black_60%,transparent_76%)]"
        />
    );

}