import styles from "./SelectPage.module.css";

const SelectPage = (props) => {
    return (
        <div className={styles.selectpage}>
            <h2>{props.title}</h2>
            {props.selection.map((dish) => (
                <div className={styles.option}>
                    <button className={styles.}></button>
                    <div className={styles.dish}>
                        <b className={styles.name}>{dish.name}</b> -{" "}
                        <p className={styles.description}>{dish.description}</p>{" "}
                        <span className={styles.price}>{dish.price}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SelectPage;
