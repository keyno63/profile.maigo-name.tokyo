export type Carrier = {
    name: string
    start: string
    descriptions?: string[]
}

type Details = {
    project: string
    description: string
    skills?: string[]
}

export const carriers: Carrier[] = [
    {
        name: "Webサービス",
        start: "2019/03",
        descriptions: [
            "現職。Webのサーバーサイドエンジニア・バックエンドエンジニアとして従事",
        ]
    },
    {
        name: "株式会社ネクストジェン",
        start: "2014/04",
        descriptions: [
            "ソフトウェア開発者としてSIP・VoIP製品の開発",
            "C5スイッチ・SBC・通話録音システムの設計・開発・検証などを中心に従事",
        ]
    },
    {
        name: "大阪府立大学院大学（現・大阪公立大学）",
        start: "2008/04",
        descriptions: [
            "大学・大学院時代は物性物理学の実験を専攻"
        ]
    },
]
