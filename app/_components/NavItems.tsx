"use client";
import Link from "next/link";
import navItems from "../_lib/NavItems";
import { usePathname } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import { useEffect } from "react";
import styles from "./NavItems.module.css";

function NavItems({
  isActive,
  onActive,
}: {
  isActive: boolean;
  onActive: (value: boolean) => void;
}) {
  const pathName = usePathname();
  useEffect(() => {
    const handelKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onActive(false);
    };
    document.addEventListener("keydown", handelKeyDown);

    return () => document.removeEventListener("keydown", handelKeyDown);
  }, [isActive, onActive]);
  return (
    <>
      <nav
        className={`${styles.navContainer} ${isActive ? styles.active : ""}`}
      >
        <ul>
          {navItems.map((nav) => (
            <li
              onClick={() => onActive(false)}
              key={nav.id}
              className={
                pathName === nav.href
                  ? `${styles.activeLink} ${isActive ? styles.activeLinkRes : ""}`
                  : ""
              }
            >
              <Link href={nav.href}>{nav.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {isActive && (
        <span onClick={() => onActive(false)} className={styles.cross}>
          <RxCross1 />
        </span>
      )}
    </>
  );
}

export default NavItems;
