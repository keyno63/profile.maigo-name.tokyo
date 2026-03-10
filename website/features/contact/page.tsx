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
                            Email
                        </a>
                        <a
                            href="https://x.com/sample_account"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.contact_button}
                        >
                            X
                        </a>
                    </div>

                    <div className={styles.form_grid}>
                        <label className={styles.field}>
                            <span>Name</span>
                            <input type="text" placeholder="Your name" disabled />
                        </label>
                        <label className={styles.field}>
                            <span>Email</span>
                            <input type="email" placeholder="name@example.com" disabled />
                        </label>
                        <label className={styles.field_message}>
                            <span>Message</span>
                            <textarea placeholder="Type your message..." rows={5} disabled />
                        </label>
                    </div>

                    <button type="button" className={styles.submit_button} disabled>
                        Send (Sample)
                    </button>
                </section>
            </div>
        </div>
    );
};
