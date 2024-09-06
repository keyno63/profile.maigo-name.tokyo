import {carriers} from "@/features/about/components/carrier/carrier";
import HistoryElement from "@/features/about/components/carrier/history-element";
import styles from "@/features/about/styles.module.css"

export default function CarrierHistory() {
    return (
        <section className={styles.history}>
            <h2 className={styles.history_title}>History</h2>
            {carriers.map((carrier) => (
                    <HistoryElement
                        name={carrier.name}
                        start={carrier.start}
                        descriptions={carrier.descriptions}/>
            ))}
        </section>
    )
}