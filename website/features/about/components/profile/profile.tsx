import styles from '../../styles.module.css'
import Icons from "@/features/about/components/profile/Icons";

export const Profile = () => {
    return (
        <section>
            <div className={styles.profile}>
                <Icons/>
                <div className={styles.profile_contents}>
                    <p className={styles.section_title}>Who am I?</p>
                    <p className={styles.content_}>名前：</p>
                    <p className={styles.content_}>ハンドルネーム: 名前迷子/keyno63</p>
                    <p className={styles.content_}></p>
                    <p className={styles.content_}>職業プログラマーです</p>
                    <p className={styles.content_}>メインはサーバーサイドエンジニア</p>
                    <p className={styles.content_}>Webサイト、スマートフォンアプリの開発はプライベートでの経験</p>
                    <p className={styles.content_}>データの分析、解析結果から仮説検証の作業を行うことに興味が強いです</p>
                </div>
            </div>
        </section>
    )
}