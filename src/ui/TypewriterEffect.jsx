<<<<<<< HEAD
/* eslint-disable react/prop-types */
"use client";

import cn from "../util/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words = [{ text: "HUMAN" },{text: 'BRAIN'}],
=======
"use client";

import  cn  from "../util/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";


export const TypewriterEffect = ({
  words,
>>>>>>> 444c3643c3bbc3b3377abc10637858042d6d682b
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
<<<<<<< HEAD
    if (isInView && scope.current && scope.current.querySelectorAll('span').length > 0) {
=======
    if (isInView) {
>>>>>>> 444c3643c3bbc3b3377abc10637858042d6d682b
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
<<<<<<< HEAD
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                initial={{}}
                key={`char-${index}`}
                className={cn(
                  `text-white  opacity-0 hidden`,
                  word.className
                )}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-base phones:text-3xl md:text-3xl lg:text-5xl font-bold text-left",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeatType: "reverse" }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-custom",
          cursorClassName
        )}
      />
    </div>
=======
      motion.div({ref: scope, className: "inline"}, wordsArray.map((word, idx) => {
        return (
          div({ key: `word-${idx}`, className: "inline-block" }, word.text.map((char, index) => (
            motion.span({
              initial: {},
              key: `char-${index}`,
              className: cn(
                `dark:text-white text-black opacity-0 hidden`,
                word.className
              ),
            }, char)
          )),
          "&nbsp;"
        )
      )}))
    );
  };
  return (
    div({
      className: cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )
    }, renderWords(),
    motion.span({
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.8, repeat: Infinity, repeatType: "reverse" },
      className: cn(
        "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
        cursorClassName
      )
    }))
>>>>>>> 444c3643c3bbc3b3377abc10637858042d6d682b
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
<<<<<<< HEAD
      <div>
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <span key={`char-${index}`} className={cn(`text-white  `, word.className)}>
                {char}
              </span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
=======
      div({}, wordsArray.map((word, idx) => {
        return (
          div({ key: `word-${idx}`, className: "inline-block" }, word.text.map((char, index) => (
            span({ key: `char-${index}`, className: cn(`dark:text-white text-black `, word.className) }, char)
          )),
          "&nbsp;"
        ));
      }))
>>>>>>> 444c3643c3bbc3b3377abc10637858042d6d682b
    );
  };

  return (
<<<<<<< HEAD
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};
=======
    div({ className: cn("flex space-x-1 my-6", className) },
      motion.div({
        className: "overflow-hidden pb-2",
        initial: { width: "0%" },
        whileInView: { width: "fit-content" },
        transition: { duration: 2, ease: "linear", delay: 1 }
      }, 
      div({
        className: "text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold",
        style: { whiteSpace: "nowrap" }
      }, renderWords())),
      motion.span({
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8, repeat: Infinity, repeatType: "reverse" },
        className: cn(
          "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )
      })
    )
  );
};
>>>>>>> 444c3643c3bbc3b3377abc10637858042d6d682b
