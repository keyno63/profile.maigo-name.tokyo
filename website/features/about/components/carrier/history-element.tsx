import {Carrier} from "@/features/about/components/carrier/carrier";
import styles from "@/features/about/styles.module.css"

export default function HistoryElement(carrier: Carrier) {
    return (
        <div className={styles.element_wrapper}>
            <div className={styles.triangle_right}>
                <div className={styles.element_joint}></div>
            </div>
            <div className={styles.element_body}>
                <div className={styles.date}>{carrier.start}-</div>
                <p className={styles.carrier_name}>
                    {carrier.name}
                </p>
                {carrier.descriptions?.map((description) =>
                    <p className={styles.carrier_description}>
                        {description}
                    </p>)
                }
            </div>
        </div>
    )
}