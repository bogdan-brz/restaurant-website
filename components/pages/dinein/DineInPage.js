import Link from "next/link";
import styles from "./DineInPage.module.css";

const DineInPage = () => {
    return (
        <div className={"page " + styles.dinein}>
            <div className={styles.content}>
                <h1>Dine In</h1>
                <p>
                    You can make a reservation at{" "}
                    <Link href="/">
                        <a className={styles.link}>
                            tablereservationservice.com
                        </a>
                    </Link>
                    . If you choose to come without one bear in mind we tend to
                    run low on tables most evenings of the week.
                </p>
                <p>
                    You can find our menu on the{" "}
                    <Link href="/">
                        <a className={styles.link}>Home</a>
                    </Link>{" "}
                    page
                </p>
                <p>
                    We also offer{" "}
                    <Link href="/takeout?type=carryout">
                        <a className={styles.link}>carryout</a>
                    </Link>{" "}
                    and{" "}
                    <Link href="/takeout?type=delivery">
                        <a className={styles.link}>delivery</a>
                    </Link>{" "}
                    services if our accomodations don't suit you.
                </p>
            </div>
        </div>
    );
};

export default DineInPage;
