"use client";
import Link from "next/link";
import navItems from "../_lib/NavItems";
import styles from "./NavItems.module.css";
import { usePathname } from "next/navigation";
function NavItems() {
  const pathName = usePathname();
  return (
    <nav className={styles.navContainer}>
      <ul>
        {navItems.map((nav) => (
          <li
            key={nav.id}
            className={pathName === nav.href ? styles.activeLink : ""}
          >
            <Link href={nav.href}>{nav.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavItems;
