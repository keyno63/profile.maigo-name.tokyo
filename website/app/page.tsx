import { AboutPage } from "../features/about";
import React from "react";
import Header from "@/features/header";
import Menu from "@/features/menu";

export default function Home() {
    return (
        <>
            <Header />
            <Menu />
            <AboutPage />
        </>
    );
}
