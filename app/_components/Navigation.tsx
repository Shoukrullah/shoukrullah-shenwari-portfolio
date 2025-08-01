"use client";
import { useEffect, useState } from "react";
import CallMe from "./CallMe";
import DarkMode from "./DarkMode/DarkMode";
import Logo from "./Logo";
import NavItems from "./NavItems";
import styles from "./Navigation.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

function Navigation() {
  const [isActive, setActive] = useState(false);
  const handelActive = (value: boolean) => {
    setActive(value);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handelQuery = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setActive(false);
      }
    };
    if (mediaQuery.matches) {
      setActive(false);
    }
    mediaQuery.addEventListener("change", handelQuery);

    return () => {
      mediaQuery.removeEventListener("change", handelQuery);
    };
  }, [isActive]);

  return (
    <div className="borderBottom">
      <div className={`${styles.NavigationContainer}  max-width `}>
        <div className={`${styles.logoNavItems}`}>
          <Logo />
          <NavItems isActive={isActive} onActive={handelActive} />
          <div
            className={styles.menuContainer}
            onClick={() => handelActive(true)}
          >
            <RxHamburgerMenu />
          </div>
        </div>
        <div className={styles.darkModeContainer}>
          <DarkMode />
          <CallMe />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
