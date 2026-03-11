import Link from "next/link";
import styles from "./styles.module.css";

type MenuItem = {
    label: string;
    href: string;
};

const menus: MenuItem[] = [
    { label: "About", href: "/" },
    { label: "Contact", href: "/contact" },
];

export default function Menu() {
    return (
        <nav className={styles.menu_bar} aria-label="Main menu">
            <div className={styles.menu_inner}>
                {menus.map((menu) => (
                    <Link key={menu.label} href={menu.href} className={styles.menu_item}>
                        {menu.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
