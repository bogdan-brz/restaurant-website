import Image from "next/image";
import { useEffect } from "react";
import pierogiImg from "../../../public/pierogi.jpg";
import styles from "./HomePage.module.css";

const HomePage = () => {
    let scrollReq = false;
    let scrollTimeout = false;
    const handleScroll = () => {
        if (scrollTimeout) return;
        scrollTimeout = true;
        setTimeout(() => {
            scrollTimeout = false;
            if (scrollReq) handleScroll();
            scrollReq = false;
            console.log("handling scroll");
        }, 100);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () =>
            window.removeEventListener("scroll", () => {
                scrollReq = true;
                handleScroll();
            });
    });
    return (
        <div className={"page " + styles.home}>
            <div className={styles.content}>
                <div className={styles.contentrow}>
                    <div className={styles.p1}>
                        <h1>
                            Welcome to{" "}
                            <span className={styles.logo}>The Pieróg</span>
                        </h1>
                        <p>
                            Our restaurant provides a unique, to this part of
                            the world, window into the polish cuisine. We
                            specialize, as you might have guessed in pierogi,
                            but our menu features many polish classics{" "}
                            <span>See Below</span>
                        </p>
                    </div>
                    <div className={styles.img1}>
                        <Image
                            width="1920px"
                            height="1280px"
                            layout="responsive"
                            src={pierogiImg}
                        />
                    </div>
                </div>
                <div className={styles.contentrow}>
                    <div className={styles.menu}>
                        <h2>Our Menu</h2>
                        <Image
                            width="1920px"
                            height="1280px"
                            layout="responsive"
                            src={pierogiImg}
                        />
                    </div>
                </div>
                <div className={styles.contentrow}>
                    <div className={styles.img1}>
                        <Image
                            width="1920px"
                            height="1280px"
                            layout="responsive"
                            src={pierogiImg}
                        />
                    </div>
                    <div className={styles.p1}>
                        <h1>
                            Welcome to{" "}
                            <span className={styles.logo}>The Pieróg</span>
                        </h1>
                        <p>
                            Our restaurant provides a unique, to this part of
                            the world, window into the polish cuisine. We
                            specialize, as you might have guessed in pierogi,
                            but our menu features many polish classics{" "}
                            <span>See Below</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
