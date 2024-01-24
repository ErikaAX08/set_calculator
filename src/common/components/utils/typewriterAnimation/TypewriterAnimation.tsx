import styles from "./TypewriterAnimation.module.css";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  elementType?: string;
  className?: string;
}

const TypewriterAnimation: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  elementType = "span",
  className,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const Element = elementType as keyof JSX.IntrinsicElements;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentCharIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentCharIndex]);
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, currentCharIndex]);

  return (
    <Element className={className}>
      {displayText}
      {currentCharIndex >= text.length ? null : (
        <span className={styles.cursor}></span>
      )}
    </Element>
  );
};

export default TypewriterAnimation;
