
import { Profile } from "./components/profile";
import CarrierHistory from "@/features/about/components/carrier/carrier-history";
import styles from "./styles.module.css"

export const AboutPage: React.FC = () => {
    return (
        <div className={styles.contents}>
            <div className={styles.contents_wrapper}>
                <Profile/>
                <CarrierHistory/>
            </div>
        </div>
    )
}
