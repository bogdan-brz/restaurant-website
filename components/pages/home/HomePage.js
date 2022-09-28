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
                <div className={styles.contentrow}>
                    <div className={styles.p1}>
                        <h1>
                            Welcome to{" "}
                            <span className={styles.logo}>The Pieróg</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Aspernatur labore a distinctio temporibus
                            minus. Ullam autem tenetur possimus voluptatum
                            voluptas vero eveniet laboriosam recusandae corrupti
                            alias sapiente tempore, iusto eaque? Soluta
                            reprehenderit, consequuntur sed ratione impedit eius
                            facilis. Voluptatem at facere atque sint, maiores
                            aliquid voluptates quos. Ipsa iste praesentium illum
                            numquam excepturi, a exercitationem. Quis
                            consectetur doloribus porro odio. Facere veniam
                            voluptatibus eum expedita magnam? A dolorem minus
                            facilis voluptas ratione amet libero asperiores
                            eligendi nesciunt accusamus at deserunt enim,
                            blanditiis nemo sed! Ducimus nesciunt sint
                            exercitationem quo necessitatibus!
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
