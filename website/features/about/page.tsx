
import { Profile } from "./components/profile";
import CarrierHistory from "@/features/about/components/carrier/carrier-history";
import styles from "./styles.module.css"
import SkillSet from "@/features/about/components/skills/skill-set";

export const AboutPage: React.FC = () => {
    return (
        <div className={styles.contents}>
            <div className={styles.contents_wrapper}>
                <Profile/>
                <SkillSet/>
                <CarrierHistory/>
            </div>
        </div>
    )
}
