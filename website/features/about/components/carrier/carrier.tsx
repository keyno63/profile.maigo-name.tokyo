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
            "現職",
            "Webのサーバーサイドエンジニア・バックエンドエンジニアとして従事",
            "ポータルサイトのアプリ側バックエンド",
            "広告配信システムのSSPシステムのバックエンド",
            "広告配信システムのDSP計測システムのバックエンド",
        ]
    },
    {
        name: "株式会社ネクストジェン",
        start: "2014/04",
        descriptions: [
            "ソフトウェア開発者としてSIP・VoIP製品の開発",
            "C5スイッチ（IP電話交換器）、SBC（IP通話システムのGW）、および通話録音システムを中心に設計・開発・検証を中心に従事",
            "大手キャリア向けC5スイッチの開発、および検証業務",
            "大手キャリア向けSBCの開発、機能改善PJでの開発リードとして設計、開発業務",
            "企業向けIP-PBXの機能拡張PJでの開発リードとしてSEとの仕様検討、設計、および開発業務",
            "企業向け通話録音システム、電話帳システムの開発リードして設計から開発パートナー企業との調整業務に従事",
        ]
    },
    {
        name: "大阪府立大学・大学院（現・大阪公立大学）",
        start: "2008/04",
        descriptions: [
            "大学・大学院時代は物性物理学の実験を専攻"
        ]
    },
]
