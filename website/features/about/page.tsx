
import { Profile } from "./components/profile";
import styles from "./styles.module.css"
import SkillSet from "@/features/about/components/skills/skill-set";
import CarrierHistory from "@/features/about/components/carrier/carrier-history";

export const AboutPage: React.FC = () => {
    return (
        <div className={styles.contents}>
            <div className={styles.contents_wrapper}>
                <Profile/>
                <section className={styles.now_section}>
                    <h2 className={styles.section_title}>Now</h2>
                    <div className={styles.now_contents}>
                        <p>
                            現在はWebサービスのバックエンド開発に携わっています。
                        </p>
                        <p>
                            業務では以下を中心に扱っています。
                        </p>
                        <ul className={styles.now_list}>
                            <li><strong>バックエンド:</strong> Go, Java</li>
                            <li><strong>フロントエンド:</strong> TypeScript</li>
                            <li><strong>インフラ:</strong> Kubernetes</li>
                            <li><strong>監視:</strong> Prometheus, Grafana, Splunk</li>
                        </ul>
                        <p>
                            個人ではScalaを使った開発やOSS活動に取り組んでいます。データ分析と、分析結果をもとにした仮説検証にも関心があります。
                        </p>
                        <p className={styles.updated_at}>2026年9月更新</p>
                    </div>
                </section>
                <SkillSet/>
                <CarrierHistory/>
            </div>
        </div>
    )
}
