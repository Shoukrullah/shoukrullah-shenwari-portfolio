import CallMe from "./CallMe";
import Logo from "./Logo";
import NavItems from "./NavItems";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={`${styles.NavigationContainer} max-width`}>
      <div className={styles.logoNavItems}>
        <Logo />
        <NavItems />
      </div>
      <CallMe />
    </div>
  );
}

export default Navigation;
