import Link from "next/link";
import styles from "./styles.module.css";

/*
type ComponentItem = {
    label: string;
    href: string;
    description: string;
};
 */

type LinkItem = {
    label: string;
    href: string;
    note?: string;
};

type LinkCategory = {
    id: string;
    title: string;
    description: string;
    items: LinkItem[];
};

/*
const sitePages: ComponentItem[] = [
    {
        label: "About",
        href: "/",
        description: "プロフィール、スキル、経歴のページです。",
    },
    {
        label: "Contact",
        href: "/contact",
        description: "連絡先とSNS導線をまとめたページです。",
    },
];
*/

const categories: LinkCategory[] = [
    {
        id: "sample",
        title: "Sample",
        description: "準備中",
        items: [
            { label: "Blog Top", href: "https://www.maigo-name.tokyo/", note: "main" },
        ],
    },
];

export const ContentsPage: React.FC = () => {
    return (
        <div className={styles.contents}>
            <div className={styles.contents_wrapper}>
                <section className={styles.directory_section}>
                    <header className={styles.section_header}>
                        <h2>Directory</h2>
                        <p className={styles.description}>
                            共有したいコンテンツ一覧です。現在準備中。
                        </p>
                    </header>

                    <div className={styles.toc_panel}>
                        <h3 className={styles.toc_title}>Contents</h3>
                        <ul className={styles.toc_list}>
                            {/*<li>*/}
                            {/*    <span className={styles.toc_heading}>Site Pages</span>*/}
                            {/*    <ul className={styles.toc_nested}>*/}
                            {/*        {sitePages.map((page) => (*/}
                            {/*            <li key={page.href}>*/}
                            {/*                <Link href={page.href} className={styles.toc_link}>*/}
                            {/*                    {page.label}*/}
                            {/*                </Link>*/}
                            {/*            </li>*/}
                            {/*        ))}*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <a href={`#${category.id}`} className={styles.toc_link}>
                                        {category.title}
                                    </a>
                                    <ul className={styles.toc_nested}>
                                        {category.items.map((item) => (
                                            <li key={item.href}>
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className={styles.toc_link}
                                                >
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {categories.map((category) => (
                        <div key={category.id} id={category.id} className={styles.block}>
                            <div className={styles.block_header}>
                                <h3>{category.title}</h3>
                                <p className={styles.block_description}>{category.description}</p>
                            </div>
                            <div className={styles.link_list}>
                                {category.items.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={styles.link_row}
                                    >
                                        <span className={styles.card_label}>{item.label}</span>
                                        <span className={styles.link_meta}>
                                            {item.note ?? "external link"}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};
