import Image from "next/image";
import { useEffect } from "react";
import pierogiImg from "../../../public/pierogi.jpg";
import blankMenu from "../../../public/blank-menu.jpeg";
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
                        <h1 className={styles.title1}>
                            Welcome to{" "}
                            <span className={styles.logo}>The Pieróg</span>
                        </h1>
                        <p>
                            Our restaurant provides a unique, to this part of
                            the world, window into the polish cuisine. We
                            specialize, as you might have guessed, in pierogi,
                            but our menu features many polish classics.
                        </p>
                    </div>
                </div>
                <div className={styles.contentcol}>
                    <h2 className={styles.title2}>Our Menu</h2>
                    <div className={styles.imgrow}>
                        <div className={styles.menuimg}>
                            <Image
                                width="1362px"
                                height="1920px"
                                layout="responsive"
                                src={blankMenu}
                            />
                        </div>
                        <div className={styles.menuimg}>
                            <Image
                                width="1362px"
                                height="1920px"
                                layout="responsive"
                                src={blankMenu}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.contentrow}>
                    <div className={styles.histimg}>
                        <Image
                            width="1920px"
                            height="1280px"
                            layout="responsive"
                            src={pierogiImg}
                        />
                    </div>
                    <div className={styles.p1}>
                        <h2 className={styles.title3}>Our history</h2>
                        <p className={styles.p2}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Facere autem eius qui nobis molestiae
                            doloremque, possimus saepe, libero deserunt quam
                            quas eligendi a at, odit dolor recusandae placeat
                            voluptatum exercitationem? Magnam enim eveniet
                            itaque, nesciunt minima ratione dolorum deserunt
                            fugit esse aliquam tempore saepe veniam rem natus
                            libero voluptatibus corrupti neque ullam molestias
                            explicabo inventore. Optio fugiat quo enim! Dolorum?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
