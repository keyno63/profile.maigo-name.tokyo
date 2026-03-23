import styles from "./styles.module.css";

export const ContactPage: React.FC = () => {
    return (
        <div className={styles.contents}>
            <div className={styles.contents_wrapper}>
                <section className={styles.contact_section}>
                    <h2>Contact</h2>
                    <p className={styles.description}>
                        This is a sample contact page. The form is for visual layout only.
                    </p>
                    <div className={styles.contact_actions}>
                        <a href="mailto:sample@example.com" className={styles.contact_button}>
                            Email (Not Ready)
                        </a>
                        <a
                            href="https://x.com/maigo_name"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.contact_button}
                        >
                            X
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};
