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
                        <div className={styles.rowitem}>
                            <Link href="/">
                                <a
                                    className={`${styles.link} ${
                                        router.pathname == "/"
                                            ? styles.active
                                            : ""
                                    }`}>
                                    Home
                                </a>
                            </Link>
                        </div>
                        <div className={styles.rowitem}>
                            <Link href="/info">
                                <a
                                    className={`${styles.link} ${
                                        router.pathname == "/info"
                                            ? styles.active
                                            : ""
                                    }`}>
                                    Info
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.navrow}>
                        <div className={styles.rowitem}>
                            <Link href="/dinein">
                                <a
                                    className={`${styles.link} ${
                                        router.pathname == "/dinein"
                                            ? styles.active
                                            : ""
                                    }`}>
                                    Dine in
                                </a>
                            </Link>
                        </div>
                        {/* <div className={styles.rowitem}>
                            <Link href="/togo?type=carryout">
                                <a
                                    className={`${styles.link} ${
                                        router.pathname == "/togo" &&
                                        router.query.type == "carryout"
                                            ? styles.active
                                            : ""
                                    }`}>
                                    Carryout
                                </a>
                            </Link>
                        </div>
                        <div className={styles.rowitem}>
                            <Link href="/togo?type=delivery">
                                <a
                                    className={`${styles.link} ${
                                        router.pathname == "/togo" &&
                                        router.query.type == "delivery"
                                            ? styles.active
                                            : ""
                                    }`}>
                                    Delivery
                                </a>
                            </Link>
                        </div> */}
                        <div className={styles.rowitem}>
                            <Link href="/takeout">
                                <a
                                    className={`${styles.link} ${
                                        router.pathname == "/takeout"
                                            ? styles.active
                                            : ""
                                    }`}>
                                    Takeout
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
