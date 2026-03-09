import styles from "./styles.module.css";

type MenuItem = {
    label: string;
};

const menus: MenuItem[] = [
    { label: "About" },
    { label: "Contact" },
];

export default function Menu() {
    return (
        <nav className={styles.menu_bar} aria-label="Main menu">
            <div className={styles.menu_inner}>
                {menus.map((menu) => (
                    <button key={menu.label} type="button" className={styles.menu_item}>
                        {menu.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
