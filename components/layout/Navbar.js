import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <nav className={styles.navbar}>
            <div className={styles.navgroup + " " + styles.g1}>
                <Link href="/">
                    <a className={styles.logolink}>The Pieróg</a>
                </Link>
            </div>
            <div className={styles.navgroup + " " + styles.g2}>
                <div className={styles.navcol}>
                    <div className={styles.navrow}>
                        <Link href="/">
                            <a
                                className={`${styles.link} ${
                                    router.pathname == "/" ? styles.active : ""
                                }`}>
                                Home
                            </a>
                        </Link>
                    </div>
                    <div className={styles.navrow}>
                        <Link href="/reserve">
                            <a
                                className={`${styles.link} ${
                                    router.pathname == "/reserve"
                                        ? styles.active
                                        : ""
                                }`}>
                                Reserve a table
                            </a>
                        </Link>
                    </div>
                    <div className={styles.navrow}>
                        <div className={styles.rowitem}>
                            <Link href="/carryout">
                                <a
                                    className={`${styles.link} ${
                                        router.pathname == "/carryout"
                                            ? styles.active
                                            : ""
                                    }`}>
                                    Carryout
                                </a>
                            </Link>
                        </div>
                        <div className={styles.rowitem}>
                            <Link href="/delivery">
                                <a
                                    className={`${styles.link} ${
                                        router.pathname == "/delivery"
                                            ? styles.active
                                            : ""
                                    }`}>
                                    Delivery
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.navgroup + " " + styles.g3}>
                <div className={styles.navitem}>
                    <Link href="/contact">
                        <a
                            className={`${styles.link} ${
                                router.pathname == "/contact"
                                    ? styles.active
                                    : ""
                            }`}>
                            Contact Us
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
