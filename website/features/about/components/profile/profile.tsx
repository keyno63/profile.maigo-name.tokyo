import styles from '../../styles.module.css'

export const Profile = () => {
    return (
        <div>
            <p className={styles.sample}>maigo-name profile</p>
            <p className={styles.content}>メインはサーバーサイドエンジニア</p>
            <p className={styles.content}>Webサイト、スマートフォンアプリの開発はプライベートでする程度</p>
            <p className={styles.content}>データの分析、結果からの仮説検証のような作業に興味が強いです</p>
        </div>
    )
}