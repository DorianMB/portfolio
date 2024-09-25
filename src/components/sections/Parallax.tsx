import { getRandomPosition, getScrollTransform, getRandomRotation } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import {
    Rocket,
    Eclipse,
    Orbit,
    Telescope,
    Satellite,
    MoonStar,
    Sparkle,
    Sparkles,
    Moon,
    StarIcon,
} from 'lucide-react';
import React from "react";

export default React.memo(function Parallax() {
    const { scrollY } = useScroll();
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const multiPara = 10;

    // Positions aléatoires pour chaque icône
    let iconsParallaxLeft = [
        // part 1
        {
            icon: <Rocket className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Eclipse className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Orbit className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Telescope className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Satellite className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <MoonStar className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Sparkle className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Sparkles className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Moon className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <StarIcon className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-world mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-galaxy-alt mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-space-shuttle mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-meteor mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-galaxy-star mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-ufo mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-user-astronaut mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        // part 2
        {
            icon: <Rocket className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Eclipse className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Orbit className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Telescope className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Satellite className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <MoonStar className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Sparkle className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Sparkles className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Moon className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <StarIcon className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-world mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-galaxy-alt mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-space-shuttle mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-meteor mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-galaxy-star mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-ufo mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-user-astronaut mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        // part 3
        {
            icon: <Rocket className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Eclipse className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Orbit className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Telescope className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Satellite className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <MoonStar className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Sparkle className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Sparkles className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Moon className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <StarIcon className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-world mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-galaxy-alt mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-space-shuttle mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-meteor mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-galaxy-star mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-ufo mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-user-astronaut mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            left: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
    ];


    let iconsParallaxRight = [
        // part 1
        {
            icon: <Rocket className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Eclipse className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Orbit className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Telescope className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Satellite className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <MoonStar className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Sparkle className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Sparkles className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Moon className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <StarIcon className={`mr-2 h-4 w-4`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-world mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-galaxy-alt mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-space-shuttle mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-meteor mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-galaxy-star mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-ufo mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-user-astronaut mr-2 flex scale-[1]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        // part 2
        {
            icon: <Rocket className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Eclipse className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Orbit className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Telescope className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Satellite className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <MoonStar className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Sparkle className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Sparkles className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Moon className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <StarIcon className={`mr-2 h-8 w-8`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-world mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-galaxy-alt mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-space-shuttle mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-meteor mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-galaxy-star mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-ufo mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-user-astronaut mr-2 flex scale-[2]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        // part 3
        {
            icon: <Rocket className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Eclipse className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Orbit className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Telescope className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Satellite className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <MoonStar className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Sparkle className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Sparkles className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <Moon className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <StarIcon className={`mr-2 h-12 w-12`} />,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-world mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-galaxy-alt mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-space-shuttle mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-meteor mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-galaxy-star mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-ufo mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
        {
            icon: <i className={`fi fi-rs-user-astronaut mr-2 flex scale-[4]`}></i>,
            top: getRandomPosition(0, 2000),
            right: getRandomPosition(0, 2000),
            y: getScrollTransform(scrollY, 0, screenHeight * multiPara),
            rotate: getRandomRotation()
        },
    ];

    //Adjustment of the number of icons according to the screen size
    if (screenWidth <= 1500 && screenWidth >= 1000 && iconsParallaxLeft && iconsParallaxLeft.length) {
        iconsParallaxLeft = iconsParallaxLeft.slice(0, Math.floor(iconsParallaxLeft.length / 1.5));
        iconsParallaxRight = iconsParallaxRight.slice(0, Math.floor(iconsParallaxRight.length / 1.5));
    } else if (screenWidth < 1000 && iconsParallaxLeft && iconsParallaxLeft.length) {
        iconsParallaxLeft = iconsParallaxLeft.slice(0, Math.floor(iconsParallaxLeft.length / 2));
        iconsParallaxRight = iconsParallaxRight.slice(0, Math.floor(iconsParallaxRight.length / 2));
    }

    return (
        <motion.div className="absolute top-0 left-0 w-screen h-screen">
            {iconsParallaxLeft && iconsParallaxLeft.length > 0 && iconsParallaxLeft.map((para, index) => (
                <motion.div
                    key={'icon-left-' + index}
                    className={`absolute blur-[2px]`}
                    style={{
                        y: para.y,
                        top: para.top / 1.5 + 'vh',
                        left: para.left + 'vw',
                        rotate: para.rotate + 'deg',
                    }}
                >
                    {para.icon}
                </motion.div>
            ))}
            {iconsParallaxRight && iconsParallaxRight.length > 0 && iconsParallaxRight.map((para, index) => (
                <motion.div
                    key={'icon-right-' + index}
                    className={`absolute blur-[2px]`}
                    style={{
                        y: para.y,
                        top: para.top / 1.5 + 'vh',
                        right: para.right + 'vw',
                        rotate: para.rotate + 'deg',
                    }}
                >
                    {para.icon}
                </motion.div>
            ))}
        </motion.div>
    )
});