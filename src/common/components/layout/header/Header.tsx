import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCalculator } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import styles from "./Header.module.css";

interface HeaderProps {
  onHandleMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onHandleMenuToggle, isMenuOpen }) => {
  const handleIconClick = () => {
    onHandleMenuToggle();
  };

  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Sets Calculator</h1>
      <FontAwesomeIcon
        className={styles.icon}
        icon={ isMenuOpen ? faCalculator : faChevronDown }
        onClick={handleIconClick}
      />
    </header>
  );
};

export default Header;
