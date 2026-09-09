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
        name: "Webサービス企業",
        start: "2019/03〜現在",
        descriptions: [
            "サーバーサイド・バックエンドエンジニアとして、Webサービスの開発に従事",
            "ポータルサイトのアプリ向けバックエンドを担当",
            "広告配信に関わるSSPシステムのバックエンドを担当",
            "広告計測システムにおけるバックエンドを担当",
        ]
    },
    {
        name: "通信キャリア向け音声・IP通信インフラソリューション企業",
        start: "2014/04〜2019/02",
        descriptions: [
            "ソフトウェア開発者としてSIP・VoIP製品を開発",
            "C5スイッチ（IP電話交換機）、SBC（IP通話システムのゲートウェイ）、通話録音システムの設計・開発・検証に従事",
            "大手キャリア向けC5スイッチの開発、および検証業務",
            "大手通信事業者向けSBCの機能改善プロジェクトで、開発リードとして設計・開発を担当",
            "企業向けIP-PBXの機能拡張プロジェクトで、SEとの仕様検討・設計・開発を担当",
            "企業向け通話録音・電話帳システムで開発をリードし、設計と開発パートナー企業との調整を担当",
        ]
    },
    {
        name: "大阪府立大学・大学院（現・大阪公立大学）",
        start: "2008/04〜2014/03",
        descriptions: [
            "大学・大学院で物性物理学の実験を専攻"
        ]
    },
]
