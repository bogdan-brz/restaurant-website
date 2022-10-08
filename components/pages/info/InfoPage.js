import Hours from "./Hours";
import styles from "./InfoPage.module.css";
import Map from "./Map";

const InfoPage = () => {
    return (
        <div className={"page " + styles.info}>
            <div className={styles.content}>
                <h1>General Info</h1>
                <Hours />
                <Map />
            </div>
        </div>
    );
};

export default InfoPage;
