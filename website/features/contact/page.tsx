import styles from "./styles.module.css";

export const ContactPage: React.FC = () => {
    return (
        <div className={styles.contents}>
            <div className={styles.contents_wrapper}>
                <section className={styles.contact_section}>
                    <h2>Contact</h2>
                    <p className={styles.description}>
                        ご連絡はXからお願いします。
                    </p>
                    <div className={styles.contact_actions}>
                        <a
                            href="https://x.com/maigo_name"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.contact_button}
                        >
                            Xで連絡する
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};
