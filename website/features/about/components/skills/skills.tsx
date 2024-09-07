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
        description: "SpringBootを用いたWebシステム・APIサーバーの実装まで可能",
    },
    {
        skillName: "Go",
        description: "Webシステムの実装での経験あり。業務ではデフォルトのHTTPライブラリをベースに利用",
    },
    {
        skillName: "Scala",
        description: "個人での開発での経験。実務での経験はないが、OSSへの貢献などの経験あり。自身のGitHub上では実装コード量が最も多い",
    },
    {
        skillName: "C++",
        description: "最初の会社でメイン言語のため経験。音声通信の制御システムの実装を主に、非同期処理の実装まで経験あり。離職後はほぼ使っていないのでブランクあり",
    },
    {
        skillName: "TypeScript",
        description: "フロントエンド開発での経験。画面の表示・ルーティングなど簡易な実装は可能",
    },
    {
        skillName: "Kotlin",
        description: "個人の開発での経験あり。Androidアプリでの開発やKotlin SpringBootの試運転",
    },
    {
        skillName: "ShellScript",
        description: "軽微なバッチ処理での利用経験が",
    },
    {
        skillName: "Python",
        description: "軽微なバッチ処理での利用経験あり",
    },
]

export const devs: Skill[] = [
    {
        skillName: "Docker",
        description: "業務でも利用する。docker composeも対応可能。Dockerfileの作成まで可能",
    },
    {
        skillName: "Kubernetes",
        description: "業務で利用実績はあるが、独自色がある可能性",
    },
    {
        skillName: "AWS",
        description: "以前の業務や個人での経験。EC2、S3など基本的な理解まであり。近年のトレンドやTerraformを使ってまでは難しい",
    },
    {
        skillName: "Linux",
        description: "CLIでの操作から環境整備の経験まであり。一般的なエンジニアの領域までは理解している。",
    },
    {
        skillName: "Postgres",
        description: "SQLでの利用、設定変更、および単体サーバーの構築まで可能",
    },
    {
        skillName: "SQL",
        description: "基本的な操作まで可能",
    },
    {
        skillName: "React",
        description: "簡単な理解",
    },
    {
        skillName: "Next.js",
        description: "簡単な理解はある。業務実績も軽微な内部ツールの保守程度。このサイトの作成で利用",
    },
    {
        skillName: "HTML/CSS",
        description: "簡単な理解まで。CSSは本サイトのレベルのものをスクラッチで作成",
    },
]
export const others: Skill[] = [
    {
        skillName: "開発リード",
        description: "5人程度のプロジェクトでの開発リードの経験は複数回あり",
    },
    {
        skillName: "GitHub",
        description: "",
    },
    {
        skillName: "Version管理",
        description: "Gitをメインで利用中、SVNはブランクありも経験あり",
    },
    {
        skillName: "CI",
        description: "標準的な知識・経験はある認識。業務でも利用。個人利用ではGitHub Actionの利用あり。CircleCIはブランクがある。",
    },
]
