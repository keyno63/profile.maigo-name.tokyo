export type Skill = {
    // スキル名
    skillName: string,
    // アイコンのパス
    icon?: string,
    // 経験度合い
    experience?: string,
    // 自身のスキルレベル。若干・経験あり・練度あり
    level?:string,
    // 経験の種類. 業務、個人、OSSでの経験あり
    // carrier?: object[],
    // 説明文
    description?: string,
}

export const programLanguages: Skill[] = [
    {
        skillName: "Java",
        description: "業務でSpring Bootを用いたWebシステム・APIサーバーの実装を経験。",
    },
    {
        skillName: "Go",
        description: "業務でWebシステムを実装。標準のHTTPライブラリをベースに利用。",
    },
    {
        skillName: "Scala",
        description: "個人開発で継続的に使用し、OSSへの貢献も経験。GitHubで公開しているコードの中では最も使用量が多い言語。",
    },
    {
        skillName: "C++",
        description: "過去の業務で、音声通信の制御システムや非同期処理の実装に使用。現在は使用機会が少なくブランクあり。",
    },
    {
        skillName: "TypeScript",
        description: "個人のフロントエンド開発で使用。画面表示やルーティングを実装。",
    },
    {
        skillName: "Kotlin",
        description: "個人開発でAndroidアプリを制作。KotlinとSpring Bootを組み合わせた検証も経験。",
    },
    {
        skillName: "Shell Script",
        description: "業務や個人開発の小規模なバッチ処理で使用。",
    },
    {
        skillName: "Python",
        description: "小規模なバッチ処理で使用。",
    },
]

export const devs: Skill[] = [
    {
        skillName: "Docker",
        description: "業務と個人開発で使用。Dockerfileの作成やDocker Composeによる環境構築を経験。",
    },
    {
        skillName: "Kubernetes",
        description: "業務環境での利用経験あり。",
    },
    {
        skillName: "AWS",
        description: "過去の業務と個人開発でEC2、S3などを利用。",
    },
    {
        skillName: "Linux",
        description: "業務と個人開発で、CLI操作や開発・実行環境の整備を経験。",
    },
    {
        skillName: "Postgres",
        description: "SQLによる操作、設定変更、単体サーバーの構築を経験。",
    },
    {
        skillName: "SQL",
        description: "業務でデータの検索・更新やテーブルを扱うために使用。",
    },
    {
        skillName: "React",
        description: "個人のフロントエンド開発で使用。",
    },
    {
        skillName: "Next.js",
        description: "本サイトの制作に使用。業務では小規模な内部ツールの保守を経験。",
    },
    {
        skillName: "HTML/CSS",
        description: "本サイトを含む個人のWebサイト制作で使用。CSSもスクラッチで作成。",
    },
]
export const others: Skill[] = [
    {
        skillName: "開発リード",
        description: "5人程度のプロジェクトで、仕様検討・設計・開発や関係者との調整を担当。複数回の開発リード経験あり。",
    },
    {
        skillName: "GitHub",
        description: "個人開発のコード公開、バージョン管理、GitHub ActionsによるCIに使用。",
    },
    {
        skillName: "バージョン管理",
        description: "現在はGitを中心に使用。SVNも過去の業務で経験。",
    },
    {
        skillName: "CI",
        description: "業務でCIを利用。個人開発ではGitHub Actionsを使用し、CircleCIも過去に経験。",
    },
]
