import Link from "next/link";

type menuItem = {
    label: string
    href: string
}

const menus = [
    {
        label: "About",
        href: "/",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Contact",
        href: "/contact",
    },
]

export default function Menu() {

    return <div className={undefined}>
        <div className={undefined}>
            {menus.map((menu) => {
                return <MenuItem key={menu.label} {...menu}></MenuItem>
            })}
        </div>
    </div>
}

function MenuItem(props: menuItem) {
    return (
        <div>
            <Link href={props.href} as={props.href}>
                {props.label}
            </Link>
        </div>
    )
}
