import { useRouter } from "next/router";
import FoodSelect from "./FoodSelect";
import styles from "./TakeoutPage.module.css";

const ToGoPage = () => {
    const router = useRouter();
    const changeQuery = (type) => {
        router.query.type = type;
        router.push(router);
    };
    return (
        <div className={"page " + styles.togo}>
            <div className={styles.content}>
                <div className={styles.typeselect}>
                    <span
                        className={`${styles.selectbtn} ${
                            router.query.type == "carryout"
                                ? styles.selected
                                : ""
                        }`}
                        onClick={() => changeQuery("carryout")}>
                        Carryout
                    </span>
                    <span
                        className={`${styles.selectbtn} ${
                            router.query.type == "delivery"
                                ? styles.selected
                                : ""
                        }`}
                        onClick={() => changeQuery("delivery")}>
                        Delivery
                    </span>
                </div>
                <FoodSelect />
            </div>
        </div>
    );
};

export default ToGoPage;
