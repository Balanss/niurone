/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import  cn  from "../util/cn";

export const RevealTitle = ({
    text,
    revealText,
    children,
    className,
}) => {
    const [widthPercentage, setWidthPercentage] = useState(0);
    const cardRef = useRef(null);
    const [left, setLeft] = useState(0);
    const [localWidth, setLocalWidth] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);


    useEffect(() => {
        if (cardRef.current) {
            const { left, width: localWidth } =
                cardRef.current.getBoundingClientRect();
            setLeft(left);
            setLocalWidth(localWidth);
        }
    }, []);

    function mouseMoveHandler(event) {
        event.preventDefault();

        const { clientX } = event;
        if (cardRef.current) {
            const relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }

    function mouseLeaveHandler() {
        setIsMouseOver(false);
        setWidthPercentage(0);
    }
    function mouseEnterHandler() {
        setIsMouseOver(true);
    }

    const rotateDeg = (widthPercentage - 50) * 0.1;
    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onMouseMove={mouseMoveHandler}
            ref={cardRef}
            className={cn(
                " w-[20vw]   rounded-lg  relative overflow-hidden",
                className
            )}
        >
            {children}

            <div className="h-40  relative flex items-center overflow-hidden">
            <motion.div
                animate={
                    isMouseOver
                        ? {
                                opacity: 1,
                                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                            }
                        : {     opacity:0,
                                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                            }
                }
                transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
                className="absolute z-20 rounded   will-change-transform"
            >
               <div className=" overflow-hidden">
                    <p className="text-[2.9rem] xPc:text-[2.9rem] 2Xpc:text-[3rem] phones:text-[2.5rem] phones:mb-10   leading-[1.05em] linetracking-[2px]   pc:text-left  text-white cursor-pointer  mb-1  font-[500]  bg-clip-text text-transparent bg-white">
                    The ultimate  <br />
                     command center
                    </p>
                    <MemoizedStars />
                 
                </div>

            </motion.div>

            
                <motion.div
                    animate={{
                        left: `${widthPercentage}%`,
                        rotate: `${rotateDeg}deg`,
                        opacity: widthPercentage > 0 ? 1 : 0, }}
                    transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }} className="  bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform" ></motion.div>
                <div className=" overflow-hidden
                ">

                <motion.p
                 animate={{ opacity: isMouseOver ? 0 : 1 }}
                 transition={{ duration: 0.6 }}    className="text-[2.9rem] xPc:text-[3.2rem] 2Xpc:text-[3rem] phones:text-[2.5rem] phones:mb-10   leading-[1.05em] linetracking-[2px]   pc:text-left  text-white  cursor-pointer mb-1  font-[500]  bg-clip-text text-transparent bg-white" >
                        HUMAN BRAIN
                            </motion.p>
                    <MemoizedStars />
                </div>
            </div>
        </div>
    );
};

export const TextRevealCardTitle = ({
    children,
    className,
}) => {
    return (
        <h2 className={twMerge("text-white text-lg mb-2", className)}>
            {children}
        </h2>
    );
};

export const TextRevealCardDescription = ({
    children,
    className,
}) => {
    return (
        <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
    );
};

const Stars = () => {
    const randomMove = () => Math.random() * 4 - 2;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();
    return (
        <div className="">
            {[...Array(10)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        
                    }}
                    transition={{
                        duration: random() * 10 + 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `1px`,
                        height: `1px`,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                    className="inline-block"
                ></motion.span>
            ))}
        </div>
    );
};

export const MemoizedStars = memo(Stars);