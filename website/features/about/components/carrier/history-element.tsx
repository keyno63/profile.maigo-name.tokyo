"use client";

import {useState} from "react";
import {Carrier} from "@/features/about/components/carrier/carrier";
import styles from "@/features/about/styles.module.css"

export default function HistoryElement(carrier: Carrier) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={styles.element_wrapper}>
            <div className={styles.triangle_right}>
                <button
                    type="button"
                    className={styles.triangle_button}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Hide details" : "Show details"}
                    onClick={() => setIsOpen((open) => !open)}
                />
                <div className={styles.element_joint}></div>
            </div>
            <div className={`${styles.element_body} ${!isOpen ? styles.element_body_closed : ""}`}>
                <div className={styles.date}>{carrier.start}-</div>
                <p className={styles.carrier_name}>
                    {carrier.name}
                </p>
                {carrier.descriptions?.map((description, index) =>
                    <p key={`${carrier.start}-${index}`} className={styles.carrier_description}>
                        {description}
                    </p>)
                }
            </div>
        </div>
    )
}
