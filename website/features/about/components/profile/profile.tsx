import styles from '../../styles.module.css'
import Icons from "@/features/about/components/profile/Icons";

export const Profile = () => {
    return (
        <section>
            <div className={styles.profile}>
                <Icons/>
                <div className={styles.profile_contents}>
                    <h2 className={styles.section_title}>Profile</h2>
                    <p className={styles.content_}>
                        名前迷子 / keyno63。サーバーサイドを中心に開発しているソフトウェアエンジニアです。
                    </p>
                    <p className={styles.content_}>
                        音声通信システムの開発を経て、現在はWebサービスや広告配信・計測システムのバックエンド開発に携わっています。
                    </p>
                    <p className={styles.content_}>
                        個人ではScalaを使った開発やOSSへの貢献、Webサイト・Androidアプリの制作に取り組んでいます。
                    </p>
                    <p className={styles.content_}>
                        データを分析し、その結果から仮説を立てて検証することに関心があります。
                    </p>
                </div>
            </div>
        </section>
    )
}
