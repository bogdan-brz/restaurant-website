import styles from "./ContactPage.module.css";

const ContactPage = () => {
    return (
        <div className={"page " + styles.contact}>
            <div className={styles.content}>
                <h1>Contact Info</h1>
                <div className={styles.info}>
                    email: <span>contactinfo@domain.com</span>
                </div>
                <div className={styles.info}>
                    phone number: <span>###-###-####</span>
                </div>
                <p>
                    We usually respond to emails within a couple hours even
                    outside of our open hours, but we take phone calls only
                    within open hours.
                </p>
            </div>
        </div>
    );
};

export default ContactPage;
