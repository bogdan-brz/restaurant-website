import styles from "./Footer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter();
    return (
        <nav className={styles.footer}>
            <div className={styles.foot}>@The Pieróg</div>
        </nav>
    );
};

export default Footer;
